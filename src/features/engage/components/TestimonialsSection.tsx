import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Seit wir Linkty Engage nutzen, generieren wir 3x mehr Termine aus unserem Bestand. Die automatischen Geburtstagskampagnen sind Gold wert.',
    author: 'Michael Schmidt',
    role: 'Versicherungsmakler, Hamburg',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=200&dpr=2&auto=format&fit=crop',
  },
  {
    quote:
      'Endlich ein CRM, das nicht nur verwaltet, sondern aktiv verkauft. Unser Team spart 15 Stunden pro Woche an manueller Arbeit.',
    author: 'Sandra Weber',
    role: 'Finanzberaterin, München',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=200&dpr=2&auto=format&fit=crop',
  },
  {
    quote:
      'Die White-Label-Integration mit unserem MVP war nahtlos. Unsere Kunden fühlen sich jetzt viel besser betreut.',
    author: 'Thomas Bauer',
    role: 'Geschäftsführer Maklerbüro, Frankfurt',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=60&w=200&dpr=2&auto=format&fit=crop',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-engage-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-engage-primary mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Makler und Finanzberater, die bereits mit Linkty Engage arbeiten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <Quote className="w-10 h-10 text-engage-teal mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <div className="font-bold text-engage-primary">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
