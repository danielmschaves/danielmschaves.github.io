import type { ReactNode } from "react";

/* Ledger's handful of 24px stroke icons (round caps, currentColor). Decorative by default. */
function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function SunIcon() {
  return (
    <Icon>
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Icon>
  );
}

export function MoonIcon() {
  return (
    <Icon>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </Icon>
  );
}

export function CheckIcon() {
  return (
    <Icon>
      <path d="M20 6 9 17l-5-5" />
    </Icon>
  );
}

export function AlertIcon() {
  return (
    <Icon>
      <circle cx={12} cy={12} r={9} />
      <path d="M12 8v4M12 16h.01" />
    </Icon>
  );
}

export function SendIcon() {
  return (
    <Icon>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </Icon>
  );
}

export function SpinnerIcon() {
  return (
    <Icon className="lg-spin">
      <path d="M21 12a9 9 0 1 1-6.2-8.56" />
    </Icon>
  );
}
