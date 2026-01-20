import React from "react";
import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <Link to="/" className="text-sm">
        ← Zurück
      </Link>
      <section>
        <div>
          Verantwortliche Stelle
          <br />
          Verantwortliche: human-copy
        </div>
      </section>

      <section>
        <div>
          Hosting über GitHub Pages
          <br />
          Diese Website wird über GitHub Pages (GitHub, Inc.) bereitgestellt. Beim Aufruf werden durch GitHub serverseitige Logfiles (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, User-Agent) verarbeitet, um die Website bereitzustellen und zu sichern.
        </div>
      </section>

      <section>
        <div>
          Kontaktaufnahme
          <br />
          Wenn du mich per E-Mail oder Kontaktformular kontaktierst, werden die von dir übermittelten Daten (z. B. Name, E-Mail-Adresse, Inhalte der Nachricht) zur Bearbeitung deiner Anfrage verarbeitet.
        </div>
      </section>

      <section>
        <div>
          Für die Formularübermittlung nutzen wir Formspree als Auftragsverarbeiter. Verarbeitet werden insbesondere Name, E-Mail-Adresse, Inhalte der Nachricht sowie ggf. weitere von dir angegebene Felder. Zweck ist die Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation). Die Daten werden gelöscht, sobald die Kommunikation abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </div>
      </section>

      <section>
        <div>
          Cookies &amp; Einwilligung
          <br />
          Für Statistikzwecke werden Cookies oder ähnliche Technologien nur nach deiner Einwilligung gesetzt oder ausgelesen. Notwendige Funktionen bleiben davon unberührt.
        </div>
      </section>

      <section>
        <div>
          Google Analytics (nur nach Einwilligung)
          <br />
          Wir verwenden Google Analytics 4, um die Nutzung der Website zu messen und zu optimieren. Die Verarbeitung erfolgt erst, nachdem du über das Consent-Banner zugestimmt hast.
        </div>
      </section>

      <section>
        <div>
          Du kannst deine Einwilligung jederzeit über den Link Cookie-Einstellungen widerrufen oder ändern.
        </div>
      </section>

      <section>
        <div>GA4 Measurement ID: G-2DBL2MMR17</div>
      </section>

      <section>
        <div>
          Empfänger &amp; Drittlandtransfer
          <br />
          Bei Nutzung von Dienstleistern (z. B. GitHub, Google, Formspree) können Daten in die USA übermittelt werden. Soweit erforderlich, erfolgt die Übermittlung auf Basis von Standardvertragsklauseln der EU-Kommission bzw. geeigneten Garantien.
        </div>
      </section>

      <section>
        <div>
          Speicherdauer
          <br />
          Kontaktdaten werden nur so lange gespeichert, wie es zur Bearbeitung deiner Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </div>
      </section>

      <section>
        <div>
          Betroffenenrechte
          <br />
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit. Eine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen.
        </div>
      </section>

      <section>
        <div>
          Beschwerderecht
          <br />
          Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu beschweren.
        </div>
      </section>

      <section>
        <div>Stand: 09. Januar 2026</div>
      </section>
    </LegalLayout>
  );
}
