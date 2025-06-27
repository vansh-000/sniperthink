import { CheckCircle, Brain, Zap, Shield, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "Trained on internal workflows & tools",
            description: "Understands your business processes"
        },
        {
            title: "Works for internal ops/customers",
            description: "Dual-purpose AI for all interactions"
        },
        {
            title: "Integrated with CRMs, Tally, Dashboards",
            description: "Connects with your existing systems"
        },
        {
            title: "Role-based responses + triggers",
            description: "Smart automation based on context"
        },
        {
            title: "Secure, multilingual, constantly improving",
            description: "Enterprise-grade with global reach"
        },
        {
            title: "24/7 intelligent assistance",
            description: "Always-on support that never sleeps"
        }
    ];

    const capabilities = [
        {
            icon: <Brain className="w-8 h-8 text-white" />,
            title: "Smart Learning",
            description: "Adapts to your business logic",
            bgColor: "bg-gradient-to-r from-primary to-teal-400",
            hoverBg: "hover:bg-teal-700"
        },
        {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: "Instant Action",
            description: "Triggers workflows automatically",
            bgColor: "bg-gradient-to-r from-amber-500 to-orange-600",
            hoverBg: "bg-gradient-to-r from-orange-600 to-amber-500"
        },
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: "Secure & Private",
            description: "Enterprise-grade security",
            bgColor: "bg-gradient-to-r from-primary to-teal-400",
            hoverBg: "hover:bg-green-700"
        },
        {
            icon: <Globe className="w-8 h-8 text-white" />,
            title: "Global Ready",
            description: "Multilingual support",
            bgColor: "bg-gradient-to-r from-amber-500 to-orange-600",
            hoverBg: "bg-gradient-to-r from-orange-600 to-amber-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100  py-16 px-4 sm:px-6 lg:px-8">
            <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Why Choose{' '}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-[#1A6262] via-[#91C499] to-[#E1A940] bg-clip-text text-transparent">
                                SniperThink
                            </span>
                        </span>
                        <span>{' '}
                        </span>
                        ?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        Custom-trained AI agents that don't just respond. They act, adapt, and accelerate your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <div className="flex items-start mx-12 space-x-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-gradient-to-r to-primary from-teal-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 lg:gap-12">
                        {capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="text-center group cursor-pointer perspective-1000"
                            >
                                <div className="relative w-full h-40 preserve-3d duration-700 group-hover:rotate-y-180">
                                    <div className="absolute inset-0 backface-hidden">
                                        <div className={`${capability.bgColor} w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform transition-all duration-300`}>
                                            {capability.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {capability.title}
                                        </h3>
                                    </div>
                                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                                        <div className={`${capability.bgColor} w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg text-white text-center `}>
                                            <div className="mb-3">
                                                {capability.icon}
                                            </div>
                                            <h4 className="font-bold text-lg mb-2">
                                                {capability.title}
                                            </h4>
                                            <p className="text-sm opacity-90 leading-relaxed">
                                                {capability.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;