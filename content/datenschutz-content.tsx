import React from 'react';

export const datenschutzSections = [
  {
    id: 'section-1',
    title: '1. Datenschutz auf einen Blick',
    subsections: [
      {
        subtitle: 'Allgemeine Hinweise',
        content:
          'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',
      },
    ],
  },
  {
    id: 'section-2',
    title: '2. Datenerfassung auf dieser Website',
    subsections: [
      {
        subtitle: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
        content:
          'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
      },
      {
        subtitle: 'Wie erfassen wir Ihre Daten?',
        content: (
          <>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
              sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
              Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
              betreten.
            </p>
          </>
        ),
      },
      {
        subtitle: 'Wofür nutzen wir Ihre Daten?',
        content:
          'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
      },
      {
        subtitle: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        content:
          'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.',
      },
    ],
  },
  {
    id: 'section-3',
    title: '3. Allgemeine Hinweise und Pflichtinformationen',
    subsections: [
      {
        subtitle: 'Datenschutz',
        content: (
          <>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
              Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
              nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
          </>
        ),
      },
      {
        subtitle: 'Verantwortliche Stelle',
        content: (
          <>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-4">
              Linkty – Eine Marke der Erkens Holding GmbH
              <br />
              Haubenkopfstr. 12
              <br />
              76189 Karlsruhe
              <br />
              Telefon: +49 721 95279401
              <br />
              E-Mail: info@linkty.ai
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
              Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 'section-4',
    title: '4. Datenerfassung auf dieser Website',
    subsections: [
      {
        subtitle: 'Server-Log-Dateien',
        content: (
          <>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </>
        ),
      },
      {
        subtitle: 'Kontaktformular',
        content:
          'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      },
    ],
  },
  {
    id: 'section-5',
    title: '5. Ihre Rechte',
    subsections: [
      {
        subtitle: 'Auskunft, Löschung und Berichtigung',
        content:
          'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.',
      },
      {
        subtitle: 'Recht auf Datenübertragbarkeit',
        content:
          'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
      },
      {
        subtitle: 'Widerspruchsrecht',
        content:
          'Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Wir werden die Verarbeitung Ihrer personenbezogenen Daten einstellen, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen.',
      },
      {
        subtitle: 'Beschwerderecht',
        content:
          'Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.',
      },
    ],
  },
  {
    id: 'section-6',
    title: '6. GoHighLevel Integration',
    subsections: [
      {
        content: (
          <>
            <p className="mb-4">
              Auf dieser Website nutzen wir GoHighLevel für Kontaktformulare und Terminbuchungen. Dabei
              werden Ihre eingegebenen Daten (Name, E-Mail, Telefonnummer, etc.) an die Server von
              GoHighLevel übermittelt und dort verarbeitet. Die Datenverarbeitung erfolgt auf Grundlage
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mb-4">
              Weitere Informationen zum Datenschutz bei GoHighLevel finden Sie unter:
              <br />
              <a
                href="https://www.gohighlevel.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline"
              >
                https://www.gohighlevel.com/privacy-policy
              </a>
            </p>
            <div className="bg-brand-surface p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                Stand: {new Date().toLocaleDateString('de-DE')}
                <br />
                Diese Datenschutzerklärung wurde mit größter Sorgfalt erstellt. Für vollständige
                Rechtssicherheit empfehlen wir die Überprüfung durch einen Fachanwalt für IT-Recht.
              </p>
            </div>
          </>
        ),
      },
    ],
  },
];
