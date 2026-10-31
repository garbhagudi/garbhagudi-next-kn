import type { ReactNode } from "react";

export const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4 transition-transform duration-[250ms] group-hover:translate-x-[3px]"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const LineIcon = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);
