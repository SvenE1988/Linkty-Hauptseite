# GoHighLevel Integration Guide

This document provides step-by-step instructions for integrating GoHighLevel (GHL) forms and calendar widgets into the Linkty | Engage website.

## Overview

The Engage landing page includes two placeholder components ready for GHL integration:

1. **GHLFormPlaceholder** - Contact form for lead capture
2. **GHLCalendarPlaceholder** - Calendar booking widget for demo scheduling

## Prerequisites

- Access to your GoHighLevel account
- Forms and calendars already created in GHL
- Basic understanding of HTML/React

---

## 1. Integrating the GHL Contact Form

### Step 1: Get the Form Embed Code

1. Log in to your GoHighLevel account
2. Navigate to **Sites > Forms**
3. Select or create your contact form
4. Click the **"Get Code"** button
5. Copy the entire embed code (should include `<script>` tags)

### Step 2: Locate the Placeholder Component

The form placeholder is located at:
```
/project/components/engage/GHLFormPlaceholder.tsx
```

### Step 3: Replace the Placeholder

**Option A: Replace Entire Component**

Replace the entire `return` statement with your GHL embed code:

```tsx
const GHLFormPlaceholder: React.FC = () => {
  return (
    <div className="ghl-embed-placeholder">
      {/* Paste your GHL form embed code here */}
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
      {/* GHL form div will be inserted here */}
    </div>
  );
};
```

**Option B: Add as dangerouslySetInnerHTML** (if needed)

If the GHL code doesn't work as React components:

```tsx
const GHLFormPlaceholder: React.FC = () => {
  const ghlFormCode = `
    <!-- Your GHL form embed code here -->
  `;

  return (
    <div
      className="ghl-embed-placeholder"
      dangerouslySetInnerHTML={{ __html: ghlFormCode }}
    />
  );
};
```

### Step 4: Test the Integration

1. Run `npm run dev` to start development server
2. Navigate to `/engage#demo` (or scroll to bottom of page)
3. Verify form appears and submits correctly
4. Test form validation and submission

---

## 2. Integrating the GHL Calendar Widget

### Step 1: Get the Calendar Embed Code

1. Log in to your GoHighLevel account
2. Navigate to **Calendars**
3. Select your booking calendar
4. Click **"Get Embed Code"**
5. Copy the iframe URL (typically starts with `https://api.leadconnectorhq.com/widget/booking/...`)

### Step 2: Locate the Placeholder Component

The calendar placeholder is located at:
```
/project/components/engage/GHLCalendarPlaceholder.tsx
```

### Step 3: Replace the Placeholder

Find lines 24-26 in `GHLCalendarPlaceholder.tsx`:

```tsx
<div className="h-96 flex items-center justify-center border-2 border-dashed border-white/30 rounded-lg">
  <p className="text-white/60">Calendar iframe will appear here</p>
</div>
```

Replace with your GHL calendar iframe:

```tsx
<iframe
  src="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID"
  className="w-full h-96 rounded-lg"
  frameBorder="0"
  title="Book a Demo"
/>
```

### Step 4: Adjust Styling (Optional)

You can customize the iframe dimensions:

```tsx
<iframe
  src="YOUR_GHL_CALENDAR_URL"
  className="w-full h-[600px] rounded-lg"  // Increased height
  frameBorder="0"
  title="Book a Demo"
  allow="camera; microphone; autoplay; encrypted-media"  // Add permissions if needed
/>
```

### Step 5: Test the Integration

1. Run `npm run dev`
2. Navigate to any page with "Demo buchen" button
3. Click the button (should link to `#demo`)
4. Verify calendar loads and booking works correctly

---

## 3. Where the Components Are Used

### GHLFormPlaceholder

Used in:
- `/components/engage/FinalCTA.tsx` (main Engage landing page)

To add to other pages:
```tsx
import GHLFormPlaceholder from '../../components/engage/GHLFormPlaceholder';

// In your component:
<GHLFormPlaceholder />
```

### GHLCalendarPlaceholder

Not currently visible on any page (prepared for future use).

To add to a page:
```tsx
import GHLCalendarPlaceholder from '../../components/engage/GHLCalendarPlaceholder';

// In your component:
<GHLCalendarPlaceholder />
```

---

## 4. Styling Customization

Both components have wrapper classes that can be customized:

### Form Wrapper Classes
```tsx
className="ghl-embed-placeholder bg-white p-8 rounded-xl shadow-lg border-2 border-dashed border-engage-teal/30"
```

### Calendar Wrapper Classes
```tsx
className="ghl-calendar-placeholder bg-gradient-to-br from-engage-primary to-engage-secondary p-12 rounded-xl shadow-xl text-center"
```

You can modify these classes in the component files to match your design needs.

---

## 5. Testing Checklist

After integration, verify:

- [ ] Form appears correctly on landing page
- [ ] Form fields are accessible and styled appropriately
- [ ] Form submission works and data reaches GHL
- [ ] Calendar widget loads without errors
- [ ] Calendar booking process completes successfully
- [ ] Mobile responsiveness is maintained
- [ ] No console errors in browser dev tools
- [ ] GDPR/Privacy notices are visible (if required)

---

## 6. Troubleshooting

### Form Not Appearing

1. Check browser console for JavaScript errors
2. Verify the GHL script URL is correct
3. Ensure no ad blockers are interfering
4. Check if GHL form is published in your account

### Calendar Not Loading

1. Verify the iframe `src` URL is correct
2. Check calendar is active in GHL account
3. Verify calendar permissions/availability settings
4. Test iframe URL directly in browser

### Styling Issues

1. GHL components may inject their own styles
2. Use browser dev tools to inspect and override styles
3. Add custom CSS in component or global styles if needed

### CORS Errors

1. GHL widgets should handle CORS automatically
2. If issues persist, contact GHL support
3. Ensure you're using the official embed methods

---

## 7. Security Notes

- GHL embed codes are safe to use (from official GHL sources)
- If using `dangerouslySetInnerHTML`, only use code from your GHL account
- Never paste untrusted third-party code
- Review GHL's security documentation for best practices

---

## 8. Additional Resources

- [GoHighLevel Documentation](https://help.gohighlevel.com/)
- [GHL Forms Guide](https://help.gohighlevel.com/support/solutions/folders/48000682481)
- [GHL Calendar Widgets](https://help.gohighlevel.com/support/solutions/folders/48000448905)

---

## Support

For technical issues with:
- **GHL Integration**: Contact GoHighLevel Support
- **Website Implementation**: Contact your development team
- **Component Customization**: Refer to React/TypeScript documentation

---

**Last Updated**: 2025-11-29
**Version**: 1.0
