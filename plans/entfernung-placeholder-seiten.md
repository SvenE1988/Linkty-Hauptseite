# Plan: Entfernung der Platzhalter-Seiten (Voice, Studio, Solutions)

## Übersicht
Dieser Plan beschreibt die Schritte zur Entfernung der drei Platzhalter-Seiten (**Voice**, **Studio** und **Solutions**), da der Fokus nun ausschließlich auf **Linkty Engage** liegt.

---

## ✅ Analyseergebnis

### Vorhandene Struktur
- **Platzhalter-Seiten**: 3 Dateien in `pages/placeholders/`
  - `VoicePlaceholder.tsx` (187 Zeilen)
  - `StudioPlaceholder.tsx` (170 Zeilen)
  - `SolutionsPlaceholder.tsx` (171 Zeilen)

- **Routing**: [`App.tsx`](App.tsx) enthält Lazy-Imports und 3 Routes
- **Navigation**: [`HorizontalScroll.tsx`](components/HorizontalScroll.tsx) zeigt 4 Business Units (inkl. Engage)
- **Footer**: [`Footer.tsx`](components/Footer.tsx) verlinkt zu allen 4 Bereichen
- **Konfiguration**: [`config/vapi.config.ts`](config/vapi.config.ts) enthält Einstellungen für alle 4 Bereiche

### Engage-Unterseiten verfügbar
Die folgenden Engage-Unterseiten existieren bereits und können als Ziel für Umleitungen genutzt werden:
- `/engage` (Landing)
- `/engage/voice` ✓ (Voice-Integration innerhalb Engage)
- `/engage/crm`
- `/engage/kommunikation`
- `/engage/marketing`
- `/engage/team`
- `/engage/workflows`
- `/engage/ressourcen`

---

## 📋 Detaillierter Ausführungsplan

### Schritt 1: Platzhalter-Dateien löschen

**Ziel**: Entfernung aller drei Platzhalter-Seiten aus dem Verzeichnis `pages/placeholders/`.

**Aktion**:
```bash
Folgende Dateien löschen:
- pages/placeholders/VoicePlaceholder.tsx
- pages/placeholders/StudioPlaceholder.tsx
- pages/placeholders/SolutionsPlaceholder.tsx
```

**Optional**: Wenn das Verzeichnis `pages/placeholders/` danach leer ist, kann es ebenfalls gelöscht werden.

---

### Schritt 2: Routing in [`App.tsx`](App.tsx) bereinigen

**Ziel**: Entfernung der Importe und Routes für die drei Platzhalter-Seiten.

#### 2.1 Lazy-Imports entfernen

**Zeilen 6–8 löschen**:
```tsx
const VoicePlaceholder = lazy(() => import('./pages/placeholders/VoicePlaceholder'));
const StudioPlaceholder = lazy(() => import('./pages/placeholders/StudioPlaceholder'));
const SolutionsPlaceholder = lazy(() => import('./pages/placeholders/SolutionsPlaceholder'));
```

#### 2.2 Routes entfernen

**Zeilen 28–30 löschen**:
```tsx
<Route path="/voice" element={<VoicePlaceholder />} />
<Route path="/studio" element={<StudioPlaceholder />} />
<Route path="/solutions" element={<SolutionsPlaceholder />} />
```

**Nach der Bereinigung sollte [`App.tsx`](App.tsx) so aussehen**:
```tsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLandingPage from './components/MainLandingPage';

const EngageApp = lazy(() => import('./pages/engage/EngageApp'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-navy">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-brand-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white font-semibold">Lädt...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/engage/*" element={<EngageApp />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
```

---

### Schritt 3: Links in [`HorizontalScroll.tsx`](components/HorizontalScroll.tsx) umleiten

**Ziel**: Die Business Units "Voice", "Studio" und "Solutions" sollen auf entsprechende Engage-Unterseiten umgeleitet werden, um "Dead Links" zu vermeiden.

#### Empfohlene Umleitung

| Business Unit | Aktuell (`id`) | Neues Ziel | Begründung |
|---------------|----------------|------------|------------|
| **Linkty Voice** | `voice` → `/voice` | **`/engage/voice`** | Engage hat bereits eine Voice-Seite (Integration) |
| **Linkty Studio** | `studio` → `/studio` | **`/engage/marketing`** | Studio = Marketing & Design (passt zur Engage-Landing) |
| **Linkty Solutions** | `solutions` → `/solutions` | **`/engage/workflows`** | Solutions = Automatisierung (passt zu Workflows) |
| **Linkty Engage** | `engage` → `/engage` | **`/engage`** | Bleibt unverändert |

