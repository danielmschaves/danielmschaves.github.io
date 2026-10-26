"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { sendEmail, type ContactState } from "@/lib/actions";
import Button from "@/components/Button";
import { AlertIcon, CheckIcon, SendIcon, SpinnerIcon } from "@/components/Icons";

const initialState: ContactState = {
  success: false,
  message: "",
  errors: {},
};

type FieldName = "name" | "email" | "subject" | "message";

const fields: { name: FieldName; label: string; type: string; placeholder: string }[] = [
  { name: "name", label: "NAME", type: "text", placeholder: "Your name" },
  { name: "email", label: "EMAIL", type: "email", placeholder: "you@company.com" },
  { name: "subject", label: "SUBJECT", type: "text", placeholder: "What’s it about?" },
  { name: "message", label: "MESSAGE", type: "textarea", placeholder: "A few lines on the program, team or question." },
];

function SubmitButton({ isVerified }: { isVerified: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="primary"
      type="submit"
      disabled={pending || !isVerified}
      icon={pending ? <SpinnerIcon /> : <SendIcon />}
    >
      {pending ? "Sending…" : "Send message"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
      setToken("");
    }
  }, [state.success]);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <form ref={formRef} action={formAction} className="lg-form" style={{ marginTop: 56 }} noValidate>
      {state.success && (
        <div className="lg-notice lg-notice--success" role="status">
          <CheckIcon />
          <span>
            <b>Sent. </b>
            {state.message}
          </span>
        </div>
      )}
      {!state.success && state.message && (
        <div className="lg-notice lg-notice--error" role="alert">
          <AlertIcon />
          <span>
            <b>Not sent. </b>
            {state.message}
          </span>
        </div>
      )}

      {fields.map((f) => {
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
        <div className="lg-captcha">CAPTCHA NOT CONFIGURED — SET NEXT_PUBLIC_TURNSTILE_SITE_KEY</div>
      )}
      <input type="hidden" name="cf-turnstile-response" value={token} />

      <div className="lg-form__foot">
        <span className="lg-mono-sm lg-muted">GOES STRAIGHT TO MY INBOX</span>
        <SubmitButton isVerified={!!token} />
      </div>
    </form>
  );
}
