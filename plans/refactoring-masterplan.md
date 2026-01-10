# Linkty Hauptseite - Refactoring Masterplan v3.1

**Erstellt:** 2026-01-10  
**Status:** Bereit zur Umsetzung  
**Ziel:** Saubere, skalierbare Codebasis vor großer Umstrukturierung

---

## 🎯 Kernentscheidungen

| Aspekt | Entscheidung | Begründung |
|--------|--------------|------------|
| Barrel Exports | ❌ **Keine** | Tree-Shaking, keine Circular Deps |
| Error Handling | `react-error-boundary` | Library-Standard, einfacher als Class |
| Path Aliases | **Nur `@/`** | Konsistenz, Einfachheit |
| Imports | **Immer direkt** | Keine index.ts Dateien |
| Export-Style | **Named Exports** | Besseres Refactoring, Tree-Shaking |
| Tailwind Setup | **Vite Plugin** | Moderner, schnellere HMR |

---

## 📊 Aktuelle Struktur → Ziel-Struktur

### Vorher
```
/
├── App.tsx
├── index.tsx
├── index.html           # Tailwind CDN (!)
├── components/
│   ├── engage/          # 12 Dateien
│   ├── legal/           # 2 Dateien
│   ├── shared/          # 4 Dateien
│   └── [5 Haupt-Komponenten]
├── pages/
│   ├── engage/          # 10 Dateien
│   └── [2 globale Seiten]
├── content/
├── contexts/
└── hooks/
```

### Nachher
```
/src
├── app/
│   ├── App.tsx
│   └── providers/
│       ├── AppProvider.tsx
│       └── CalendarProvider.tsx
│
├── features/
│   ├── landing/
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── PinningSection.tsx
│   │   │   └── HorizontalScroll.tsx
│   │   ├── MainLayout.tsx
│   │   └── LandingPage.tsx
│   │
│   ├── engage/
│   │   ├── components/
│   │   ├── pages/
│   │   └── EngageLayout.tsx
│   │
│   └── legal/
│       ├── components/
│       ├── pages/
│       └── content/
│
├── shared/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── CalendarModal.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── feedback/
│   │       ├── ErrorFallback.tsx
│   │       └── NotFound.tsx
│   │
│   ├── hooks/
│   │   └── usePageTitle.ts
│   │
│   ├── constants/
│   │   ├── urls.ts
│   │   └── routes.ts
│   │
│   └── types/
│       └── common.ts
│
├── styles/
│   └── globals.css
│
└── main.tsx
```

---

## 📋 Umsetzungsplan

### Phase 0: Tailwind Vite Plugin Setup

```bash
npm install -D @tailwindcss/vite
npm install react-error-boundary
```

**`vite.config.ts`**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
```

**`styles/globals.css`**
```css
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-playfair: 'Playfair Display', serif;
  
  --color-brand-teal: #2DD4BF;
  --color-brand-blue: #3B82F6;
  --color-brand-navy: #0F172A;
  --color-brand-surface: #1E293B;
  
  --color-engage-primary: #023059;
  --color-engage-secondary: #3973bf;
  --color-engage-teal: #76d9bd;
  --color-engage-accent: #00a8a8;
  --color-engage-surface: #F8F9FB;
}

*:focus-visible {
  outline: 3px solid var(--color-brand-teal);
  outline-offset: 2px;
}
```

**CDN aus `index.html` entfernen:**
```html
<!-- ENTFERNEN: -->
<script src="https://cdn.tailwindcss.com"></script>
<script>tailwind.config = { ... }</script>
```

---

### Phase 1: Konstanten & Error Handling

#### 1.1 Konstanten

**`shared/constants/urls.ts`**
```typescript
export const EXTERNAL_URLS = {
  LOGIN_PORTAL: 'https://login.linkty.ai',
  CALENDAR_WIDGET: 'https://link.linkty.ai/widget/booking/EAqjBUlT5vgXjUg1UxFG',
  GHL_PRIVACY: 'https://www.gohighlevel.com/privacy-policy',
} as const;

export const ASSET_URLS = {
  ENGAGE_LOGO: 'https://storage.googleapis.com/msgsndr/Av3P0jZ2jSTK0YnBojKR/media/692a888e83db21530b468bdb.png',
} as const;
```

**`shared/constants/routes.ts`**
```typescript
export const ROUTES = {
  HOME: '/',
  IMPRESSUM: '/impressum',
  DATENSCHUTZ: '/datenschutz',
  
  ENGAGE: {
    ROOT: '/engage',
    CRM: '/engage/crm',
    KOMMUNIKATION: '/engage/kommunikation',
    MARKETING: '/engage/marketing',
    TEAM: '/engage/team',
    VOICE: '/engage/voice',
    WORKFLOWS: '/engage/workflows',
    RESSOURCEN: '/engage/ressourcen',
    IMPRESSUM: '/engage/impressum',
    DATENSCHUTZ: '/engage/datenschutz',
  },
} as const;
```

#### 1.2 AppProvider mit react-error-boundary

**`app/providers/AppProvider.tsx`**
```tsx
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { CalendarProvider } from '@/app/providers/CalendarProvider';
import { ErrorFallback } from '@/shared/components/feedback/ErrorFallback';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <BrowserRouter>
        <CalendarProvider>
          {children}
        </CalendarProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
