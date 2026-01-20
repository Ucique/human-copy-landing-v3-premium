import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Lock, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Frame, THEME } from "./theme.jsx";
import logoMark from "./assets/logo-mark.png";
import profileCharlotte from "./assets/profile-charlotte-grude.jpg";

const cn = (...c) => c.filter(Boolean).join(" ");

function Hairline() {
  return <div className="h-px w-full" style={{ background: THEME.stroke2 }} />;
}

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2, color: THEME.ink2 }}
    >
      <Sparkles className="h-3.5 w-3.5" style={{ color: THEME.accent }} />
      {children}
    </span>
  );
}

function Card({ children, className, ...props }) {
  return (
    <div
      className={cn("rounded-3xl p-6 md:p-7", className)}
      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card }}
      {...props}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ children, className, ...props }) {
  const isDisabled = props.disabled;
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:translate-y-[-1px] active:translate-y-[0px] disabled:cursor-not-allowed disabled:opacity-70",
        className
      )}
      style={{
        background: THEME.accent,
        color: "#1A140B",
        boxShadow: "0 18px 55px -28px rgba(217,180,108,0.45)",
      }}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.background = THEME.accentHover;
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.background = THEME.accent;
        }
      }}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function GhostButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition",
        className
      )}
      style={{ border: `1px solid ${THEME.stroke2}`, background: "transparent", color: THEME.ink2 }}
      onMouseEnter={(e) => (e.currentTarget.style.background = THEME.card2)}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      {...props}
    >
      {children}
    </button>
  );
}

function Kpi({ title, value, note, className, valueClassName }) {
  return (
    <div
      className={cn("rounded-3xl p-5", className)}
      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}
    >
      <div className="text-xs" style={{ color: THEME.faint }}>{title}</div>
      <div className={cn("mt-2 text-2xl font-semibold tracking-tight", valueClassName)} style={{ color: THEME.ink }}>
        {value}
      </div>
      <div className="mt-1 text-xs" style={{ color: THEME.faint }}>{note}</div>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full" style={{ background: THEME.card2, border: `1px solid ${THEME.stroke2}` }}>
        <Check className="h-3.5 w-3.5" style={{ color: THEME.accent }} />
      </div>
      <div className="text-sm leading-relaxed" style={{ color: THEME.ink2 }}>{children}</div>
    </div>
  );
}

const CONSENT_KEY = "hc_cookie_consent";
const GA_MEASUREMENT_ID = "G-2DBL2MMR17";

function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-8 items-center justify-center text-[10px] font-semibold md:h-10"
        style={{ color: THEME.accent }}
      >
        HC
      </div>
    );
  }

  return (
    <img
      src={logoMark}
      alt="Human Copy"
      onError={() => setFailed(true)}
      className="h-10 w-10 object-contain md:h-12 md:w-12"
    />
  );
}

function TrustBlock() {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl px-7 py-6 sm:flex-row sm:items-center sm:gap-8"
      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}
    >
      {failed ? (
        <div
          className="h-32 w-32 rounded-full md:h-36 md:w-36"
        />
      ) : (
        <img
          src={profileCharlotte}
          alt="Charlotte Grude"
          onError={() => setFailed(true)}
          className="h-32 w-32 rounded-full object-cover object-center md:h-36 md:w-36"
        />
      )}
      <div className="space-y-2">
        <div className="text-sm font-semibold" style={{ color: THEME.ink }}>
          Charlotte Grude — Copywriting &amp; Positionierung
        </div>
        <div className="text-xs leading-relaxed" style={{ color: THEME.ink2 }}>
          Du bekommst eine klare Einschätzung deiner Seite – mit konkreten Hinweisen, was du ändern solltest, und warum.
        </div>
        <div className="text-[11px]" style={{ color: THEME.faint }}>
          Antwort in 24–48h. Diskret. Direkt.
        </div>
      </div>
    </div>
  );
}

