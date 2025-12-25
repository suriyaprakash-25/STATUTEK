import { motion } from 'framer-motion';

const Section = ({ children, className = "", id = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
