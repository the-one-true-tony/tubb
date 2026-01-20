'use client'

import { motion } from 'framer-motion';
import { Brain, Activity, MessageSquare, Accessibility } from 'lucide-react';
import { useExpressionsStyles } from '../styles/expressionsStyles';

const ExpressionCard = ({ icon: Icon, title, description, delay, classes }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={classes.card}
    >
        <div className={classes.iconContainer}>
            <Icon size={20} style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
        <h3 className={classes.cardTitle}>{title}</h3>
        <p className={classes.cardDescription}>{description}</p>
    </motion.div>
);

const Expressions = ({ id }) => {
    const classes = useExpressionsStyles();
    const expressions = [
        {
            icon: MessageSquare,
            title: "Delayed Speech",
            description: "Significant delays in receptive and expressive language development are common, often requiring speech therapy interventions."
        },
        {
            icon: Accessibility,
            title: "Motor Impairments",
            description: " Challenges with mobilization, including delayed walking, ataxia, or muscle weakness, often require physical therapy."
        },
        {
            icon: Brain,
            title: "Brain Malformations",
            description: "MRI scans may reveal structural abnormalities like lissencephaly (smooth brain), microcephaly, or corpus callosum dysgenesis."
        },
        {
            icon: Activity,
            title: "Seizures & Epilepsy",
            description: "Many individuals experience seizures beginning in infancy or childhood, which can range from mild to treatment-resistant epilepsy."
        }
    ];

    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2 className={classes.title}>How It Expresses Itself</h2>
                    <p className={classes.subtitle}>
                        Tubulinopathies manifest in a spectrum of neurological and physical symptoms, varying significantly between individuals.
                    </p>
                </div>

                <div className={classes.grid}>
                    {expressions.map((exp, index) => (
                        <ExpressionCard key={index} {...exp} delay={index * 0.1} classes={classes} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expressions;
