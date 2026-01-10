# Go-Live Audit & Code-Review 2026 – Linkty Hauptseite

**Datum:** 2026-01-10  
**Status:** ✅ Implementiert  
**Ziel:** DSGVO-Konformität, Sicherheit, SEO-Vorbereitung für Rebranding

---

## 📋 Zusammenfassung

Dieses Dokument dokumentiert die durchgeführten Code-Änderungen, die für einen sicheren und rechtlich konformen Go-Live der Linkty-Hauptseite (React 19 + Vite 6 + Tailwind 4) notwendig waren. Die Änderungen fokussieren sich auf drei Hauptbereiche:

1.  **DSGVO-Konformität** – Lokales Hosting von Google Fonts
2.  **Sicherheit** – Entfernung von API-Keys aus dem Client-Bundle
3.  **SEO & Performance** – Dynamische Meta-Daten und Resource Hints

---

## 🔧 Implementierte Änderungen

### 1. Lokales Font-Hosting (DSGVO)

**Problem:**  
Die Webseite lud die Schriftarten **Inter** und **Playfair Display** direkt von `fonts.googleapis.com`. Dies stellt ein DSGVO-Risiko dar, da die IP-Adresse des Besuchers an Google übertragen wird.

**Lösung:**  
- Installation der Fonts via `@fontsource/inter` und `@fontsource/playfair-display`
- Import der benötigten Font‑Weights in [`src/main.tsx`](src/main.tsx)
- Entfernung des Google‑Fonts‑Links aus [`index.html`](index.html)

**Dateien:**
- [`src/main.tsx`](src/main.tsx) – Font‑Imports hinzugefügt
- [`index.html`](index.html) – `<link href="https://fonts.googleapis.com/…">` entfernt

**Vorteile:**
- ✅ 100% DSGVO‑konform (keine Verbindung zu Google‑Servern)
- ✅ Schnelleres Laden (kein DNS‑Lookup zu externer Domain)
- ✅ Unabhängigkeit von Drittanbietern

---

### 2. Sicherheit – API‑Key Entfernung

**Problem:**  
In der [`vite.config.ts`](vite.config.ts) wurde der `GEMINI_API_KEY` via `define` global in den Client‑Code injiziert. Dieser Key wäre im JavaScript‑Bundle für jeden Besucher sichtbar gewesen.

**Lösung:**  
- Entfernung der `define`‑Einträge für `GEMINI_API_KEY`
- Kommentar hinzugefügt, dass keine API‑Keys im Client‑Bundle liegen sollten

**Dateien:**
- [`vite.config.ts`](vite.config.ts) – `define`‑Block bereinigt

**Vorteile:**
- ✅ Keine Exposition sensibler API‑Keys
- ✅ Klare Trennung von Client‑ und Server‑Secrets

---

### 3. SEO & Performance

#### 3.1 Dynamische Meta‑Daten (Vorbereitung für Rebranding)

**Problem:**  
Die Seite nutzte nur statische Meta‑Tags in der `index.html`. Für ein effektives Rebranding und eine gute Suchmaschinen‑Optimierung benötigen wir dynamische Titel und Beschreibungen pro Route.

**Lösung:**  
- Erstellung eines neuen Hooks [`useMetaData`](src/shared/hooks/useMetaData.ts)
- Dieser Hook setzt `document.title`, Meta‑Description und OpenGraph‑Tags
- Der bestehende Hook [`usePageTitle`](src/shared/hooks/usePageTitle.ts) wurde als Wrapper umgebaut (Abwärtskompatibilität)

**Dateien:**
- [`src/shared/hooks/useMetaData.ts`](src/shared/hooks/useMetaData.ts) – Neuer Hook
- [`src/shared/hooks/usePageTitle.ts`](src/shared/hooks/usePageTitle.ts) – Auf `useMetaData` umgestellt

**Verwendung:**
```tsx
import { useMetaData } from '@/shared/hooks/useMetaData';

const MyPage = () => {
  useMetaData({
    title: 'Meine Seite – Linkty',
    description: 'Eine detaillierte Beschreibung für Suchmaschinen.',
    ogImage: '/og-image.jpg',
  });
  return <div>…</div>;
};
```

#### 3.2 Resource Hints für GoHighLevel

**Problem:**  
Das GoHighLevel‑Formular‑Script (`link.linkty.ai`) wurde ohne Performance‑Optimierungen geladen.

**Lösung:**  
- Hinzufügen von `preconnect` und `dns-prefetch` für die Domain `link.linkty.ai`

**Dateien:**
- [`index.html`](index.html) – Resource Hints eingefügt

**Vorteile:**
- ✅ Schnellerer Aufbau der Verbindung zum GHL‑Server
- ✅ Bessere Ladezeiten für das eingebettete Formular

---

## 🚀 Nächste Schritte (Rebranding‑Vorbereitung)

Die durchgeführten Änderungen bilden eine solide Basis für das geplante Rebranding:

1.  **Design‑System** – Die lokal gehosteten Fonts können nun problemlos in einem neuen Design‑System verwendet werden.
2.  **SEO‑Struktur** – Der `useMetaData`‑Hook ermöglicht es, pro Unterseite individuelle Meta‑Daten zu setzen (z. B. für `/engage/crm`, `/engage/voice`).
3.  **Performance‑Monitoring** – Nach dem Go‑Live sollten die Core Web Vitals (LCP, CLS, FID) überprüft werden.

---

## 📁 Betroffene Dateien (Übersicht)

| Datei | Änderung | Zweck |
|-------|----------|-------|
| [`src/main.tsx`](src/main.tsx) | Font‑Imports hinzugefügt | DSGVO‑konforme Schriftarten |
| [`index.html`](index.html) | Google‑Fonts‑Link entfernt; `preconnect` hinzugefügt | DSGVO + Performance |
| [`vite.config.ts`](vite.config.ts) | `define`‑Block bereinigt | Sicherheit |
| [`src/shared/hooks/useMetaData.ts`](src/shared/hooks/useMetaData.ts) | Neu erstellt | SEO‑Vorbereitung |
| [`src/shared/hooks/usePageTitle.ts`](src/shared/hooks/usePageTitle.ts) | Auf `useMetaData` umgestellt | Abwärtskompatibilität |

---

## ✅ Go‑Live Checkliste (heute erledigt)

- [x] Fonts lokal hosten (DSGVO)
- [x] API‑Keys aus Client‑Bundle entfernen
- [x] Dynamische Meta‑Daten‑Hook bereitstellen
- [x] Resource Hints für externe Dienste setzen
- [x] Build & Dev‑Server testen (Vite läuft)

---

## 🔍 Technische Hinweise

### Font‑Hosting auf Netlify
Da die Seite auf **Netlify** gehostet wird, werden die Schriftdateien automatisch mit dem Build‑Prozess gebündelt und über das Netlify‑CDN ausgeliefert. Dies ist performanter und datenschutzfreundlicher als das Google‑CDN.

### SEO‑Limitationen (SPA)
Da es sich um eine Single‑Page‑Application (SPA) handelt, werden Meta‑Tags client‑seitig gesetzt. Suchmaschinen‑Crawler, die JavaScript ausführen (wie Googlebot), werden die dynamischen Tags sehen. Für optimale SEO‑Ergebnisse sollte langfristig über **SSR (Next.js)** oder **Static Generation** nachgedacht werden.

---

**Autor:** Code‑Review & Implementierung  
**Version:** 1.0  
**Letzte Aktualisierung:** 2026‑01‑10