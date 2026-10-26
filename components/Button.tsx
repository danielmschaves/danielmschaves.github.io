import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "link";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/* Literal class names: Tailwind drops @layer components rules it can't find in source. */
const variantClass: Record<Variant, string | undefined> = {
  primary: "lg-btn--primary",
  outline: undefined,
  link: "lg-btn--link",
};

function classes(variant: Variant, className?: string) {
  return cn("lg-btn", variantClass[variant], className);
}

/* Internal routes go through next/link; files, mailto and external URLs stay plain anchors. */
function isInternal(href: string) {
  return (href.startsWith("/") || href.startsWith("#")) && !/\.\w+$/.test(href.split("#")[0]);
}

export default function Button(props: ButtonProps | LinkProps) {
  if (props.href !== undefined) {
    const { variant = "outline", icon, children, className, href, ...rest } = props as LinkProps;
    if (isInternal(href)) {
      return (
        <Link href={href} className={classes(variant, className)} {...rest}>
          {icon}
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes(variant, className)} {...rest}>
        {icon}
        {children}
      </a>
    );
  }
  const { variant = "outline", icon, children, className, type = "button", ...rest } = props as ButtonProps;
  return (
    <button type={type} className={classes(variant, className)} {...rest}>
      {icon}
      {children}
    </button>
  );
}
