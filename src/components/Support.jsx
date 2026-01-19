const Support = ({ id }) => {
    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">Support & Resources</h2>
                
                <div className="space-y-6 md:space-y-8">
                    {/* Management & Treatment */}
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Management & Treatment</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                            While there is currently <strong>no cure</strong> for tubulinopathies, treatment focuses on managing symptoms, maximizing development, and improving quality of life.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Seizure Control</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Early and appropriate use of anti-seizure medications is critical. Frequent or uncontrolled seizures can worsen outcomes, affect feeding, and increase medical complications. A neurologist will work to find the most effective medication regimen.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Therapies</h4>
                                <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                                    <li><strong>Physical Therapy:</strong> Helps with motor control, prevents contractures, maintains mobility, and improves ability to interact with the environment</li>
                                    <li><strong>Occupational Therapy:</strong> Supports daily living skills, self-care, and fine motor tasks</li>
                                    <li><strong>Speech Therapy:</strong> Addresses communication delays, oromotor function, swallowing issues, and supports alternative communication methods when needed</li>
                                    <li><strong>Vision Therapy:</strong> For eye movement abnormalities, strabismus, and optic nerve issues</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Feeding & Nutrition</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    For individuals with severe feeding difficulties, especially infants, methods may include nasogastric feeding or gastrostomy tubes to ensure adequate nutrition and reduce risks like aspiration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Multidisciplinary Care */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Multidisciplinary Care Team</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3">
                            Managing a tubulinopathy typically involves a coordinated team of specialists:
                        </p>
                        <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                            <li>Pediatric neurologists</li>
                            <li>Geneticists and genetic counselors</li>
                            <li>Developmental pediatricians</li>
                            <li>Physical, occupational, and speech therapists</li>
                            <li>Nutritionists</li>
                            <li>Ophthalmologists</li>
                            <li>Social workers</li>
                            <li>Neurosurgeons (when relevant)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Coordinated care is essential for navigating the complex needs of individuals with tubulinopathies.
                        </p>
                    </div>

                    {/* Genetic Counseling */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Genetic Counseling</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3">
                            Genetic counseling is recommended once a variant is identified to discuss:
                        </p>
                        <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                            <li>Inheritance pattern and what it means for the family</li>
                            <li>Recurrence risk (often low if the variant is de novo, but important to understand)</li>
                            <li>Options for prenatal or preimplantation genetic testing in future pregnancies</li>
                            <li>Implications for extended family members</li>
                        </ul>
                    </div>

                    {/* Support Organizations */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Support Organizations & Resources</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Tubulin Biobank</h4>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    An international initiative collecting samples and clinical data from individuals with tubulinopathies to enable research and improve diagnostics.
                                </p>
                                <a href="https://www.tubulinbiobank.org/" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:underline font-semibold">
                                    Visit Tubulin Biobank →
                                </a>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Patient Registries & Research</h4>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    Clinical trials, natural history studies, and biobanks are actively recruiting participants. Contributing to research helps improve understanding of disease progression, outcomes, and potential future therapies.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Tubulinopathy Facebook Support Group</h4>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    Join our Facebook support group to connect with families, caregivers, and individuals affected by tubulinopathies. This private community provides a safe space to share experiences, ask questions, exchange treatment tips, and find emotional support from others who understand the journey.
                                </p>
                                <a href="https://www.facebook.com/groups/1471560199598163" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:underline font-semibold inline-flex items-center gap-2">
                                    Join the Facebook Group →
                                </a>
                                <p className="text-gray-600 text-sm mt-2 italic">
                                    Note: This is a private group. You may need to answer a few questions to join, which helps maintain a safe and supportive environment for all members.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Other Rare Disease Communities</h4>
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    Additional resources and communities for support:
                                </p>
                                <ul className="list-disc list-outside space-y-1 text-gray-700 ml-5 pl-2">
                                    <li>Rare disease organizations (NORD, Global Genes)</li>
                                    <li>Epilepsy Foundation (for seizure-related support)</li>
                                    <li>Other online support groups and social media communities</li>
                                    <li>Local rare disease networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Finding Care */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Finding Specialized Care</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3">
                            If you or a loved one has been diagnosed with a tubulinopathy, consider:
                        </p>
                        <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                            <li>Seeking care at a medical center with expertise in rare genetic disorders and neurodevelopmental conditions</li>
                            <li>Consulting with a geneticist or genetic counselor for comprehensive evaluation and family planning guidance</li>
                            <li>Working with a pediatric neurologist experienced in managing complex neurological conditions</li>
                            <li>Accessing the NIH Genetic Testing Registry for information on available genetic tests</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
