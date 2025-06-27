import { useState, useEffect, type SetStateAction } from 'react';
import { ChevronLeft, Brain, ChevronRight, Play, Pause, MessageCircle, Zap, Mail, AlertTriangle, BarChart3, FileText, Globe, CircleQuestionMark, MessageSquare, Settings, Bell, CircleCheckBig } from 'lucide-react';

const FeatureCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const features = [
        {
            id: 1,
            category: "Query Management",
            title: "Answer Team & Customer Queries",
            description: "Intelligent AI that provides instant responses to common questions with contextual understanding and human-like conversation flow.",
            icon: <MessageCircle className="w-8 h-8" />,
            features: ["95% Accuracy Rate", "0.3s Response Time", "24/7 Availability"],
            gradient: "from-primary to-teal-200",
            bgGradient: "from-blue-50 to-cyan-50",
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-teal-200 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                            <Brain className="w-10 h-10 text-white" />
                        </div>
                        {[...Array(6)].map((_, i) => {
                            const positions = [
                                { top: '-20px', left: '-30px', delay: '0s' },
                                { top: '-30px', right: '-20px', delay: '0.5s' },
                                { top: '20px', right: '-40px', delay: '1s' },
                                { bottom: '-20px', right: '-30px', delay: '1.5s' },
                                { bottom: '-30px', left: '-20px', delay: '2s' },
                                { top: '20px', left: '-40px', delay: '2.5s' }
                            ];
                            return (
                                <div
                                    key={i}
                                    className="absolute w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce"
                                    style={{
                                        ...positions[i],
                                        animationDelay: positions[i].delay,
                                        animationDuration: '2s'
                                    }}
                                >
                                    <CircleQuestionMark className="w-6 h-6 text-primary" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        },
        {
            id: 2,
            category: "Automation",
            title: "Trigger CRM/WhatsApp Actions",
            description: "Automated workflow triggers that seamlessly integrate with your existing systems to execute actions based on conversation context.",
            icon: <Zap className="w-8 h-8" />,
            features: ["12+ Integrations", "Instant Triggers", "Zero Manual Work"],
            gradient: "bg-gradient-to-r from-accent-orange to-orange-500",
            bgGradient: "from-orange-50 to-red-50",
            visual: (
                <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="absolute top-16 left-20 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                        <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                </div>

            )
        }, {
            id: 3,
            category: "Analytics",
            title: "Generate & Email Reports",
            description: "AI-powered report generation that creates comprehensive analytics and automatically distributes them to stakeholders.",
            icon: <BarChart3 className="w-8 h-8" />,
            features: ["Real-time Data", "Custom Templates", "Auto Distribution"],
            gradient: "from-primary to-teal-200",
            bgGradient: "from-emerald-50 to-teal-50",
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 w-72">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-800">Analytics Dashboard</h3>
                            <BarChart3 className="w-5 h-5 from-primary to-teal-200" />
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Sales Performance</span>
                                    <span className="font-bold text-emerald-600">85%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Customer Satisfaction</span>
                                    <span className="font-bold text-blue-600">92%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full animate-pulse" style={{ width: '92%', animationDelay: '0.5s' }}></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Revenue Growth</span>
                                    <span className="font-bold text-purple-600">78%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: '78%', animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            category: "Monitoring",
            title: "Alert on Stock, Cash Flow, Delays",
            description: "Proactive monitoring system that tracks critical business metrics and sends intelligent alerts when thresholds are reached.",
            icon: <AlertTriangle className="w-8 h-8" />,
            features: ["Real-time Monitoring", "Smart Thresholds", "Multi-channel Alerts"],
            gradient: "from-amber-500 to-orange-600",
            bgGradient: "from-amber-50 to-orange-200",
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 w-72">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-800">SystemAlerts</h3>
                            <Bell className="w-8 h-8 from-amber-500 to-orange-600" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg ">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">Low Stock Alert</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg  ">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-gray-800">Cash Flow Warning</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg ">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-800">System Normal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            category: "Document Processing",
            title: "Summarize SOPs, Docs, Tasks",
            description: "Advanced document processing that extracts key information and creates actionable summaries from complex documents.",
            icon: <FileText className="w-8 h-8" />,
            features: ["AI Document Analysis", "Key Point Extraction", "Instant Summaries"],
            gradient: "from-[#1A6262] via-[#91C499] to-[#E1A940]",
            bgGradient: "from-indigo-50 to-purple-50",
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 w-72">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#1A6262] via-[#91C499] to-[#E1A940] rounded-lg flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">Document Analysis</h3>
                                <p className="text-xs text-gray-500">Processing...</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="h-16 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-50"></div>
                                <span className="text-xs text-gray-500 font-medium">Analyzing content...</span>
                            </div>

                            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                                <div className="text-xs text-indigo-700 font-bold mb-2">Key Insights Extracted</div>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                                        <div className="h-2 bg-indigo-200 rounded flex-1 animate-pulse"></div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="h-2 bg-purple-200 rounded flex-1 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                        <div className="h-2 bg-blue-200 rounded flex-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 6,
            category: "Communication",
            title: "Send Multilingual Messages",
            description: "Global communication capabilities with real-time translation and culturally appropriate messaging across 50+ languages.",
            icon: <Globe className="w-8 h-8" />,
            features: ["50+ Languages", "Cultural Context", "Real-time Translation"],
            gradient: "from-[#1A6262] via-[#91C499] to-[#E1A940]",
            bgGradient: "from-rose-50 to-pink-50",
            visual: (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-64 h-64">
                        {/* Central globe */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#1A6262] via-[#91C499] to-[#E1A940] rounded-full flex items-center justify-center shadow-xl">
                            <Globe className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '8s' }} />
                        </div>

                        {/* Floating language cards */}
                        {[
                            { text: "Hello", lang: "EN", color: "from-blue-50 to-blue-50", x: 80, y: 20, delay: '0s' },
                            { text: "नमस्ते", lang: "HI", color: "from-orange-50 to-orange-50", x: 120, y: 60, delay: '0.5s' },
                            { text: "Hola", lang: "ES", color: "from-green-50 to-green-50", x: 100, y: 140, delay: '1s' },
                            { text: "Bonjour", lang: "FR", color: "from-purple-50 to-purple-50", x: 40, y: 160, delay: '1.5s' },
                            { text: "こんにちは", lang: "JP", color: "from-red-50 to-red-50", x: 10, y: 100, delay: '2s' },
                            { text: "مرحبا", lang: "AR", color: "from-teal-50 to-teal-50", x: 30, y: 40, delay: '2.5s' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    left: `${item.x}px`,
                                    top: `${item.y}px`,
                                    animation: `float 3s ease-in-out infinite`,
                                    animationDelay: item.delay
                                }}
                            >
                                <div className={`bg-gradient-to-br ${item.color} rounded-lg px-3 py-2 shadow-lg text-black min-w-16 text-center`}>
                                    <div className="text-sm font-bold">{item.text}</div>
                                    <div className="text-xs opacity-80">{item.lang}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % features.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, features.length]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % features.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const goToSlide = (index: SetStateAction<number>) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const currentFeature = features[currentSlide];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
            <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px) scale(1); }
          50% { transform: translate(-50%, -50%) translateY(-8px) scale(1.02); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .feature-enter {
          animation: slideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
                        AI-Powered Business Solutions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform your business operations with intelligent automation and seamless integrations
                    </p>
                </div>

                {/* Main Carousel Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative backdrop-blur-sm border border-white/20">
                    <div className="relative h-[600px]">
                        {/* Background gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.bgGradient} opacity-30 transition-all duration-700`}></div>

                        {/* Content Grid */}
                        <div className="relative grid grid-cols-1 lg:grid-cols-2 h-full">
                            {/* Left Content Panel */}
                            <div className="p-12 flex flex-col justify-center relative z-10">
                                <div className="feature-enter">
                                    {/* Category Badge */}
                                    <div className="inline-flex items-center space-x-2 mb-6">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${currentFeature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                            {currentFeature.icon}
                                        </div>
                                        <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                            {currentFeature.category}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                        {currentFeature.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        {currentFeature.description}
                                    </p>
                                    <div className="space-y-4 mb-10">
                                        {currentFeature.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-3 feature-enter"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <div className={`w-6 h-6 bg-gradient-to-br rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                                    <CircleCheckBig className="w-6 h-6 text-teal-500" />
                                                </div>
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className={`bg-gradient-to-r ${currentFeature.gradient} text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 group`}>
                                        <span>Explore Feature</span>
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className={`bg-gradient-to-br ${currentFeature.bgGradient} p-12 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
                                    <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
                                </div>
                                <div className="relative z-10">
                                    {currentFeature.visual}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className="backdrop-blur-sm border-t  p-6">
                        <div className="flex items-center justify-between">
                            {/* Navigation Buttons */}
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={prevSlide}
                                    disabled={isTransitioning}
                                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    disabled={isTransitioning}
                                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>

                            {/* Center: Slide Indicators */}
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors mr-4"
                                >
                                    {isPlaying ?
                                        <Pause className="w-5 h-5 text-gray-700" /> :
                                        <Play className="w-5 h-5 text-gray-700" />
                                    }
                                </button>

                                {features.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        disabled={isTransitioning}
                                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                                            ? `w-8 h-4 bg-gradient-to-r ${currentFeature.gradient}`
                                            : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
                                            } disabled:cursor-not-allowed`}
                                    />
                                ))}
                            </div>

                            {/* Progress Indicator */}
                            <div className="text-sm text-gray-500 font-medium">
                                {currentSlide + 1} / {features.length}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default FeatureCarousel;