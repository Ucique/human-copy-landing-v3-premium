import React from "react";
import { Link } from "react-router-dom";
import LegalLayout from "./LegalLayout";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <Link to="/" className="text-sm">
        ← Zurück
      </Link>
      <section>
        <div>
          Anbieter / Anschrift
          <br />
          Human Copy
          <br />
          Charlotte Grude
          <br />
          Seestraße 118
          <br />
          13353 Berlin
          <br />
          Germany
        </div>
      </section>

      <section>
        <div>
          Kontakt
          <br />
          Kontakt:
          <br />
          E-Mail: hello@human-copy.com
        </div>
      </section>

      <section>
        <div>
          Umsatzsteuer
          <br />
          Umsatzsteuer:
          <br />
          Gemäß § 19 UStG wird keine Umsatzsteuer erhoben (Kleinunternehmerregelung).
        </div>
      </section>

      <section>
        <div>
          Verantwortlichkeit nach MStV
          <br />
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          <br />
          Human Copy
        </div>
      </section>

      <section>
        <div>
          Haftung für Inhalte
          <br />
          Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          <br />
          Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </div>
      </section>

      <section>
        <div>
          Haftung für Links
          <br />
          Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          <br />
          Für diese fremden Inhalte wird keine Gewähr übernommen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </div>
      </section>

      <section>
        <div>
          Urheberrecht
          <br />
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
          <br />
          Die Vervielfältigung, Bearbeitung oder Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.
        </div>
      </section>
    </LegalLayout>
  );
}
