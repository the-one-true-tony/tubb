import { motion } from 'framer-motion';

const Hero = ({ id }) => {
    return (
        <section id={id} className="relative bg-gradient-to-r from-medical-blue to-blue-700 text-white py-12 md:py-24 px-4 md:px-12 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight break-words hyphens-auto"
                    style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                >
                    Understanding Tubulinopathy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base md:text-2xl font-light text-blue-100 max-w-2xl mx-auto leading-relaxed px-2 break-words hyphens-auto"
                    style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                >
                    A group of rare genetic disorders affecting the formation and function of microtubules, essential for brain development and cellular transport.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
