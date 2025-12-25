import Section from '../components/Section';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Consultation",
            description: "We start by understanding your business needs. You book a free consultation, and our experts analyze your requirements—whether it's company registration or a new website."
        },
        {
            number: "02",
            title: "Documentation & Planning",
            description: "For legal, we collect necessary documents securely. For tech, we create a roadmap and wireframes. We ensure everything is transparent and organized."
        },
        {
            number: "03",
            title: "Execution",
            description: "Our teams get to work. Legal experts file your applications, while developers write clean code. We keep you updated at every milestone."
        },
        {
            number: "04",
            title: "Delivery & Support",
            description: "You receive your registration certificate or a live website. But we don't stop there—we offer post-service support to help you scale smoothly."
        }
    ];

    return (
        <>
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">How It Works</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                    A simple, transparent process designed for your convenience.
                </p>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Circle Number */}
                                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-accent shadow-xl z-10 shrink-0 my-4 md:my-0">
                                    <span className="text-xl font-bold text-primary">{step.number}</span>
                                </div>

                                {/* Spacer for other side */}
                                <div className="w-full md:w-1/2 p-4 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
};

export default HowItWorks;
