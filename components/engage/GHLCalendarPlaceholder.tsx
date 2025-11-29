import React from 'react';
import { Calendar } from 'lucide-react';

/**
 * GHL Calendar Placeholder Component
 *
 * TODO: Insert GoHighLevel Calendar Widget Script
 *
 * Instructions:
 * 1. Go to your GoHighLevel account
 * 2. Navigate to Calendars
 * 3. Select or create your booking calendar
 * 4. Click "Get Embed Code" to copy the calendar widget script
 * 5. Replace the placeholder div (lines 24-26) with the GHL calendar iframe
 * 6. Typical GHL calendar code looks like:
 *    <iframe src="https://api.leadconnectorhq.com/widget/booking/..." />
 *
 * Note: Keep the outer styling wrapper but replace the inner placeholder
 * with the actual GHL calendar embed code.
 */
const GHLCalendarPlaceholder: React.FC = () => {
  return (
    <div className="ghl-calendar-placeholder bg-gradient-to-br from-engage-primary to-engage-secondary p-12 rounded-xl shadow-xl text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-6 bg-engage-accent rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Termin buchen
        </h3>

        <p className="text-gray-200 mb-8">
          Vereinbaren Sie jetzt einen kostenlosen Beratungstermin mit unseren Experten.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <p className="text-sm text-white/80 mb-4">
            GoHighLevel Calendar Integration
          </p>
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-white/30 rounded-lg">
            <p className="text-white/60">Calendar iframe will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GHLCalendarPlaceholder;
