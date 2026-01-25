import { useSupportStyles } from '../styles/supportStyles';

const Support = ({ id }) => {
    const classes = useSupportStyles();
    
    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Support & Resources</h2>
                
                <div className={classes.contentWrapper}>
                    {/* Management & Treatment */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Management & Treatment</h3>
                        <p className={classes.paragraph}>
                            While there is currently <strong className={classes.strong}>no cure</strong> for tubulinopathies, treatment focuses on managing symptoms, maximizing development, and improving quality of life.
                        </p>
                        <div className={classes.subsection}>
                            <div>
                                <h4 className={classes.subsectionTitle}>Seizure Control</h4>
                                <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                                    Early and appropriate use of anti-seizure medications is critical. Frequent or uncontrolled seizures can worsen outcomes, affect feeding, and increase medical complications. A neurologist will work to find the most effective medication regimen.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Therapies</h4>
                                <ul className={classes.list}>
                                    <li className={classes.listItem}><strong className={classes.strong}>Physical Therapy:</strong> Helps with motor control, prevents contractures, maintains mobility, and improves ability to interact with the environment</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Occupational Therapy:</strong> Supports daily living skills, self-care, and fine motor tasks</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Speech Therapy:</strong> Addresses communication delays, oromotor function, swallowing issues, and supports alternative communication methods when needed</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Vision Therapy:</strong> For eye movement abnormalities, strabismus, and optic nerve issues</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Feeding & Nutrition</h4>
                                <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                                    For individuals with severe feeding difficulties, especially infants, methods may include nasogastric feeding or gastrostomy tubes to ensure adequate nutrition and reduce risks like aspiration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Multidisciplinary Care */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Multidisciplinary Care Team</h3>
                        <p className={classes.paragraph} style={{ marginBottom: '0.75rem' }}>
                            Managing a tubulinopathy typically involves a coordinated team of specialists:
                        </p>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>Pediatric neurologists</li>
                            <li className={classes.listItem}>Geneticists and genetic counselors</li>
                            <li className={classes.listItem}>Developmental pediatricians</li>
                            <li className={classes.listItem}>Physical, occupational, and speech therapists</li>
                            <li className={classes.listItem}>Nutritionists</li>
                            <li className={classes.listItem}>Ophthalmologists</li>
                            <li className={classes.listItem}>Social workers</li>
                            <li className={classes.listItem}>Neurosurgeons (when relevant)</li>
                        </ul>
                        <p className={classes.paragraph} style={{ marginTop: '1rem', marginBottom: 0 }}>
                            Coordinated care is essential for navigating the complex needs of individuals with tubulinopathies.
                        </p>
                    </div>

                    {/* Genetic Counseling */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Genetic Counseling</h3>
                        <p className={classes.paragraph} style={{ marginBottom: '0.75rem' }}>
                            Genetic counseling is recommended once a variant is identified to discuss:
                        </p>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>Inheritance pattern and what it means for the family</li>
                            <li className={classes.listItem}>Recurrence risk (often low if the variant is de novo, but important to understand)</li>
                            <li className={classes.listItem}>Options for prenatal or preimplantation genetic testing in future pregnancies</li>
                            <li className={classes.listItem}>Implications for extended family members</li>
                        </ul>
                    </div>

                    {/* Support Organizations */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Support Organizations & Resources</h3>
                        <div className={classes.subsection}>
                            <div>
                                <h4 className={classes.subsectionTitle}>Tubulinopathy Facebook Support Group</h4>
                                <p className={classes.paragraph} style={{ marginBottom: '0.5rem' }}>
                                    Join our Facebook support group to connect with families, caregivers, and individuals affected by tubulinopathies. This private community provides a safe space to share experiences, ask questions, exchange treatment tips, and find emotional support from others who understand the journey.
                                </p>
                                <a href="https://www.facebook.com/groups/1471560199598163" target="_blank" rel="noopener noreferrer" className={classes.linkWithIcon}>
                                    Join the Facebook Group →
                                </a>
                                <p className={classes.italic}>
                                    Note: This is a private group. You may need to answer a few questions to join, which helps maintain a safe and supportive environment for all members.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Tubulin Biobank</h4>
                                <p className={classes.paragraph} style={{ marginBottom: '0.5rem' }}>
                                    An international initiative collecting samples and clinical data from individuals with tubulinopathies to enable research and improve diagnostics.
                                </p>
                                <a href="https://www.tubulinbiobank.org/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                                    Visit Tubulin Biobank →
                                </a>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Patient Registries & Research</h4>
                                <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                                    Clinical trials, natural history studies, and biobanks are actively recruiting participants. Contributing to research helps improve understanding of disease progression, outcomes, and potential future therapies.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Other Rare Disease Communities</h4>
                                <p className={classes.paragraph} style={{ marginBottom: '0.5rem' }}>
                                    Additional resources and communities for support:
                                </p>
                                <ul className={classes.list} style={{ gap: '0.25rem' }}>
                                    <li className={classes.listItem}>Rare disease organizations (NORD, Global Genes)</li>
                                    <li className={classes.listItem}>Epilepsy Foundation (for seizure-related support)</li>
                                    <li className={classes.listItem}>Other online support groups and social media communities</li>
                                    <li className={classes.listItem}>Local rare disease networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Finding Care */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Finding Specialized Care</h3>
                        <p className={classes.paragraph} style={{ marginBottom: '0.75rem' }}>
                            If you or a loved one has been diagnosed with a tubulinopathy, consider:
                        </p>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>Seeking care at a medical center with expertise in rare genetic disorders and neurodevelopmental conditions</li>
                            <li className={classes.listItem}>Consulting with a geneticist or genetic counselor for comprehensive evaluation and family planning guidance</li>
                            <li className={classes.listItem}>Working with a pediatric neurologist experienced in managing complex neurological conditions</li>
                            <li className={classes.listItem}>Accessing the NIH Genetic Testing Registry for information on available genetic tests</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
