
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-6">
    <img 
        src={logo} 
        alt="STATUTEK Logo" 
        className="h-16 w-auto object-contain brightness-0 invert transform scale-[1.8] -translate-y-4 origin-left" 
    />
    </Link>
                <p className="text-gray-400 leading-relaxed mb-5">
                            Compliance meets technology. We help startups and MSMEs streamline legal registrations, documentation, and digital presence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Services', 'How It Works', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/ ${item.toLowerCase().replace(/\s+/g, '-')} `}
                                        className="text-gray-400 hover:text-accent transition-colors block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            {['Company Registration', 'GST & MSME', 'Logo Design', 'Web Development'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-gray-400 hover:text-accent transition-colors block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin size={20} className="shrink-0 text-accent mt-1" />
                                <span>Kinathukidavu<br />Coimbatore, India 641202</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone size={20} className="shrink-0 text-accent" />
                                <span>+91 6383191041</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail size={20} className="shrink-0 text-accent" />
                                <span>statutekhelp@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} STATUTEK. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
