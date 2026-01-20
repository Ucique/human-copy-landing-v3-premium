import React from "react";

export const THEME = {
  bg: "#0B1020",
  bg2: "#0E1730",
  ink: "#F6F2E8",
  ink2: "rgba(246,242,232,0.78)",
  faint: "rgba(246,242,232,0.60)",
  stroke: "rgba(246,242,232,0.14)",
  stroke2: "rgba(246,242,232,0.10)",
  card: "rgba(246,242,232,0.06)",
  card2: "rgba(246,242,232,0.09)",
  accent: "#D9B46C",
  accent2: "rgba(217,180,108,0.28)",
  accentHover: "#E4C585",
};

export function Frame({ children }) {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -left-32 -top-32 h-[720px] w-[720px] rounded-full blur-[120px]"
          style={{ background: "rgba(217,180,108,0.10)" }}
        />
        <div
          className="absolute right-[-240px] top-[6%] h-[860px] w-[860px] rounded-full blur-[140px]"
          style={{ background: "rgba(120,155,255,0.10)" }}
        />
        <div
          className="absolute left-[8%] bottom-[-320px] h-[920px] w-[920px] rounded-full blur-[160px]"
          style={{ background: "rgba(246,242,232,0.05)" }}
        />
      </div>
      {children}
    </div>
  );
}
