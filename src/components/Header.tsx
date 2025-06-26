import { Menu, MessageCircle, X } from 'lucide-react';
import React, { useState } from 'react';

interface NavigationItem {
    name: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <header className="z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-sm sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 sm:py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                        <div className="relative">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary via-teal-500 to-teal-300 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                                <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                            </div>
                        </div>
                        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-teal-500 to-teal-300 bg-clip-text text-transparent">
                            SniperThink
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group py-2"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
                        <a
                            href="#signin"
                            className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-3 py-2"
                        >
                            Sign In
                        </a>
                        <a
                            href="#trial"
                            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base whitespace-nowrap"
                        >
                            Start Free Trial
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>

                    {/* Menu Panel */}
                    <div className="relative bg-white shadow-xl border-t border-gray-200 max-h-screen overflow-y-auto">
                        <div className="px-4 py-6 space-y-1">
                            {/* Navigation Items */}
                            {navigationItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-lg transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}

                            {/* Auth Section */}
                            <div className="pt-6 mt-6 border-t border-gray-200 space-y-3">
                                <a
                                    href="#signin"
                                    className="block text-gray-700 hover:text-teal-600 hover:bg-gray-50 font-medium py-3 px-2 rounded-lg transition-colors duration-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign In
                                </a>
                                <a
                                    href="#trial"
                                    className="block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg transition-all duration-300 mx-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;