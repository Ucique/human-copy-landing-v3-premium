import React from "react";
import { Link } from "react-router-dom";
import { Frame, THEME } from "../theme.jsx";
import logoMark from "../assets/logo-mark.png";

export default function LegalLayout({ title, children }) {
  return (
    <Frame>
      <header className="relative z-10 mx-auto flex max-w-5xl items-center gap-2.5 px-6 py-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoMark}
            alt="Human Copy"
            className="h-6 w-6 rounded-xl object-cover md:h-7 md:w-7"
            style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}
          />
          <div className="text-sm font-semibold" style={{ color: THEME.ink }}>
            Human Copy
          </div>
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-4">
        <h1
          className="text-3xl font-semibold tracking-tight md:text-4xl"
          style={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif", color: THEME.ink }}
        >
          {title}
        </h1>
        <div className="mt-8 space-y-8 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
          {children}
        </div>
      </main>
    </Frame>
  );
}
