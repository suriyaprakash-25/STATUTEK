import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Laptop, FileText, Rocket, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const services = [
        {
            icon: FileText,
            title: "Compliance & Documentation",
            description: "Seamless handling of legal documentation, annual filings, and statutory requirements for your business."
        },
        {
            icon: ShieldCheck,
            title: "Registration Services",
            description: "Company incorporation, GST registration, MSME enrollment, and trademark filing made easy."
        },
        {
            icon: Laptop,
            title: "Tech Development",
            description: "Custom website development, SaaS solutions, and digital transformation for modern startups."
        },
        {
            icon: Rocket,
            title: "Branding & Design",
            description: "Logo design, brand identity, and UI/UX services to give your startup a premium look."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary pt-20 pb-32 lg:pt-32 lg:pb-40">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 md:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Compliance Meets <span className="text-accent block sm:inline">Technology</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                            Helping startups and MSMEs stay compliant while scaling digitally.
                            Your trusted partner for legal, registration, and tech solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                            <Link
                                to="/services"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-primary font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/20"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <Section className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything Your Startup Needs</h2>
                    <p className="text-gray-600 text-lg">One-stop solution for compliance, design, and technology.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} delay={index * 0.1} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/services" className="text-primary font-semibold hover:text-accent inline-flex items-center text-lg">
                        View All Services <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </Section>

            {/* Why STATUTEK */}
            <section className="bg-slate-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose STATUTEK?</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We combine deep legal expertise with modern technology to deliver faster, more reliable, and cost-effective solutions for your business.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Trust-Driven", desc: "Transparent processes with no hidden costs." },
                                    { title: "Tech-Enabled", desc: "Digital-first approach for speed and accuracy." },
                                    { title: "Startup Focused", desc: "Solutions tailored for early-stage ventures." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="shrink-0 mt-1">
                                            <CheckCircle className="text-accent" size={24} />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                alt="Team working"
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-primary py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
                    <p className="text-gray-300 text-lg mb-10">
                        Join hundreds of startups who trust STATUTEK for their compliance and tech needs.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-5 rounded-full bg-accent text-primary font-bold text-xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/20"
                    >
                        Let's Talk
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
