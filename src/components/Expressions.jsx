import { motion } from 'framer-motion';
import { Brain, Activity, MessageSquare, Accessibility } from 'lucide-react';

const ExpressionCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
    >
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4 text-medical-blue">
            <Icon size={20} className="md:w-6 md:h-6" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const Expressions = ({ id }) => {
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
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">How It Expresses Itself</h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
                        Tubulinopathies manifest in a spectrum of neurological and physical symptoms, varying significantly between individuals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {expressions.map((exp, index) => (
                        <ExpressionCard key={index} {...exp} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expressions;
