import { ArrowRight, Mic, MessageSquare, CheckCircle, CircleX } from "lucide-react";

const features = [
    { feature: "Natural language Q&A", chat: true, call: true },
    { feature: "Text-based conversation", chat: true, call: false },
    { feature: "Voice-based interactions", chat: false, call: true },
    { feature: "Supports team + customer", chat: true, call: true },
    { feature: "Alerts & automations", chat: true, call: true },
];

const ctaCards = [
    {
        title: "Start with Chat Agent",
        description: "Experience fast, accurate text-based support for users.",
        Icon: MessageSquare,
        gradient: "from-primary to-teal-400",
        hoverGradient: "from-teal-400 to-teal-500",
    },
    {
        title: "Explore Calling Agent",
        description: "Let users talk in real time with powerful voice AI.",
        Icon: Mic,
        gradient: "from-orange-500 to-red-400",
        hoverGradient: "from-orange-200 to-red-200",
    },
];

const FeatureIcon = ({ supported }: { supported: boolean }) => (
    <div
        className={`w-9 h-9 rounded-full flex items-center justify-center border-2 ${supported
                ? "bg-gradient-to-br to-primary from-teal-300 border-teal-50"
                : "bg-gradient-to-br to-red-600 from-red-300 border-red-100"
            }`}
    >
        {supported ? (
            <CheckCircle className="w-6 h-6 text-white" />
        ) : (
            <CircleX className="w-9 h-9 text-white" />
        )}
    </div>
);

const ChatVsCall = () => {
    return (
        <section className="py-16 px-6 bg-gradient-to-br from-white via-slate-50 to-purple-50/40">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
                        Chat or Call — {''}
                        <span className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1A6262] via-[#b2e8ba] to-[#ffb938] bg-clip-text text-transparent">You Choose How Your AI Works</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Compare experiences and pick the interaction mode that fits your users best.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-white/90 rounded-3xl shadow-xl border border-slate-300 ring-1 ring-slate-200 backdrop-blur-md overflow-hidden">
                    <div className="grid grid-cols-3 font-semibold text-lg bg-gradient-to-r from-teal-600 to-orange-400 text-white divide-x divide-white border-b border-slate-300">
                        <div className="px-6 py-4 text-center">Features</div>
                        <div className="px-6 py-4 text-center">Chat Agent</div>
                        <div className="px-6 py-4 text-center">Calling Agent</div>
                    </div>

                    {features.map((row, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 items-center transition-all duration-300 hover:bg-slate-100 divide-x divide-slate-300 ${index !== features.length - 1 ? "border-b border-slate-300" : ""
                                }`}
                        >
                            <div className="px-6 py-5 font-medium text-center text-slate-700">{row.feature}</div>
                            <div className="px-6 py-5 flex justify-center">
                                <FeatureIcon supported={row.chat} />
                            </div>
                            <div className="px-6 py-5 flex justify-center">
                                <FeatureIcon supported={row.call} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ctaCards.map(({ title, description, Icon, gradient, hoverGradient }, index) => (
                        <div key={index} className="group relative hover:z-10">
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${hoverGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-1 shadow-2xl blur-sm`}
                            />
                            <div
                                className={`relative bg-gradient-to-r ${gradient} rounded-2xl p-8 text-white transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1 cursor-pointer shadow-xl`}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>

                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="md:w-14 md:h-14 w-9 h-9 p-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                            <Icon className="md:w-7 md:h-7 w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="md:text-xl font-bold mb-1">{title}</h3>
                                            <p className="text-white/80 text-xs md:text-sm">{description}</p>
                                        </div>
                                    </div>
                                    <div className="transition-all duration-300 group-hover:translate-x-2">
                                        <ArrowRight className="w-6 h-6 text-white/80 group-hover:text-white" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full group-hover:opacity-100 transition-all duration-700 animate-ping" />
                                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/40 rounded-full group-hover:opacity-100 transition-all duration-700 delay-200 animate-ping" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChatVsCall;
