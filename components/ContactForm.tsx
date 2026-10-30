"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { track } from "@vercel/analytics";
import { sendEmail, type ContactState } from "@/lib/actions";
import Button from "@/components/Button";
import { AlertIcon, CheckIcon, SendIcon, SpinnerIcon } from "@/components/Icons";
import type { Dictionary, Lang } from "@/lib/i18n";

type FormStrings = Dictionary["form"];

const initialState: ContactState = {
  success: false,
  message: "",
  errors: {},
};

type FieldName = "name" | "email" | "subject" | "message";

function fieldsFor(t: FormStrings): { name: FieldName; label: string; type: string; placeholder: string }[] {
  return [
    { name: "name", label: t.name, type: "text", placeholder: t.phName },
    { name: "email", label: t.email, type: "email", placeholder: t.phEmail },
    { name: "subject", label: t.subject, type: "text", placeholder: t.phSubject },
    { name: "message", label: t.message, type: "textarea", placeholder: t.phMessage },
  ];
}

function SubmitButton({ isVerified, t }: { isVerified: boolean; t: FormStrings }) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="primary"
      type="submit"
      disabled={pending || !isVerified}
      icon={pending ? <SpinnerIcon /> : <SendIcon />}
    >
      {pending ? t.sending : t.submit}
    </Button>
  );
}

/* The server action reads the hidden `lang` field and answers in that language. */
export default function ContactForm({ lang, t }: { lang: Lang; t: FormStrings }) {
  const [state, formAction] = useFormState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setToken("");
      track("contact_submit", { lang });
    }
  }, [state.success, lang]);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <form ref={formRef} action={formAction} className="lg-form" noValidate>
      {state.success && (
        <div className="lg-notice lg-notice--success" role="status">
          <CheckIcon />
          <span>
            <b>{t.sentLead} </b>
            {state.message}
          </span>
        </div>
      )}
      {!state.success && state.message && (
        <div className="lg-notice lg-notice--error" role="alert">
          <AlertIcon />
          <span>
            <b>{t.failedLead} </b>
            {state.message}
          </span>
        </div>
      )}

      <input type="hidden" name="lang" value={lang} />

      {fieldsFor(t).map((f) => {
        const id = `cf-${f.name}`;
        const err = state.errors?.[f.name]?.[0];
        const common = {
          id,
          name: f.name,
          className: "lg-input",
          placeholder: f.placeholder,
          required: true,
          "aria-invalid": !!err,
          "aria-describedby": err ? `${id}-err` : undefined,
        };
        return (
          <div key={f.name} className="lg-field">
            <label className="lg-field__label" htmlFor={id}>
              {f.label}
            </label>
            {f.type === "textarea" ? <textarea rows={5} {...common} /> : <input type={f.type} {...common} />}
            {err && (
              <p className="lg-field__error" id={`${id}-err`} role="alert">
                <AlertIcon />
                {err}
              </p>
            )}
          </div>
        );
      })}

      {siteKey ? (
        <Turnstile siteKey={siteKey} onSuccess={setToken} />
      ) : (
        <div className="lg-captcha">{t.captchaMissing}</div>
      )}
      <input type="hidden" name="cf-turnstile-response" value={token} />

      <div className="lg-form__foot">
        <span className="lg-mono-sm lg-muted">{t.inbox}</span>
        <SubmitButton isVerified={!!token} t={t} />
      </div>
    </form>
  );
}
