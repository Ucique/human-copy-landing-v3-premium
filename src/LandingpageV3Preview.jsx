import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Lock, Sparkles, Shield } from "lucide-react";

const cn = (...c) => c.filter(Boolean).join(" ");

// Premium, ruhig, kein Flimmern: tiefes Navy + Ivory + leiser Gold-Akzent.
const THEME = {
  bg: "#0B1020", // tiefes Navy (nicht Schwarz)
  bg2: "#0E1730",
  ink: "#F6F2E8", // warmes Ivory
  ink2: "rgba(246,242,232,0.78)",
  faint: "rgba(246,242,232,0.60)",
  stroke: "rgba(246,242,232,0.14)",
  stroke2: "rgba(246,242,232,0.10)",
  card: "rgba(246,242,232,0.06)",
  card2: "rgba(246,242,232,0.09)",
  accent: "#D9B46C", // Gold (ruhig)
  accent2: "rgba(217,180,108,0.28)",
  accentHover: "#E4C585",
};

function Frame({ children }) {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Keine Patterns. Nur weiche Lichtfelder. */}
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

function Card({ children, className }) {
  return (
    <div
      className={cn("rounded-3xl p-6 md:p-7", className)}
      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card }}
    >
      {children}
    </div>
  );
}

function PrimaryButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition hover:translate-y-[-1px] active:translate-y-[0px]",
        className
      )}
      style={{
        background: THEME.accent,
        color: "#1A140B",
        boxShadow: "0 18px 55px -28px rgba(217,180,108,0.45)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = THEME.accentHover)}
      onMouseLeave={(e) => (e.currentTarget.style.background = THEME.accent)}
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

function Kpi({ title, value, note }) {
  return (
    <div className="rounded-3xl p-5" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}>
      <div className="text-xs" style={{ color: THEME.faint }}>{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight" style={{ color: THEME.ink }}>{value}</div>
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

export default function LandingpageV3Preview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [goal, setGoal] = useState("Mehr Anfragen");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const preview = useMemo(() => {
    const n = name.trim() || "(Name)";
    const e = email.trim() || "(E-Mail)";
    const u = url.trim() || "(Link/Doc)";
    const m = message.trim() || "(Worum geht’s – in einem Satz?)";
    return { n, e, u, m };
  }, [name, email, url, message]);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 2200);
  }

  return (
    <Frame>
      {/* Top */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-2xl"
            style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2 }}
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Human Copy</div>
            <div className="text-xs" style={{ color: THEME.faint }}>Copywriting · Positionierung · Premium-Überarbeitung</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <GhostButton onClick={() => document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" })}>
            Beispiele
          </GhostButton>
          <PrimaryButton onClick={() => document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" })}>
            Private Anfrage
          </PrimaryButton>
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
              <Pill>Kein Content. Ein Eingriff.</Pill>
              <span className="text-xs" style={{ color: THEME.faint }}>
                Für Menschen, die nicht mehr erklären wollen.
              </span>
            </div>

            <h1
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
              style={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif" }}
            >
              Deine Seite klingt okay.
              <br />
              <span style={{ color: THEME.accent }}>Und verliert trotzdem.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: THEME.ink2 }}>
              Ich schreibe nicht „schöner“.
              <br />
              Ich mache sichtbar, wofür du stehst — und wofür nicht.
              <br />
              Danach fühlt sich dein Angebot teurer an. Weil es klarer ist.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton onClick={() => document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" })}>
                Private Anfrage
              </PrimaryButton>
              <GhostButton onClick={() => document.getElementById("method")?.scrollIntoView({ behavior: "smooth" })}>
                Wie ich arbeite
              </GhostButton>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              <Kpi title="Antwortzeit" value="24–48h" note="für die erste Einschätzung" />
              <Kpi title="Format" value="1:1" note="kein Agentur-Workflow" />
              <Kpi title="Fokus" value="Wirkung" note="nicht Tool-Optimierung" />
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
                      <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Keine Show. Kein Marketing-Lärm.</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                        Du bekommst eine ruhige, präzise Überarbeitung.
                        <br />
                        Mit Urteil. Nicht mit Folien.
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
                      <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Diskret. Ohne „Look at me“.</div>
                      <div className="mt-1 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                        Premium heißt: wenig Leute, hohe Qualität.
                        <br />
                        Kein Massenprodukt.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* Intake */}
          <motion.aside
            id="intake"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Card className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold" style={{ color: THEME.ink }}>Private Anfrage</div>
                  <div className="mt-1 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                    Du schickst mir eine Seite oder ein Doc.
                    <br />
                    Ich antworte mit einer Einschätzung + nächstem Schritt.
                  </div>
                </div>
                <div className="hidden rounded-2xl px-3 py-2 text-xs md:block" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2, color: THEME.faint }}>
                  2–5 Minuten
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="space-y-1">
                    <div className="text-xs" style={{ color: THEME.faint }}>Name</div>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Charlotte"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="du@domain.de"
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
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
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
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Link oder Google Doc"
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition"
                      style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.bg2, color: THEME.ink }}
                    />
                  </div>
                </label>

                <label className="space-y-1">
                  <div className="text-xs" style={{ color: THEME.faint }}>Ein Satz. Kein Roman.</div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Was passiert gerade stattdessen?"
                    className="w-full resize-none rounded-2xl px-4 py-3 text-sm outline-none transition"
                    style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.bg2, color: THEME.ink }}
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <PrimaryButton type="submit">Anfrage senden</PrimaryButton>
                  <div className="text-xs leading-relaxed" style={{ color: THEME.faint }}>
                    Keine Detector-Versprechen.
                    <br />
                    Keine Conversion-Zauberei.
                  </div>
                </div>

                {sent && (
                  <div className="mt-3 rounded-2xl px-4 py-3 text-sm" style={{ border: `1px solid ${THEME.stroke2}`, background: THEME.card2, color: THEME.ink2 }}>
                    Demo-Submit. In echt würdest du hier dein Form-Backend anschließen.
                  </div>
                )}
              </form>

              <div className="mt-6">
                <Hairline />
              </div>

              <div className="mt-5 space-y-3">
                <div className="text-xs font-semibold" style={{ color: THEME.faint }}>Live-Vorschau (nur zur Wirkung)</div>
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
              Hinweis: Premium bedeutet auch: weniger Slots. Wenn’s passt, gehen wir weiter.
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
            <div className="mt-3 text-xl font-semibold" style={{ color: THEME.ink }}>Entscheidung statt Erklärung.</div>
            <div className="mt-3 space-y-3">
              <Bullet>Ich entferne Text, der nur korrekt klingt.</Bullet>
              <Bullet>Ich setze klare Grenzen: wofür du stehst.</Bullet>
              <Bullet>Ich mache dein Angebot lesbar — für Leute mit Geld.</Bullet>
            </div>
          </Card>

          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Was du bekommst</div>
            <div className="mt-3 text-xl font-semibold" style={{ color: THEME.ink }}>Eine Seite, die hält.</div>
            <div className="mt-3 space-y-3">
              <Bullet>Überarbeitung deiner Landingpage/Website (klar & knapp).</Bullet>
              <Bullet>Headline-Set + CTA-Set (für Tests).</Bullet>
              <Bullet>Ton, der nicht bettelt.</Bullet>
            </div>
          </Card>

          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Was du nicht bekommst</div>
            <div className="mt-3 text-xl font-semibold" style={{ color: THEME.ink }}>Keine Tapete.</div>
            <div className="mt-3 space-y-3">
              <Bullet>Keine Buzzwords.</Bullet>
              <Bullet>Keine „Wir helfen dir…“-Sätze.</Bullet>
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
            <div className="text-xs" style={{ color: THEME.faint }}>Beispiel-Urteil</div>
            <div className="mt-3 text-2xl font-semibold" style={{ fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif" }}>
              „Das klingt seriös — aber es sagt nichts.“
            </div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Wenn deine Seite jedem gefallen will, kauft niemand.
              <br />
              Premium braucht Kante. Und Ruhe.
            </div>
          </Card>

          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>So wirkt Premium</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Weniger Elemente. Mehr Gewicht.
              <br />
              Weniger Erklärung. Mehr Haltung.
              <br />
              Mehr Raum, damit der Satz wirkt.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton onClick={() => document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" })}>
                Private Anfrage
              </PrimaryButton>
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
            <div className="mt-3 text-lg font-semibold" style={{ color: THEME.ink }}>Premium heißt: individuell.</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Du bekommst zuerst eine Einschätzung.
              <br />
              Danach ein klares Angebot.
            </div>
          </Card>
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>Zeit</div>
            <div className="mt-3 text-lg font-semibold" style={{ color: THEME.ink }}>Schnell, wenn’s zählt.</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Erste Rückmeldung in 24–48h.
              <br />
              Umsetzung nach Scope.
            </div>
          </Card>
          <Card>
            <div className="text-xs" style={{ color: THEME.faint }}>KI</div>
            <div className="mt-3 text-lg font-semibold" style={{ color: THEME.ink }}>Keine Tool-Debatte.</div>
            <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
              Wir reden nicht über „menschlich“.
              <br />
              Wir reden über Wirkung.
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
                  Du brauchst keine bessere Copy.
                  <br />
                  Du brauchst eine klare Entscheidung.
                </div>
                <div className="mt-3 text-sm leading-relaxed" style={{ color: THEME.ink2 }}>
                  Wenn das stimmt: schick mir deine Seite.
                  <br />
                  Der Rest ergibt sich.
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <PrimaryButton onClick={() => document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" })}>
                  Private Anfrage
                </PrimaryButton>
                <div className="text-xs" style={{ color: THEME.faint }}>
                  Impressum · Datenschutz · Kontakt
                  <br />
                  (Platzhalter in der Preview)
                </div>
              </div>
            </div>
          </Card>
        </footer>
      </main>

      {/* Mobile CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-20 mx-auto flex max-w-6xl justify-center px-6 md:hidden">
        <div className="w-full rounded-3xl p-2" style={{ border: `1px solid ${THEME.stroke2}`, background: "rgba(11,16,32,0.75)", backdropFilter: "blur(10px)" }}>
          <PrimaryButton className="w-full" onClick={() => document.getElementById("intake")?.scrollIntoView({ behavior: "smooth" })}>
            Private Anfrage
          </PrimaryButton>
        </div>
      </div>
    </Frame>
  );
}
