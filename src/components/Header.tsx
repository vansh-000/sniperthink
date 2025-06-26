import { Menu, Target, X, Zap } from 'lucide-react';
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
        <header className="relative z-50 bg-secondary backdrop-blur-lg border-b border-white/20 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                                <Zap className="w-2 h-2 text-white" />
                            </div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            SniperThink
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#signin"
                            className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                        >
                            Sign In
                        </a>
                        <a
                            href="#trial"
                            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Start Free Trial
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {navigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-emerald-600 font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-gray-200 space-y-3">
                            <a href="#signin" className="block text-gray-700 font-medium py-2">
                                Sign In
                            </a>
                            <a
                                href="#trial"
                                className="block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header;