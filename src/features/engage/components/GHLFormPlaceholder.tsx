/**
 * GHL Form Placeholder Component
 *
 * TODO: Insert GoHighLevel Form Embed Script
 *
 * Instructions:
 * 1. Go to your GoHighLevel account
 * 2. Navigate to Sites > Forms
 * 3. Select or create your contact form
 * 4. Click "Get Code" to copy the embed script
 * 5. Replace this entire placeholder div with the GHL embed code
 */
export const GHLFormPlaceholder = () => {
  return (
    <div className="ghl-embed-placeholder bg-white p-8 rounded-xl shadow-lg border-2 border-dashed border-engage-teal/30">
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-engage-primary mb-6 text-center">
          Kontaktieren Sie uns
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engage-teal focus:border-transparent"
              placeholder="Ihr Name"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engage-teal focus:border-transparent"
              placeholder="ihre@email.de"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engage-teal focus:border-transparent"
              placeholder="+49 123 456789"
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engage-teal focus:border-transparent"
              placeholder="Wie können wir Ihnen helfen?"
              disabled
            />
          </div>

          <button
            className="w-full px-6 py-3 bg-engage-accent text-white font-semibold rounded-lg hover:bg-engage-accent/90 transition-all shadow-md"
            disabled
          >
            Absenden
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Ihre Daten werden gemäß DSGVO vertraulich behandelt.
        </p>
      </div>
    </div>
  );
};
