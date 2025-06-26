import { Mail, Phone, Building, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Left Section - Logo and Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                            <div className="w-10 h-10 bg-[linear-gradient(to_right,_#1A6262_0%,_#4FA9A9_60%,_#D0ECEC_100%)] rounded-xl flex items-center justify-center shadow-lg">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                        </div>
                            <h2 className="text-2xl font-bold bg-[linear-gradient(to_right,_#1A6262_0%,_#4FA9A9_60%,_#D0ECEC_100%)] bg-clip-text text-transparent">SniperThink</h2>
                        </div>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Intelligent AI agents that understand your workflows, data, and tools — enabling 24/7 business support through chat and voice.
                        </p>

                        {/* Contact Icons */}
                        <div className="flex gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <Mail className="w-5 h-5 text-gray-300" />
                            </div>
                            <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <Phone className="w-5 h-5 text-gray-300" />
                            </div>
                            <div className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                                <Building className="w-5 h-5 text-gray-300" />
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Product */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Product</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Chat Agents
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Calling Agents
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section - Company */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Copyright and Privacy */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 SniperThink. All rights reserved.
                    </p>
                    <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}