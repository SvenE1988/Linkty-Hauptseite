import React from 'react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  iframeId: string;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, iframeId }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendar-modal-title"
    >
      <div
        className="bg-white rounded-lg w-full max-w-5xl max-h-[95vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10 bg-white rounded-full w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg"
          aria-label="Kalender schließen"
        >
          ×
        </button>
        <div className="p-4 sm:p-6">
          <iframe
            src="https://link.linkty.ai/widget/booking/EAqjBUlT5vgXjUg1UxFG"
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px', height: '85vh' }}
            scrolling="no"
            id={iframeId}
            title="Linkty Demo Terminbuchung"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