#### Änderungen in [`HorizontalScroll.tsx`](components/HorizontalScroll.tsx)

**Zeile 123: Link-Pfad anpassen**

Aktuelle Implementierung:
```tsx
<Link
  to={`/${unit.id}`}
  className="mt-8 inline-block w-max px-8 py-3 bg-white text-brand-navy font-bold rounded transition-all duration-300 shadow-lg hover:bg-brand-teal hover:text-brand-navy group-hover:shadow-brand-teal/20"
  aria-label={`Mehr über ${unit.name} erfahren - ${unit.focus}`}
>
  Mehr erfahren
</Link>
```

**Problem**: `to={/${unit.id}}` führt zu `/voice`, `/studio`, `/solutions` (existieren nach Löschung nicht mehr).

**Lösung 1 (Empfohlen)**: Mapping für Business Units erstellen

**Zeilen 5–46 anpassen**: Neue Property `linkPath` zu jedem Business Unit hinzufügen:

```tsx
const businessUnits = [
  { 
    id: "engage", 
    name: "Linkty Engage", 
    focus: "Für Versicherungsmakler & Finanzdienstleister",
    headline: "Ihr MVP verwaltet Akten. Linkty aktiviert Menschen.",
    pitch: "Wir verwandeln Ihre bestehende Datenbank in eine aktive Verkaufsmaschine. Unser System automatisiert Follow-ups, generiert Termine aus dem Bestand und sorgt dafür, dass kein Kunde vergessen wird.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "CRM Dashboard mit Datenvisualisierung und Analytik für Finanzdienstleister",
    color: "from-blue-600 to-blue-400",
    linkPath: "/engage"  // NEU
  },
  { 
    id: "voice", 
    name: "Linkty Voice", 
    focus: "Für Hausverwaltungen, Agenturen & Praxen",
    headline: "Gehen Sie ran, auch wenn Sie nicht da sind.",
    pitch: "Intelligente KI-Sprachbots, die Anrufe 24/7 entgegennehmen, qualifizieren und weiterleiten. Ihr digitaler Empfang, der niemals schläft – 100% Erreichbarkeit, 0% Stress.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "Kommunikations-Wellenform und Audio-Visualisierung für KI-Telefonie",
    color: "from-teal-500 to-teal-300",
    linkPath: "/engage/voice"  // NEU: Umleitung zu Engage Voice
  },
  { 
    id: "studio", 
    name: "Linkty Studio", 
    focus: "Für Makler, KMU & Dienstleister",
    headline: "Webseiten, die nicht nur gut aussehen, sondern Kunden gewinnen.",
    pitch: "Wir bauen Webseiten, die Besucher gezielt in Anfragen verwandeln. Wir kombinieren technisches Verständnis für Ihre Branche mit hochwertigem Design für einen zukunftssicheren Außenauftritt.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "Modernes Webdesign und Website-Struktur mit UI/UX Elementen",
    color: "from-indigo-600 to-purple-500",
    linkPath: "/engage/marketing"  // NEU: Umleitung zu Engage Marketing
  },
  { 
    id: "solutions", 
    name: "Linkty Solutions", 
    focus: "Für PV-Solateure & Vertriebsorganisationen",
    headline: "Wir übernehmen die Fleißarbeit. Ihr Team macht den Umsatz.",
    pitch: "Ob Lead-Scraping oder komplexe Schnittstellen: Wir bauen die technische Brücke, die Ihnen die manuelle Arbeit abnimmt, damit sich Ihr Team voll auf den Abschluss konzentrieren kann.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=800&auto=format&fit=crop&dpr=2",
    imgAlt: "Programmier-Code und technische Automatisierungslösungen",
    color: "from-cyan-600 to-blue-600",
    linkPath: "/engage/workflows"  // NEU: Umleitung zu Engage Workflows
  },
];
```

**Zeile 123 aktualisieren**:
```tsx
<Link
  to={unit.linkPath}  // Geändert von `/${unit.id}` zu `unit.linkPath`
  className="mt-8 inline-block w-max px-8 py-3 bg-white text-brand-navy font-bold rounded transition-all duration-300 shadow-lg hover:bg-brand-teal hover:text-brand-navy group-hover:shadow-brand-teal/20"
  aria-label={`Mehr über ${unit.name} erfahren - ${unit.focus}`}
>
  Mehr erfahren
</Link>
```

