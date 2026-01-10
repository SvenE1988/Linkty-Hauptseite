# Linkty Hauptseite - Projekt-Architektur

**Stand:** 2026-01-10  
**Tech Stack:** React 19 + Vite + Tailwind 4 + TypeScript  
**URL:** https://linkty.ai

---

## 🎯 Projektübersicht

Die Linkty Hauptseite ist die zentrale Marketing-Website für Linkty Group mit folgenden Sub-Bereichen:
- **Landing Page** (`/`) - Hauptseite mit Hero, Features, Pricing
- **Engage** (`/engage/*`) - CRM-Produkt-Subseite für Versicherungsmakler
- **Legal Pages** (`/impressum`, `/datenschutz`) - Rechtliche Seiten

---

## 📁 Projektstruktur

```
/
├── index.html              # HTML Entry + SEO Meta-Tags
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript Config (Path Alias @/ → ./src/*)
├── vite.config.ts          # Vite + Tailwind Plugin + Alias
│
├── docs/                   # Dokumentation
│   └── GHL_INTEGRATION.md  # GoHighLevel Integration Guide
│
├── plans/                  # Planungsdokumente
│   └── refactoring-masterplan.md
│
└── src/
    ├── main.tsx            # React Entry Point
    ├── styles/globals.css  # Tailwind 4 Styles (@theme)
    │
    ├── app/                # App-Kern
    │   ├── App.tsx         # Haupt-Routing
    │   └── providers/
    │       ├── AppProvider.tsx      # ErrorBoundary + BrowserRouter
    │       └── CalendarProvider.tsx # Calendar Modal Context
    │
    ├── features/           # Feature-Module
    │   ├── landing/        # Landing Page Feature
    │   ├── engage/         # Engage CRM Sub-App
    │   └── legal/          # Impressum, Datenschutz
    │
    └── shared/             # Geteilte Ressourcen
        ├── components/     # UI, Layout, Feedback
        ├── hooks/          # Custom Hooks
        ├── constants/      # Routes, URLs
        └── types/          # TypeScript Types
```

---

## 🔑 Core Konzepte

### Import-Regeln
```typescript
// ✅ Named Exports + Path Alias
import { Footer } from '@/shared/components/layout/Footer';
import { ROUTES } from '@/shared/constants/routes';

// ❌ Keine Default Exports, keine Barrel Files
import Footer from '../../../components/Footer';  // FALSCH
```

### Tailwind 4 Setup
CSS-basierte Konfiguration in `src/styles/globals.css`:
```css
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-playfair: 'Playfair Display', serif;
  
  --color-brand-teal: #2DD4BF;
  --color-brand-navy: #0F172A;
  --color-engage-primary: #023059;
  /* ... */
}
```

Verwendung:
```html
<div class="bg-brand-navy text-brand-teal font-playfair">
```

---

## 🗺️ Routes

| Route | Component | Beschreibung |
|-------|-----------|--------------|
| `/` | `LandingPage` | Hauptseite mit Hero |
| `/impressum` | `ImpressumPage` | Impressum |
| `/datenschutz` | `DatenschutzPage` | Datenschutzerklärung |
| `/engage` | `EngageLanding` | Engage CRM Landing |
| `/engage/crm` | `CRMPage` | CRM Features |
| `/engage/kommunikation` | `KommunikationPage` | Omnichannel |
| `/engage/marketing` | `MarketingPage` | Marketing Automation |
| `/engage/team` | `TeamPage` | Team Features |
| `/engage/voice` | `VoicePage` | KI-Telefonie |
| `/engage/workflows` | `WorkflowsPage` | Automation |
| `/engage/ressourcen` | `RessourcenPage` | Resources |
| `/engage/impressum` | `EngageImpressumPage` | Engage Legal |
| `/engage/datenschutz` | `EngageDatenschutzPage` | Engage Legal |
| `*` | `NotFound` | 404-Seite |

---

## 📦 Feature-Module

### Landing (`/src/features/landing/`)
- **LandingPage.tsx** - Hauptkomponente
- **components/**
  - `Hero.tsx` - Hero-Section mit Linkty Branding
  - `PinningSection.tsx` - ScrollTrigger Pinning
  - `HorizontalScroll.tsx` - Horizontale Scroll-Animation

### Engage (`/src/features/engage/`)
- **EngageApp.tsx** - Sub-Router für /engage/*
- **EngageLayout.tsx** - Layout mit Header/Footer
- **components/** - Section-Komponenten (Hero, Features, Stats, etc.)
- **pages/** - Feature-Seiten (CRM, Voice, Marketing, etc.)

### Legal (`/src/features/legal/`)
- **pages/** - Impressum, Datenschutz
- **components/** - LegalHeader, LegalSection, SimpleLegalFooter
- **content/** - datenschutz-content.tsx (Structured Content)

---

## 🔗 Shared Components

### UI (`/src/shared/components/ui/`)
| Component | Verwendung |
|-----------|------------|
| `LoadingSpinner` | Suspense Fallback, Lazy Loading |
| `CalendarModal` | GoHighLevel Kalender-Widget |

### Layout (`/src/shared/components/layout/`)
| Component | Verwendung |
|-----------|------------|
| `Footer` | Hauptseiten-Footer |
| `ScrollToTop` | Automatisch bei Route-Change |

### Feedback (`/src/shared/components/feedback/`)
| Component | Verwendung |
|-----------|------------|
| `ErrorFallback` | react-error-boundary Fallback |
| `NotFound` | 404-Seite |

---

## 🔧 Constants

### Routes (`/src/shared/constants/routes.ts`)
```typescript
export const ROUTES = {
  HOME: '/',
  IMPRESSUM: '/impressum',
  DATENSCHUTZ: '/datenschutz',
  ENGAGE: {
    ROOT: '/engage',
    CRM: '/engage/crm',
    // ...
  },
} as const;
```

### URLs (`/src/shared/constants/urls.ts`)
```typescript
export const EXTERNAL_URLS = {
  LOGIN_PORTAL: 'https://login.linkty.ai',
  CALENDAR_WIDGET: 'https://link.linkty.ai/widget/booking/EAqjBUlT5vgXjUg1UxFG',
  GHL_PRIVACY: 'https://www.gohighlevel.com/privacy-policy',
} as const;
```

---

## 🚀 Development

```bash
# Install
npm install

# Dev Server
npm run dev

# Build
npm run build

# Preview Build
npm run preview
```

---

## 📚 Externe Integrationen

### GoHighLevel (GHL)
- Kalender-Widget für Terminbuchungen
- Formular-Embed für Lead-Capture
- Siehe: `docs/GHL_INTEGRATION.md`

### Fonts
- **Inter** - UI Font
- **Playfair Display** - Headlines
- Geladen via Google Fonts in `index.html`

---

## 🎨 Design Tokens

Definiert in `src/styles/globals.css`:

| Token | Wert | Verwendung |
|-------|------|------------|
| `--color-brand-teal` | #2DD4BF | Primary CTAs, Akzente |
| `--color-brand-blue` | #3B82F6 | Links |
| `--color-brand-navy` | #0F172A | Hintergrund (Dark) |
| `--color-brand-surface` | #1E293B | Cards, Surfaces |
| `--color-engage-primary` | #023059 | Engage Primary |
| `--color-engage-teal` | #76d9bd | Engage Akzent |
| `--color-engage-accent` | #00a8a8 | Engage CTAs |

---

*Version 3.1 - Feature-basierte Architektur mit Tailwind 4*
