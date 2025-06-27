import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alice Johnson",
    domain: "Ecommerce",
    title: "Customer Support",
    quote: "This AI support has transformed our customer service experience!",
    avatar: "/avatars/alice.png",
    reviewLink: "https://www.trustpilot.com/review/example.com"
  },
  {
    name: "Rahul Mehta",
    domain: "Healthcare",
    title: "Appointment Booking",
    quote: "Efficient and accurate – patients love the instant scheduling.",
    avatar: "/avatars/rahul.png",
    reviewLink: "https://www.google.com/maps/place/example-review"
  },
  {
    name: "Sophie Chen",
    domain: "Finance & Loans",
    title: "Lead Qualification",
    quote: "Helped us filter quality leads with almost no manual effort!",
    avatar: "/avatars/sophie.png",
    reviewLink: "https://www.trustpilot.com/review/example.com"
  },
  {
    name: "David Lee",
    domain: "Insurance",
    title: "Claim Report",
    quote: "Incredible. Reduced support load by 70% during peak season.",
    avatar: "/avatars/david.png",
    reviewLink: "https://www.google.com/maps/place/example-review"
  }
];

export default function Testimonials() {
  return (
    <div className="relative py-12 px-12 overflow-hidden font-popins text-primary">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
      
      <div className="overflow-x-auto p-4">
        <div className="flex gap-6 min-w-max px-2">
          {testimonials.map((t, idx) => (
            <a
              href={t.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="flex-shrink-0 bg-white border border-primary/20 text-primary rounded-2xl p-5 w-80 shadow-lg transition hover:scale-105 duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-primary/30"
                />
                <div>
                  <h4 className="font-semibold">{t.title}</h4>
                  <p className="text-sm text-accent-orange">{t.domain}</p>
                </div>
              </div>
              <p className="text-sm mb-4 text-gray-700 italic">"{t.quote}"</p>
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <span className="ml-2 text-xs text-primary/60">Verified Review</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
