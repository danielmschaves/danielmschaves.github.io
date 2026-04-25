"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/lib/actions";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { ContactState } from "@/lib/actions";

const initialState: ContactState = {
  success: false,
  message: "",
  errors: {},
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  background: 'var(--ink-1)',
  border: '1px solid var(--line)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text)',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'all 250ms var(--ease-out)',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 6,
  fontSize: '0.8125rem',
  fontWeight: 500,
  color: 'var(--text)',
};

function SubmitButton({ isVerified }: { isVerified: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || !isVerified}
      className="btn-primary w-full justify-center"
      style={{ opacity: pending || !isVerified ? 0.6 : 1, cursor: pending || !isVerified ? 'not-allowed' : 'pointer' }}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="h-4 w-4" />
          Send Message
        </>
      )}
    </button>
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

  return (
    <div
      style={{
        background: 'var(--ink-2)',
        border: '1px solid var(--line)',
        borderRadius: 18,
        padding: 32,
      }}
    >
      <h3
        className="mb-2 font-bold"
        style={{ fontSize: 22, color: 'var(--text)', letterSpacing: '-0.015em' }}
      >
        Get in Touch
      </h3>
      <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
        Send a message and I&apos;ll get back to you soon.
      </p>

      {state.success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex items-center gap-2 rounded-md text-sm"
          style={{
            padding: '10px 12px',
            background: 'rgba(16,185,129,0.10)',
            color: 'var(--success)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <CheckCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </motion.div>
      )}

      {state.success === false && state.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 flex items-center gap-2 text-sm"
          style={{
            padding: '10px 12px',
            background: 'rgba(239,68,68,0.10)',
            color: 'var(--danger)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </motion.div>
      )}

      <form ref={formRef} action={formAction} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = 'var(--primary-500)';
              (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px var(--primary-ring)';
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = state.errors?.name ? 'var(--danger)' : 'var(--line)';
              (e.target as HTMLInputElement).style.boxShadow = 'none';
            }}
          />
          {state.errors?.name && (
            <p className="mt-1 text-xs" style={{ color: 'var(--danger)' }}>{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = 'var(--primary-500)';
              (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px var(--primary-ring)';
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = state.errors?.email ? 'var(--danger)' : 'var(--line)';
              (e.target as HTMLInputElement).style.boxShadow = 'none';
            }}
          />
          {state.errors?.email && (
            <p className="mt-1 text-xs" style={{ color: 'var(--danger)' }}>{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" style={labelStyle}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            required
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor = 'var(--primary-500)';
              (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px var(--primary-ring)';
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor = state.errors?.subject ? 'var(--danger)' : 'var(--line)';
              (e.target as HTMLInputElement).style.boxShadow = 'none';
            }}
          />
          {state.errors?.subject && (
            <p className="mt-1 text-xs" style={{ color: 'var(--danger)' }}>{state.errors.subject[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            style={{ ...inputStyle, resize: 'vertical' }}
            onFocus={(e) => {
              (e.target as HTMLTextAreaElement).style.borderColor = 'var(--primary-500)';
              (e.target as HTMLTextAreaElement).style.boxShadow = '0 0 0 3px var(--primary-ring)';
            }}
            onBlur={(e) => {
              (e.target as HTMLTextAreaElement).style.borderColor = state.errors?.message ? 'var(--danger)' : 'var(--line)';
              (e.target as HTMLTextAreaElement).style.boxShadow = 'none';
            }}
          />
          {state.errors?.message && (
            <p className="mt-1 text-xs" style={{ color: 'var(--danger)' }}>{state.errors.message[0]}</p>
          )}
        </div>

        <div className="flex justify-center">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
            onSuccess={setToken}
          />
        </div>
        <input type="hidden" name="cf-turnstile-response" value={token} />

        <SubmitButton isVerified={!!token} />
      </form>
    </div>
  );
}