function loadAnalytics() {
  if (window[`ga-disable-${GA_MEASUREMENT_ID}`]) {
    return;
  }
  if (document.getElementById("ga-gtag")) {
    return;
  }
  const script = document.createElement("script");
  script.id = "ga-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

export default function LandingpageV3Preview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [goal, setGoal] = useState("Mehr Anfragen");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState("unknown");
  const [showConsent, setShowConsent] = useState(false);

  const scrollToForm = () => {
    document.getElementById("private-anfrage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  React.useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
      if (stored === "rejected") {
        window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
      }
      setShowConsent(false);
    } else {
      setConsent("unknown");
      setShowConsent(true);
    }
  }, []);

  React.useEffect(() => {
    if (consent === "accepted") {
      loadAnalytics();
    }
  }, [consent]);

  const preview = useMemo(() => {
    const n = name.trim() || "(Name)";
    const e = email.trim() || "(E-Mail)";
    const u = link.trim() || "(Link/Doc)";
    const m = message.trim() || "(Worum geht’s – in einem Satz?)";
    return { n, e, u, m };
  }, [name, email, link, message]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting || status === "success") {
      return;
    }
    if (!email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMessage("Bitte E-Mail und Nachricht ausfüllen.");
      return;
    }
    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");
    try {
      const response = await fetch("https://formspree.io/f/mreelknq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          goal,
          link,
          message,
          source: "premium-v3",
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree error");
      }

      setStatus("success");
      setStatusMessage("Danke. Ich melde mich in 24–48h.");
    } catch (error) {
      setStatus("error");
      setStatusMessage("Senden fehlgeschlagen. Bitte versuch’s nochmal oder mail an hello@human-copy.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleConsent(choice) {
    window.localStorage.setItem(CONSENT_KEY, choice);
    if (choice === "rejected") {
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    } else {
      window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    }
    setConsent(choice);
    setShowConsent(false);
  }

  function openConsent() {
    setShowConsent(true);
  }

  const isLocked = isSubmitting || status === "success";

  return (
    <Frame>
      {/* Top */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Human Copy</div>
            <div className="text-xs" style={{ color: THEME.faint }}>Copywriting · Positionierung · Premium-Überarbeitung</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <GhostButton onClick={() => document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" })}>
            Beispiele
          </GhostButton>
          <GhostButton onClick={scrollToForm}>
            Private Anfrage
          </GhostButton>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="pt-2"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Pill>Premium-Überarbeitung für klare Angebote.</Pill>
              <span className="text-xs" style={{ color: THEME.faint }}>
                Für Beratungen, Studios und Services mit Anspruch.
              </span>
            </div>

            <h1
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
              style={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif" }}
            >
              Deine Seite erklärt zu viel.
              <br />
              <span style={{ color: THEME.accent }}>Ich mache daraus ein Angebot, das verkauft.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: THEME.ink2 }}>
              Du gibst mir deine Landingpage oder Website.
              <br />
              Ich schärfe Positionierung, Headline, Nutzen und CTA.
              <br />
              Ergebnis: eine ruhige Seite, die Anfragen und höhere Preise möglich macht.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton onClick={scrollToForm}>
                Private Anfrage
              </PrimaryButton>
              <GhostButton onClick={() => document.getElementById("method")?.scrollIntoView({ behavior: "smooth" })}>
                Wie ich arbeite
              </GhostButton>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <Kpi title="Antwortzeit" value="24–48h" note="für die erste Einschätzung" />
              <Kpi title="Format" value="1:1" note="direkt mit mir" />
              <Kpi
                title="Lieferung"
                value="Überarbeitung"
                note="Seite, Headlines, CTA"
                className="px-6"
                valueClassName="whitespace-nowrap"
              />
            </div>

            <div className="mt-10">
              <Hairline />
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}>
                      <Shield className="h-4 w-4" style={{ color: THEME.accent }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Klare Überarbeitung statt lauter Kampagne.</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                        Du bekommst eine ruhige, präzise Version deiner Seite.
                        <br />
                        Direkt, konkret, ohne Umwege.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}>
                      <Lock className="h-4 w-4" style={{ color: THEME.accent }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Diskret. 1:1. Premium-Standard.</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                        Premium heißt: wenige Slots. Kein Massenprodukt.
                        <br />
                        Keine Massenabfertigung.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* Intake */}
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Card id="private-anfrage" className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Private Anfrage</div>
                  <div className="mt-1 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                    Du schickst mir eine Seite oder ein Doc.
                    <br />
                    Ich antworte mit Einschätzung und nächstem Schritt.
                  </div>
                </div>
                <div className="hidden rounded-2xl px-3 py-2 text-xs md:block" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2, color: THEME.faint }}>
                  2–5 Minuten
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mreelknq"
                method="POST"
                className="mt-6 space-y-3"
              >
                <input type="hidden" name="source" value="premium-v3" />
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="space-y-1">
                    <div className="text-xs" style={{ color: THEME.faint }}>Name</div>
                    <input
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dein Name"
                      disabled={isLocked}
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition"
                      style={{
                        border: `1px solid ${THEME.stroke2}`,
                        background: THEME.bg2,
                        color: THEME.ink,
                      }}
                    />
                  </label>
                  <label className="space-y-1">
                    <div className="text-xs" style={{ color: THEME.faint }}>E-Mail</div>
                    <input
                      name="email"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="du@domain.de"
                      disabled={isLocked}
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition"
                      style={{
                        border: `1px solid ${THEME.stroke2}`,
                        background: THEME.bg2,
                        color: THEME.ink,
                      }}
                    />
                  </label>
                </div>

                <label className="space-y-1">
                  <div className="text-xs" style={{ color: THEME.faint }}>Was soll der Text auslösen?</div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <select
                      name="goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      disabled={isLocked}
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition"
                      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.bg2, color: THEME.ink }}
                    >
                      <option value="Mehr Anfragen">Mehr Anfragen</option>
                      <option value="Höhere Preise">Höhere Preise</option>
                      <option value="Klarere Positionierung">Klarere Positionierung</option>
                      <option value="Bessere Angebote">Bessere Angebote</option>
                      <option value="Weniger Erklären">Weniger Erklären</option>
                    </select>
                    <input
                      name="link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      placeholder="Link oder Google Doc"
                      disabled={isLocked}
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition"
                      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.bg2, color: THEME.ink }}
                    />
                  </div>
                </label>

                <label className="space-y-1">
                  <div className="text-xs" style={{ color: THEME.faint }}>Ein Satz. Kein Roman.</div>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Was passiert gerade stattdessen?"
                    required
                    disabled={isLocked}
                    className="w-full resize-none rounded-2xl px-4 py-3 text-sm outline-none transition"
                    style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.bg2, color: THEME.ink }}
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <PrimaryButton type="submit" disabled={isLocked}>
                    {isSubmitting ? "Sende…" : status === "success" ? "Gesendet" : "Anfrage senden"}
                  </PrimaryButton>
                </div>

                {status !== "idle" && (
                  <div
                    className="mt-3 rounded-2xl px-4 py-3 text-sm"
                    style={{
                      border: `1px solid ${THEME.stroke2}`,
                      background: THEME.card2,
                      color: status === "success" ? THEME.ink : THEME.ink2,
                    }}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>

              <div className="mt-5">
                <TrustBlock />
              </div>

              <div className="mt-6">
                <Hairline />
              </div>

              <div className="mt-5 space-y-3">
                <div className="text-xs font-semibold" style={{ color: THEME.faint }}>Live-Vorschau</div>
                <div className="rounded-3xl p-4" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}>
                  <div className="text-xs" style={{ color: THEME.faint }}>Anfrage</div>
                  <div className="mt-2 space-y-1 text-sm" style={{ color: THEME.ink2 }}>
                    <div><span style={{ color: THEME.faint }}>Name:</span> {preview.n}</div>
                    <div><span style={{ color: THEME.faint }}>E-Mail:</span> {preview.e}</div>
                    <div><span style={{ color: THEME.faint }}>Ziel:</span> {goal}</div>
                    <div><span style={{ color: THEME.faint }}>Link:</span> {preview.u}</div>
                    <div className="pt-2">{preview.m}</div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-6 text-xs" style={{ color: THEME.faint }}>
              Hinweis: Premium bedeutet auch: begrenzte Slots. Wenn’s passt, gehen wir weiter.
            </div>
          </motion.aside>
        </div>

        {/* Method */}
        <div className="mt-12" id="method">
          <Hairline />
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Was hier passiert</div>
            <div className="mt-3 text-xl font-semibold" style={{ color: THEME.ink }}>Klarheit statt Kompromiss.</div>
            <div className="mt-3 space-y-3">
              <Bullet>Ich streiche alles, was nur beschäftigt.</Bullet>
              <Bullet>Ich schärfe Positionierung und Nutzenversprechen.</Bullet>
              <Bullet>Ich mache dein Angebot lesbar für Premium-Kund:innen.</Bullet>
            </div>
          </Card>

          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Was du bekommst</div>
            <div className="mt-3 text-xl font-semibold" style={{ color: THEME.ink }}>Eine Seite, die verkauft.</div>
            <div className="mt-3 space-y-3">
              <Bullet>Überarbeitung deiner Landingpage oder Website.</Bullet>
              <Bullet>Headline-Set + CTA-Set für Tests.</Bullet>
              <Bullet>Ton, der Premium trägt.</Bullet>
            </div>
          </Card>

          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Was du nicht bekommst</div>
            <div className="mt-3 text-xl font-semibold" style={{ color: THEME.ink }}>Keine Texttapete.</div>
            <div className="mt-3 space-y-3">
              <Bullet>Keine Buzzwords.</Bullet>
              <Bullet>Keine Floskeln.</Bullet>
              <Bullet>Keine künstliche Dringlichkeit.</Bullet>
            </div>
          </Card>
        </section>

        {/* Proof */}
        <div className="mt-12" id="proof">
          <Hairline />
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Beispiel-Analyse</div>
            <div className="mt-3 text-2xl font-semibold" style={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif" }}>
              „Das klingt gut — aber es sagt nicht, was du verkaufst.“
            </div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Wenn deine Seite jedem gefallen will, kauft niemand.
              <br />
              Premium braucht Kante, Struktur und Ruhe.
            </div>
          </Card>

          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>So wirkt Premium</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Weniger Elemente. Mehr Gewicht.
              <br />
              Weniger Erklärung. Mehr Fokus.
              <br />
              Mehr Raum, damit die Seite atmet.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <GhostButton onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}>
                Fragen
              </GhostButton>
            </div>
          </Card>
        </section>

        {/* FAQ */}
        <div className="mt-12" id="faq">
          <Hairline />
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Preis</div>
            <div className="mt-3 text-lg font-semibold" style={{ color: THEME.ink }}>Individuelles Angebot.</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Du bekommst zuerst eine Einschätzung.
              <br />
              Danach ein klares Angebot nach Umfang.
            </div>
          </Card>
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Zeit</div>
            <div className="mt-3 text-lg font-semibold" style={{ color: THEME.ink }}>Tempo nach Scope.</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Erste Rückmeldung in 24–48h.
              <br />
              Umsetzung nach Aufwand und Priorität.
            </div>
          </Card>
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Ergebnis</div>
            <div className="mt-3 text-lg font-semibold" style={{ color: THEME.ink }}>Klare Seite, klares Angebot.</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Du hast danach eine Seite, die sofort erklärt,
              <br />
              was du verkaufst und warum es Premium ist.
            </div>
          </Card>
        </section>

        {/* Footer */}
        <div className="mt-12">
          <Hairline />
        </div>

        <footer className="mt-10 pb-10">
          <Card className="p-7">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-xs" style={{ color: THEME.faint }}>Letzter Satz</div>
                <div className="mt-3 text-2xl font-semibold" style={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif" }}>
                  Du brauchst keine längere Seite.
                  <br />
                  Du brauchst eine klare Positionierung.
                </div>
                <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                  Wenn das stimmt: schick mir deine Seite.
                  <br />
                  Ich melde mich mit nächstem Schritt.
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <PrimaryButton onClick={scrollToForm}>
                  Private Anfrage
                </PrimaryButton>
                <div className="text-xs" style={{ color: THEME.faint }}>
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to="/impressum"
                      className="transition"
                      style={{ color: THEME.faint }}
                    >
                      Impressum
                    </Link>
                    <span aria-hidden>·</span>
                    <Link
                      to="/datenschutz"
                      className="transition"
                      style={{ color: THEME.faint }}
                    >
                      Datenschutz
                    </Link>
                    <span aria-hidden>·</span>
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="transition"
                      style={{ color: THEME.faint }}
                    >
                      Zum Formular
                    </button>
                    <span aria-hidden>·</span>
                    <button
                      type="button"
                      onClick={openConsent}
                      className="transition"
                      style={{ color: THEME.faint }}
                    >
                      Cookie-Einstellungen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </footer>
      </main>

      {showConsent && (
        <div className="fixed bottom-24 left-0 right-0 z-30 mx-auto max-w-6xl px-6 md:bottom-6">
          <Card className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
            <div className="text-xs leading-relaxed" style={{ color: THEME.ink2 }}>
              Wir nutzen Cookies nur für Statistik, wenn du zustimmst. Notwendige Funktionen bleiben aktiv.
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="rounded-2xl px-4 py-2 text-xs font-semibold"
                style={{ border: `1px solid ${THEME.stroke2}`, color: THEME.ink2 }}
                onClick={() => handleConsent("rejected")}
              >
                Ablehnen
              </button>
              <button
                type="button"
                className="rounded-2xl px-4 py-2 text-xs font-semibold"
                style={{ background: THEME.accent, color: "#1A140B" }}
                onClick={() => handleConsent("accepted")}
              >
                Akzeptieren
              </button>
            </div>
          </Card>
        </div>
      )}

      {/* Mobile CTA */}
    </Frame>
  );
}