---

### Schritt 4: Links im [`Footer.tsx`](components/Footer.tsx) auf Engage umleiten

**Ziel**: Footer-Links zu Voice, Studio und Solutions auf Engage-Unterseiten umleiten.

#### Änderungen in [`Footer.tsx`](components/Footer.tsx)

**Zeilen 66–83: Links aktualisieren**

Aktueller Code:
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-sm font-semibold tracking-wide border-t border-white/10 pt-10">
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">CRM</span>
    <Link to="/engage">Linkty Engage</Link>
  </div>
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">Telefonie</span>
    <Link to="/voice">Linkty Voice</Link>
  </div>
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">Design</span>
    <Link to="/studio">Linkty Studio</Link>
  </div>
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">Automation</span>
    <Link to="/solutions">Linkty Solutions</Link>
  </div>
</div>
```

**Neue Links** (Zeilen 71, 75, 79, 81):
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-sm font-semibold tracking-wide border-t border-white/10 pt-10">
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">CRM</span>
    <Link to="/engage">Linkty Engage</Link> {/* Unverändert */}
  </div>
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">Telefonie</span>
    <Link to="/engage/voice">Linkty Voice</Link> {/* Geändert: /voice → /engage/voice */}
  </div>
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">Design</span>
    <Link to="/engage/marketing">Linkty Studio</Link> {/* Geändert: /studio → /engage/marketing */}
  </div>
  <div className="flex flex-col gap-2 opacity-70 hover:opacity-100 transition-opacity">
    <span className="text-brand-teal uppercase text-xs mb-1">Automation</span>
    <Link to="/engage/workflows">Linkty Solutions</Link> {/* Geändert: /solutions → /engage/workflows */}
  </div>
</div>
```

---

### Schritt 5: VAPI-Konfiguration in [`config/vapi.config.ts`](config/vapi.config.ts) bereinigen

**Ziel**: Entfernung ungenutzter VAPI-Konfigurationen für Voice, Studio und Solutions.

#### Änderungen in [`config/vapi.config.ts`](config/vapi.config.ts)

**Zeilen 66–87: Nur "engage" Config behalten**

Aktueller Code:
```tsx
export const VAPI_PAGE_CONFIGS: Record<string, VapiPageConfig> = {
  studio: {
    accentColor: '#4a7c8a',
    title: 'Linkty Studio - Live Assistent',
    displayMode: 'floating',
  },
  solutions: {
    accentColor: '#0E5C7A',
    title: 'Linkty Solutions - Live Assistent',
    displayMode: 'floating',
  },
  engage: {
    accentColor: '#00a8a8',
    title: 'Linkty Engage - Live Assistent',
    displayMode: 'floating',
  },
  voice: {
    accentColor: '#6DBBAA',
    title: 'Linkty Voice - Live Assistent',
    displayMode: 'floating',
  },
};
```

**Nach Bereinigung** (nur noch "engage" und "voice" bleiben):
```tsx
export const VAPI_PAGE_CONFIGS: Record<string, VapiPageConfig> = {
  engage: {
    accentColor: '#00a8a8',
    title: 'Linkty Engage - Live Assistent',
    displayMode: 'floating',
  },
  voice: {
    accentColor: '#6DBBAA',
    title: 'Linkty Voice - Live Assistent',
    displayMode: 'floating',
  },
};
```

**Begründung**: 
- `voice` wird beibehalten, da [`/engage/voice`](pages/engage/VoicePage.tsx) existiert
- `studio` und `solutions` werden entfernt, da keine dedizierten Seiten mehr existieren

**Alternative**: Wenn Voice VAPI ausschließlich auf der Platzhalter-Seite genutzt wurde und nicht auf [`/engage/voice`](pages/engage/VoicePage.tsx), könnte auch die `voice`-Config entfernt werden. Das sollte durch einen Test geprüft werden.

---

### Schritt 6: Finale Prüfung auf weitere Referenzen

**Ziel**: Sicherstellen, dass keine weiteren Verweise auf die gelöschten Seiten existieren.

