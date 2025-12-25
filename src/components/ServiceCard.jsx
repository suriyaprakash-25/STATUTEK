import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <Link
                to="/contact"
                className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors"
            >
                Enquire Now <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
