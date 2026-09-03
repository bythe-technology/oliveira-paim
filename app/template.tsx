import type { ReactNode } from "react";

interface PageTemplateProps {
  children: ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="page-transition">
      <span className="page-progress" aria-hidden="true" />
      {children}
    </div>
  );
}
