'use client'

import { motion } from 'framer-motion';
import { useHeroStyles } from '../styles/heroStyles';

const Hero = ({ id }) => {
    const classes = useHeroStyles();
    
    return (
        <section id={id} className={`hero-section ${classes.section}`}>
            <div className={`hero-overlay ${classes.overlay}`}></div>
            <div className={`hero-container ${classes.container}`}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`hero-title ${classes.title}`}
                >
                    Understanding Tubulinopathy
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className={`hero-subtitle ${classes.subtitle}`}
                >
                    A group of rare genetic disorders affecting the formation and function of microtubules, essential for brain development and cellular transport.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
