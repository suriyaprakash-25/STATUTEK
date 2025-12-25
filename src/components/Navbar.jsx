import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <div className="flex justify-between items-center h-24"> */}
             <div className="flex justify-between items-center py-2 relative">
    {/* Container for the Logo to keep its place in the flex row */}
    <div className="w-[150px] h-[7.5rem] flex items-center"> 
        <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-4">                 
            <img 
                src={logo} 
                alt="STATUTEK Logo" 
                className="h-[14rem] w-auto object-contain max-w-none"
            />
        </Link>
    </div>
    
    {/* Other Nav Items */}
                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 items-center">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path) ? 'text-accent' : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all transform hover:-translate-y-0.5"
                        >
                            Talk to an Expert
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive(link.path)
                                        ? 'bg-primary/5 text-primary'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-3 rounded-lg bg-primary text-white font-semibold"
                                >
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
