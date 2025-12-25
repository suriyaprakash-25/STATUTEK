import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { ShieldCheck, FileText, Laptop, Rocket, PieChart, Users, Globe, PenTool } from 'lucide-react';

const Services = () => {
    const allServices = [
        {
            category: "Compliance & Legal",
            items: [
                {
                    icon: ShieldCheck,
                    title: "Company Registration",
                    description: "Pvt Ltd, LLP, OPC, and Partnership firm registration with end-to-end support."
                },
                {
                    icon: FileText,
                    title: "GST & Filing",
                    description: "Monthly GST filings, income tax returns, and annual compliance handling."
                },
                {
                    icon: Users,
                    title: "MSME & Startup India",
                    description: "Get recognized as a startup and avail government benefits and subsidies."
                },
                {
                    icon: PieChart,
                    title: "Trademark & IP",
                    description: "Protect your brand identity with our trademark search and filing services."
                }
            ]
        },
        {
            category: "Digital & Technology",
            items: [
                {
                    icon: Laptop,
                    title: "Web Development",
                    description: "High-performance React/Next.js websites tailored for conversions."
                },
                {
                    icon: Globe,
                    title: "SaaS Development",
                    description: "Scalable web applications and software solutions for your business needs."
                },
                {
                    icon: PenTool,
                    title: "Logo & Branding",
                    description: "Professional logo design, brand guidelines, and visual identity creation."
                },
                {
                    icon: Rocket,
                    title: "Digital Marketing",
                    description: "SEO, social media management, and content strategy to grow your reach."
                }
            ]
        }
    ];

    return (
        <>
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                    Comprehensive solutions for every stage of your business journey.
                </p>
            </div>

            <Section>
                {allServices.map((cat, groupIdx) => (
                    <div key={groupIdx} className="mb-20 last:mb-0">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b pb-4">{cat.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {cat.items.map((service, idx) => (
                                <ServiceCard key={idx} {...service} delay={idx * 0.1} />
                            ))}
                        </div>
                    </div>
                ))}
            </Section>
        </>
    );
};

export default Services;
