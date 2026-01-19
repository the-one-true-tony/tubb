import { Microscope, Dna, Baby, CheckCircle2 } from 'lucide-react';

const Diagnosis = ({ id }) => {
    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">Diagnosis</h2>
                
                <div className="space-y-6 md:space-y-8">
                    {/* Screening Evolution Roadmap */}
                    <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-medical-blue shadow-sm overflow-hidden">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Evolution of Screening & Diagnosis</h3>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-medical-blue"></div>
                            
                            {/* Timeline items */}
                            <div className="space-y-8 relative">
                                {/* Early 2000s */}
                                <div className="flex items-start gap-3 md:gap-6">
                                    <div className="hidden md:block relative z-10 shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-medical-blue border-4 border-white shadow-md flex items-center justify-center">
                                            <Microscope className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-0 md:pt-1 min-w-0">
                                        <div className="bg-blue-50 p-4 md:p-5 rounded-lg border border-blue-100">
                                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                                <span className="text-sm font-bold text-medical-blue bg-white px-3 py-1 rounded-full flex items-center gap-2">
                                                    <Microscope className="md:hidden w-3 h-3 text-medical-blue" />
                                                    Early 2000s
                                                </span>
                                            </div>
                                            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Initial Recognition</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                Tubulinopathies were first recognized as a distinct group of disorders. Diagnosis relied primarily on <strong>postnatal MRI</strong> showing characteristic brain malformations, followed by <strong>Sanger sequencing</strong> of individual suspected genes—a slow, one-gene-at-a-time process.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2010s */}
                                <div className="flex items-start gap-3 md:gap-6">
                                    <div className="hidden md:block relative z-10 shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-medical-blue border-4 border-white shadow-md flex items-center justify-center">
                                            <Dna className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-0 md:pt-1 min-w-0">
                                        <div className="bg-blue-50 p-4 md:p-5 rounded-lg border border-blue-100">
                                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                                <span className="text-sm font-bold text-medical-blue bg-white px-3 py-1 rounded-full flex items-center gap-2">
                                                    <Dna className="md:hidden w-3 h-3 text-medical-blue" />
                                                    2010s
                                                </span>
                                            </div>
                                            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Next-Generation Sequencing Revolution</h4>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                The introduction of <strong>next-generation sequencing (NGS)</strong> transformed diagnosis:
                                            </p>
                                            <ul className="list-disc list-outside space-y-1 text-gray-700 ml-5 pl-2">
                                                <li>Multigene panels allowed testing of multiple tubulin genes simultaneously</li>
                                                <li>Whole exome sequencing (WES) became available for comprehensive testing</li>
                                                <li>Faster, more cost-effective genetic testing</li>
                                                <li>Improved ability to identify novel variants</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 2015-2020 */}
                                <div className="flex items-start gap-3 md:gap-6">
                                    <div className="hidden md:block relative z-10 shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-medical-blue border-4 border-white shadow-md flex items-center justify-center">
                                            <Baby className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-0 md:pt-1 min-w-0">
                                        <div className="bg-blue-50 p-4 md:p-5 rounded-lg border border-blue-100">
                                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                                <span className="text-sm font-bold text-medical-blue bg-white px-3 py-1 rounded-full flex items-center gap-2">
                                                    <Baby className="md:hidden w-3 h-3 text-medical-blue" />
                                                    2015-2020
                                                </span>
                                            </div>
                                            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Prenatal Screening Advances</h4>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                Improved prenatal detection capabilities:
                                            </p>
                                            <ul className="list-disc list-outside space-y-1 text-gray-700 ml-5 pl-2">
                                                <li>Enhanced fetal MRI techniques for earlier detection (as early as 21-24 weeks)</li>
                                                <li>Better understanding of prenatal imaging features specific to tubulinopathies</li>
                                                <li>Integration of prenatal imaging with genetic testing</li>
                                                <li>Multicenter studies defining characteristic prenatal findings</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 2020-Present */}
                                <div className="flex items-start gap-3 md:gap-6">
                                    <div className="hidden md:block relative z-10 shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-medical-blue border-4 border-white shadow-md flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-0 md:pt-1 min-w-0">
                                        <div className="bg-blue-50 p-4 md:p-5 rounded-lg border border-blue-100">
                                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                                <span className="text-sm font-bold text-medical-blue bg-white px-3 py-1 rounded-full flex items-center gap-2">
                                                    <CheckCircle2 className="md:hidden w-3 h-3 text-medical-blue" />
                                                    2020-Present
                                                </span>
                                            </div>
                                            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Current Standard of Care</h4>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                Modern diagnostic approach combines multiple methods:
                                            </p>
                                            <ul className="list-disc list-outside space-y-1 text-gray-700 ml-5 pl-2">
                                                <li><strong>Comprehensive genetic testing:</strong> Targeted panels, WES, and whole genome sequencing (WGS)</li>
                                                <li><strong>Advanced imaging:</strong> High-resolution MRI with standardized protocols</li>
                                                <li><strong>Prenatal diagnosis:</strong> Routine fetal MRI and genetic testing for at-risk pregnancies</li>
                                                <li><strong>Trio sequencing:</strong> Testing patient and both parents simultaneously for faster diagnosis</li>
                                                <li><strong>Biobanks and databases:</strong> Centralized resources for variant interpretation and research</li>
                                                <li><strong>Multidisciplinary evaluation:</strong> Coordinated approach involving neurology, genetics, and imaging specialists</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Clinical Evaluation */}
                    <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 border-medical-blue shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Clinical Evaluation</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3">
                            Diagnosis typically begins with a detailed medical history and physical examination. Healthcare providers look for key signs and symptoms including:
                        </p>
                        <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                            <li>Developmental delays (motor, cognitive, speech)</li>
                            <li>Hypotonia (low muscle tone)</li>
                            <li>Early-onset seizures or epilepsy</li>
                            <li>Feeding difficulties</li>
                            <li>Eye movement abnormalities</li>
                            <li>Abnormal head size (microcephaly or macrocephaly)</li>
                        </ul>
                        <p className="text-gray-700 text-lg leading-relaxed mt-4">
                            Many families first become aware of potential issues through prenatal imaging that reveals brain abnormalities.
                        </p>
                    </div>

                    {/* Neuroimaging */}
                    <div className="bg-white p-6 rounded-lg border-l-4 border-medical-blue shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Neuroimaging</h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                            <strong>Magnetic Resonance Imaging (MRI)</strong> is the most informative diagnostic tool for tubulinopathies. It reveals characteristic brain malformations:
                        </p>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Malformations of Cortical Development:</h4>
                                <ul className="list-disc list-outside space-y-1 text-gray-700 ml-5 pl-2">
                                    <li>Lissencephaly (smooth brain surface)</li>
                                    <li>Pachygyria (broad, simplified gyri)</li>
                                    <li>Polymicrogyria (many small folds)</li>
                                    <li>Dysgyria (abnormal folding patterns)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Other Characteristic Findings:</h4>
                                <ul className="list-disc list-outside space-y-1 text-gray-700 ml-5 pl-2">
                                    <li>Dysmorphic basal ganglia</li>
                                    <li>Corpus callosum abnormalities or agenesis</li>
                                    <li>Cerebellar vermis hypoplasia or dysplasia</li>
                                    <li>Brainstem anomalies</li>
                                    <li>Ventricular dilatation</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mt-3">
                                <strong>Prenatal imaging</strong> (ultrasound or fetal MRI) can detect these abnormalities as early as 21-24 weeks gestation, prompting further genetic evaluation.
                            </p>
                        </div>
                    </div>

                    {/* Genetic Testing */}
                    <div className="bg-white p-6 rounded-lg border-l-4 border-medical-blue shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Genetic Testing</h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                            A confirmed diagnosis requires molecular genetic testing to identify the specific tubulin gene mutation. Testing options include:
                        </p>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Targeted Gene Panels</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Multigene panels that test for the most common tubulinopathy genes (TUBA1A, TUBB2B, TUBB3, TUBB2A, TUBB, TUBA8, TUBG1, etc.). This is often the first-line approach when imaging suggests a tubulinopathy.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Whole Exome Sequencing (WES) or Whole Genome Sequencing (WGS)</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    More comprehensive sequencing approaches used when targeted panels are negative or when the clinical presentation is atypical. These tests can identify novel variants in known genes or discover mutations in less common tubulin genes.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">Parental Testing</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Once a variant is identified, testing both parents helps determine if the mutation is <strong>de novo</strong> (new in the child) or inherited. This information is crucial for genetic counseling and understanding recurrence risk for future pregnancies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Differential Diagnosis */}
                    <div className="bg-white p-6 rounded-lg border-l-4 border-medical-blue shadow-sm">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Differential Diagnosis</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                            Other conditions can present with similar brain malformations, including lissencephaly due to LIS1 or DCX gene mutations, other cortical malformation syndromes, or metabolic disorders. The combination of characteristic imaging features—such as cortical malformations plus basal ganglia dysmorphisms, corpus callosum defects, and cerebellar hypoplasia—can help distinguish tubulinopathies. Genetic testing provides definitive diagnosis and helps differentiate between these conditions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diagnosis;
