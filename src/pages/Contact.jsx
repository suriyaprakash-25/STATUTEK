import { useState, useRef } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setIsSubmitting(false);
                    setSubmitted(true);
                    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                    setTimeout(() => setSubmitted(false), 5000);
                },
                (err) => {
                    setIsSubmitting(false);
                    console.error('FAILED...', err);
                    if (err.text?.includes("insufficient authentication scopes")) {
                        setError('Configuration Error: Please reconnect your Gmail private service in the EmailJS dashboard and grant all permissions.');
                    } else {
                        setError('Failed to send message: ' + (err.text || 'Please try again later.'));
                    }
                },
            );
    };

    return (
        <>
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                    Have a project in mind or need compliance assistance? We're here to help.
                </p>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-slate-800">Office Location</h4>
                                    <p className="text-gray-600">123 Startup Hub, Tech Park, Bangalore, India 560001</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                                    <Mail size={24} />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-slate-800">Email Us</h4>
                                    <p className="text-gray-600">hello@statutek.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 text-primary">
                                    <Phone size={24} />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-slate-800">Call Us</h4>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                                <p className="text-gray-600">Thank you for reaching out. We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center">
                                        <AlertCircle size={20} className="mr-2" />
                                        {error}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="+91 90000 00000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="compliance">Compliance & Registration</option>
                                            <option value="webdev">Website Development</option>
                                            <option value="branding">Branding & Logo</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Tell us about your project or requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg disabled:opacity-70 flex justify-center items-center"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    {!isSubmitting && <Send size={20} className="ml-2" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