```

**`shared/components/feedback/ErrorFallback.tsx`**
```tsx
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="text-center text-white max-w-md px-4">
        <h1 className="text-4xl font-bold mb-4">Etwas ist schiefgelaufen</h1>
        <p className="text-gray-400 mb-8">Ein unerwarteter Fehler ist aufgetreten.</p>
        <button 
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-brand-teal text-brand-navy rounded-lg font-semibold"
        >
          Seite neu laden
        </button>
      </div>
    </div>
  );
};
```

#### 1.3 Path Alias konfigurieren

**`tsconfig.json`**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

### Phase 2: Struktur umbauen

#### 2.1 Ordner erstellen
```bash
mkdir -p src/{app/providers,features/{landing,engage,legal}/{components,pages},shared/{components/{ui,layout,feedback},hooks,constants,types},styles}
```

#### 2.2 Dateien verschieben + auf Named Exports umstellen

**Reihenfolge: Shared → Features → App**

| Von | Nach |
|-----|------|
| `hooks/usePageTitle.ts` | `src/shared/hooks/usePageTitle.ts` |
| `contexts/CalendarContext.tsx` | `src/app/providers/CalendarProvider.tsx` |
| `components/shared/LoadingSpinner.tsx` | `src/shared/components/ui/LoadingSpinner.tsx` |
| `components/shared/CalendarModal.tsx` | `src/shared/components/ui/CalendarModal.tsx` |
| `components/Footer.tsx` | `src/shared/components/layout/Footer.tsx` |
| `components/Hero.tsx` | `src/features/landing/components/Hero.tsx` |
| `components/PinningSection.tsx` | `src/features/landing/components/PinningSection.tsx` |
| `components/HorizontalScroll.tsx` | `src/features/landing/components/HorizontalScroll.tsx` |
| `components/MainLandingPage.tsx` | `src/features/landing/LandingPage.tsx` |
| `components/engage/*` | `src/features/engage/components/*` |
| `pages/engage/*` | `src/features/engage/pages/*` |
| `App.tsx` | `src/app/App.tsx` |
| `index.tsx` | `src/main.tsx` |

#### 2.3 Named Exports umstellen

**Beim Verschieben jede Datei anpassen:**

```typescript
// VORHER (Default Export)
const Footer = () => { ... };
export default Footer;

// NACHHER (Named Export)
export const Footer = () => { ... };
```

#### 2.4 Tailwind Content-Pfad
Entfällt mit Vite Plugin - erkennt automatisch alle Dateien.

#### 2.5 Alle Imports aktualisieren

```typescript
// Vorher (relativ + default)
import Footer from '../../../components/Footer';

// Nachher (Alias + named)
import { Footer } from '@/shared/components/layout/Footer';
```

---

### Phase 3: Qualität

#### 3.1 404-Seite

**`shared/components/feedback/NotFound.tsx`**
```tsx
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy">
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold text-brand-teal mb-4">404</h1>
        <h2 className="text-2xl mb-8">Seite nicht gefunden</h2>
        <Link to={ROUTES.HOME} className="px-6 py-3 bg-brand-teal text-brand-navy rounded-lg font-semibold">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
};
```

**In Routes:**
```tsx
<Route path="*" element={<NotFound />} />
```

#### 3.2 SEO Meta-Tags

**In `index.html`:**
```html
<meta name="description" content="Linkty - CRM, KI-Telefonie und Marketing-Automation für Versicherungsmakler und Finanzdienstleister." />
<meta property="og:title" content="Linkty | Verbinden. Automatisieren. Wachsen." />
<meta property="og:description" content="CRM und Automation für Finanzdienstleister." />
<meta property="og:type" content="website" />
```

#### 3.3 Scroll-to-Top

**`shared/components/layout/ScrollToTop.tsx`**
```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  
  return null;
};
```

---

## ✅ Checkliste

### Phase 0 (Tailwind Vite Plugin)
- [ ] `@tailwindcss/vite` installieren
- [ ] `react-error-boundary` installieren
- [ ] vite.config.ts mit Plugin + Alias
- [ ] globals.css mit `@import "tailwindcss"` + `@theme`
- [ ] CDN aus index.html entfernen
- [ ] Build testen

### Phase 1 (Grundlagen)
- [ ] `constants/urls.ts` erstellt
- [ ] `constants/routes.ts` erstellt
- [ ] `AppProvider.tsx` erstellt
- [ ] `ErrorFallback.tsx` erstellt
- [ ] Path Alias `@/` in tsconfig.json

### Phase 2 (Struktur)
- [ ] `/src` Ordner angelegt
- [ ] Alle Dateien verschoben
- [ ] Alle auf Named Exports umgestellt
- [ ] Alle Imports aktualisiert
- [ ] DEV-Server läuft
- [ ] Alle Routes funktionieren

### Phase 3 (Qualität)
- [ ] 404-Seite implementiert
- [ ] Meta-Tags in index.html
- [ ] Scroll-to-Top global

---

## 📁 Nach Umbau zu löschen

- [ ] `/components/` (leer)
- [ ] `/pages/` (leer)
- [ ] `/contexts/` (leer)
- [ ] `/hooks/` (leer)
- [ ] `/content/` (leer)
- [ ] `/config/` (bereits leer)

---

## 💡 Import-Regeln

### Named Exports überall

```typescript
// Komponente definieren
export const Footer = () => { ... };

// Komponente importieren
import { Footer } from '@/shared/components/layout/Footer';
```

### Direkte Imports, keine Barrel Files

```typescript
// ✅ Richtig
import { Hero } from '@/features/landing/components/Hero';
import { LoadingSpinner } from '@/shared/components/ui/LoadingSpinner';
import { ROUTES } from '@/shared/constants/routes';

// ❌ Falsch
import { Hero, PinningSection } from '@/features/landing/components';
```

---

*Version 3.1 - Mit Tailwind Vite Plugin + Named Exports*
