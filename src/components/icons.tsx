import type { ReactElement, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: Props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, (props: Props) => ReactElement> = {
  "ai-voice-agents": (props) => (
    <Base {...props}>
      <path {...stroke} d="M16 6v14" />
      <path {...stroke} d="M10 10.5v5" />
      <path {...stroke} d="M22 10.5v5" />
      <path {...stroke} d="M7 13v2.5" />
      <path {...stroke} d="M25 13v2.5" />
      <path {...stroke} d="M12 24.5h8" />
      <path {...stroke} d="M16 20v4.5" />
    </Base>
  ),
  "whatsapp-ai-agents": (props) => (
    <Base {...props}>
      <path
        {...stroke}
        d="M8 9.5h12.5a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H14l-4.5 3.2V22H8a3 3 0 0 1-3-3v-6.5a3 3 0 0 1 3-3Z"
      />
      <path {...stroke} d="M11 14.5h7M11 17.5h4.5" />
    </Base>
  ),
  "ai-chatbots": (props) => (
    <Base {...props}>
      <rect {...stroke} x="6" y="7" width="20" height="14" rx="4" />
      <path {...stroke} d="M12 25h8M16 21v4" />
      <circle cx="12.5" cy="14" r="1.1" fill="currentColor" />
      <circle cx="16" cy="14" r="1.1" fill="currentColor" />
      <circle cx="19.5" cy="14" r="1.1" fill="currentColor" />
    </Base>
  ),
  "business-automation": (props) => (
    <Base {...props}>
      <rect {...stroke} x="4.5" y="6" width="8" height="8" rx="2" />
      <rect {...stroke} x="19.5" y="6" width="8" height="8" rx="2" />
      <rect {...stroke} x="12" y="18" width="8" height="8" rx="2" />
      <path {...stroke} d="M12.5 10h7M16 14v4" />
    </Base>
  ),
  "crm-erp-systems": (props) => (
    <Base {...props}>
      <rect {...stroke} x="5" y="6" width="22" height="20" rx="3" />
      <path {...stroke} d="M5 12h22" />
      <path {...stroke} d="M11 17h6M11 21h10" />
    </Base>
  ),
  "saas-products": (props) => (
    <Base {...props}>
      <rect {...stroke} x="6" y="8" width="16" height="12" rx="2.5" />
      <path {...stroke} d="M10 14h8" />
      <path {...stroke} d="M18 20h8.5a1.5 1.5 0 0 0 1.5-1.5V12" />
    </Base>
  ),
  "web-applications": (props) => (
    <Base {...props}>
      <rect {...stroke} x="4.5" y="6.5" width="23" height="17" rx="3" />
      <path {...stroke} d="M4.5 11.5h23" />
      <circle cx="8.2" cy="9" r="0.8" fill="currentColor" />
      <circle cx="11" cy="9" r="0.8" fill="currentColor" />
    </Base>
  ),
  "android-ios-applications": (props) => (
    <Base {...props}>
      <rect {...stroke} x="10" y="4.5" width="12" height="23" rx="3" />
      <path {...stroke} d="M14 7.2h4" />
      <circle cx="16" cy="23.2" r="0.9" fill="currentColor" />
    </Base>
  ),
  "computer-vision-solutions": (props) => (
    <Base {...props}>
      <path {...stroke} d="M5 16s4.2-7 11-7 11 7 11 7-4.2 7-11 7S5 16 5 16Z" />
      <circle {...stroke} cx="16" cy="16" r="3.2" />
      <path {...stroke} d="M7 7.5 9.2 9.7M25 7.5 22.8 9.7" />
    </Base>
  ),
  "embedded-systems-iot": (props) => (
    <Base {...props}>
      <rect {...stroke} x="9" y="9" width="14" height="14" rx="3" />
      <path {...stroke} d="M16 9V5.5M16 23v3.5M9 16H5.5M23 16h3.5" />
      <circle {...stroke} cx="16" cy="16" r="2.2" />
    </Base>
  ),
  "ui-ux-frontend-development": (props) => (
    <Base {...props}>
      <rect {...stroke} x="5" y="6" width="14" height="18" rx="2.5" />
      <path {...stroke} d="M8.5 11h7M8.5 15h5" />
      <path {...stroke} d="M19 18.5 23.5 14l3 3-4.5 4.5-3.4.6.4-3.6Z" />
    </Base>
  ),
};

export function ServiceIcon({
  slug,
  className = "h-6 w-6",
}: {
  slug: string;
  className?: string;
}) {
  const Icon = icons[slug] ?? icons["ai-voice-agents"];
  return <Icon className={className} />;
}
