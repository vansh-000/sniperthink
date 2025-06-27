import { GraduationCap, DollarSign, Home, Heart, ShoppingBag, ArrowRight, Bot, Drone } from 'lucide-react';

const CustomerBase = () => {
    const industries = [
        {
            icon: GraduationCap,
            title: "EdTech",
            subtitle: "Colleges & Universities",
            description: "Automate admissions, student FAQs, event queries, and campus communications.",
            color: "teal",
            iconBg: "bg-gradient-to-br from-primary to-teal-200",
            cardBg: "bg-teal-50",
            buttonColor: "text-teal-700 border-teal-600 hover:bg-teal-50"
        },
        {
            icon: DollarSign,
            title: "Finance",
            subtitle: "Insurance, Lending & Advisory",
            description: "Speed up quote generation, claims processing, onboarding, and document delivery.",
            color: "orange",
            iconBg: "bg-gradient-to-r from-accent-orange to-orange-500",
            cardBg: "bg-orange-100",
                        buttonColor: "text-orange-700 border-orange-600 hover:bg-orange-100"
        },
        {
            icon: Home,
            title: "Real Estate",
            subtitle: "",
            description: "Handle property inquiries, lead follow-ups, appointment bookings, and status updates.",
            color: "green",
            iconBg: "bg-gradient-to-br from-primary to-teal-200",
            cardBg: "bg-teal-50",
            buttonColor: "text-teal-700 border-teal-600 hover:bg-teal-50"
        },
        {
            icon: Heart,
            title: "Clinics & Healthcare",
            subtitle: "",
            description: "Automate appointment booking, test result dispatch, patient reminders, and FAQ handling.",
            color: "pink",
            iconBg: "bg-gradient-to-r from-accent-orange to-orange-500",
            cardBg: "bg-orange-100",
            buttonColor: "text-orange-700 border-orange-600 hover:bg-orange-100"
        },
        {
            icon: ShoppingBag,
            title: "D2C Brands",
            subtitle: "",
            description: "Offer instant product support, return tracking, WhatsApp updates, and customer query resolution.",
            color: "blue",
            iconBg: "bg-gradient-to-br from-primary to-teal-200",
            cardBg: "bg-teal-50",
            buttonColor: "text-teal-700 border-teal-600 hover:bg-teal-50"
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                        Built for Teams That Value{' '}
                        <span className="bg-gradient-to-r from-primary to-teal-300 bg-clip-text text-transparent">
                            Speed & Precision
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        SniperThink AI Agents are tailored for businesses that deal with high-volume queries, team
                        coordination, and time-sensitive responses. Whether you're managing operations, customer
                        interactions, or internal workflows — our agents adapt to your industry needs.
                    </p>
                </div>

                {/* Uniform Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <IndustryCard key={index} industry={industry} />
                    ))}
                </div>
            </div>
        </section>
    );
};

type Industry = {
    icon: React.ElementType;
    title: string;
    subtitle?: string;
    description: string;
    color: string;
    iconBg: string;
    cardBg: string;
    buttonColor: string;
};

const IndustryCard = ({ industry }: { industry: Industry }) => {
    const { icon: Icon, title, subtitle, description, iconBg, cardBg, buttonColor } = industry;

    return (
        <div className="group relative">
            {/* Main card */}
            <div className={`h-full ${cardBg} rounded-2xl p-8 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-slate-900/10 group-hover:-translate-y-1 border border-white/50`}>
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Bot className="w-8 h-8 text-primary" />
                        <Drone className="w-8 h-8 text-accent-orange" />
                        <span className="text-sm text-slate-500 ml-1">SniperThink AI for {title}</span>
                    </div>

                    {/* Icon and title section */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-105`}>
                            <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                                {title}
                            </h3>
                            {subtitle && (
                                <p className="text-slate-600 text-sm mt-1">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Learn more button */}
                <div className="mt-auto">
                    <button className={`w-full py-3 px-4 rounded-xl border-2 ${buttonColor} transition-all duration-300 flex items-center justify-center gap-2 font-medium group-hover:gap-3`}>
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerBase;