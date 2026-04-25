import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Me - Daniel Chaves",
  description: "Get in touch for project inquiries or collaboration opportunities.",
};

const contactItems = [
  {
    icon: <Mail className="h-4 w-4 shrink-0" />,
    label: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: <MapPin className="h-4 w-4 shrink-0" />,
    label: siteConfig.location,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_460px]">

          {/* Left — info */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <h1
              className="font-bold mb-4"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}
            >
              Let&apos;s Work Together
            </h1>
            <p
              className="mb-10 text-[17px] leading-relaxed"
              style={{ color: 'var(--text-muted)', maxWidth: 480 }}
            >
              Have a project in mind? I&apos;d love to hear about it. Fill out the form
              and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="flex flex-col">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm py-3"
                  style={{
                    borderTop: '1px solid var(--line-soft)',
                    color: 'var(--text-body)',
                  }}
                >
                  <span style={{ color: 'var(--primary-400)' }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-[var(--primary-400)]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
              <div style={{ borderBottom: '1px solid var(--line-soft)' }} />
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
