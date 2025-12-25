import Section from '../components/Section';

const About = () => {
    return (
        <>
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">About STATUTEK</h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto px-4">
                    Building the bridge between compliance and technology.
                </p>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            STATUTEK was born from a simple observation: Startups struggle with two main things—getting compliant and building a digital presence. Typically, they have to hire separate agencies for legal work and tech development, leading to fragmented processes and higher costs.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We decided to change that. By combining expert legal counsel with top-tier software engineering, we created a unified platform where entrepreneurs can register their company and launch their product simultaneously.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-primary">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To simplify the startup journey by providing accessible, transparent, and technology-driven compliance and development solutions.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-accent">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the most trusted partner for early-stage startups in India, enabling them to focus on innovation while we handle the rest.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default About;