#### Suchmuster
Durchsuche das gesamte Projekt nach folgenden Strings:
- `VoicePlaceholder`
- `StudioPlaceholder`
- `SolutionsPlaceholder`
- `"/voice"`
- `"/studio"`
- `"/solutions"`
- `pages/placeholders`

#### Mögliche weitere Dateien
Prüfe insbesondere:
- [`components/MainLandingPage.tsx`](components/MainLandingPage.tsx) (verwendet HorizontalScroll)
- [`components/Hero.tsx`](components/Hero.tsx)
- [`components/PinningSection.tsx`](components/PinningSection.tsx)
- Alle Shared Components
- Tailwind-Konfiguration (`tailwind.config.js`) falls dort placeholder-spezifische Farben definiert sind

---

## 🎯 Zusammenfassung der Änderungen

| Datei | Aktion | Zeilen |
|-------|--------|--------|
| `pages/placeholders/VoicePlaceholder.tsx` | **Löschen** | - |
| `pages/placeholders/StudioPlaceholder.tsx` | **Löschen** | - |
| `pages/placeholders/SolutionsPlaceholder.tsx` | **Löschen** | - |
| [`App.tsx`](App.tsx) | Zeilen 6-8 löschen (Imports) | 3 Zeilen |
| [`App.tsx`](App.tsx) | Zeilen 28-30 löschen (Routes) | 3 Zeilen |
| [`HorizontalScroll.tsx`](components/HorizontalScroll.tsx) | Property `linkPath` hinzufügen | ~4 Zeilen (pro Unit) |
| [`HorizontalScroll.tsx`](components/HorizontalScroll.tsx) | Zeile 123: `to={unit.linkPath}` | 1 Zeile |
| [`Footer.tsx`](components/Footer.tsx) | Zeile 73: `/voice` → `/engage/voice` | 1 Zeile |
| [`Footer.tsx`](components/Footer.tsx) | Zeile 77: `/studio` → `/engage/marketing` | 1 Zeile |
| [`Footer.tsx`](components/Footer.tsx) | Zeile 81: `/solutions` → `/engage/workflows` | 1 Zeile |
| [`config/vapi.config.ts`](config/vapi.config.ts) | Einträge für `studio` und `solutions` löschen | ~12 Zeilen |

**Gesamtzahl betroffener Zeilen**: ~528 Zeilen (davon 528 durch Dateien-Löschung)

---

## ⚠️ Wichtige Hinweise

### Dead Links vermeiden
- **Alle Links zu `/voice`, `/studio`, `/solutions` werden umgeleitet**
- **Keine 404-Fehler** durch konsistente Verwendung von Engage-Unterseiten

### SEO & Weiterleitungen (Optional)
Falls die alten URLs bereits indexiert sind (Google, Bing), sollten **Server-seitige Redirects** eingerichtet werden:
```
/voice → /engage/voice (301 Permanent Redirect)
/studio → /engage/marketing (301 Permanent Redirect)
/solutions → /engage/workflows (301 Permanent Redirect)
```

Dies kann über eine `.htaccess`-Datei (Apache) oder `vercel.json` (Vercel) umgesetzt werden.

### VAPI-Widget
Da die Platzhalter-Seiten [`VapiLazyWrapper`](components/vapi/VapiLazyWrapper.tsx) verwendet haben, sollte geprüft werden:
- Wird das Widget auf [`/engage/voice`](pages/engage/VoicePage.tsx) benötigt?
- Falls ja, muss [`VapiLazyWrapper`](components/vapi/VapiLazyWrapper.tsx) dort integriert werden

---

## 📦 Nächster Schritt

Sobald dieser Plan bestätigt ist, kann mit der Implementierung begonnen werden. Die Reihenfolge sollte eingehalten werden, um Fehler zu vermeiden:

1. **Zuerst Routing & Links anpassen** (Schritte 2–4)
2. **Dann Dateien löschen** (Schritt 1)
3. **VAPI-Config bereinigen** (Schritt 5)
4. **Finale Prüfung** (Schritt 6)

---

## ✅ Bestätigung erforderlich

Bitte überprüfen Sie die vorgeschlagenen Umleitungen:
- **Voice** → `/engage/voice` ✓
- **Studio** → `/engage/marketing` ?
- **Solutions** → `/engage/workflows` ?

Falls Sie andere Zielseiten bevorzugen (z.B. Studio → `/engage` oder Solutions → `/engage/crm`), teilen Sie mir das bitte mit, bevor ich mit der Umsetzung beginne.
