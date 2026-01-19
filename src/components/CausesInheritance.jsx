const CausesInheritance = ({ id }) => {
    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">Causes & Inheritance</h2>
                
                <div className="space-y-6 md:space-y-8">
                    {/* What Causes Tubulinopathies */}
                    <div className="bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">What Causes Tubulinopathies?</h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                            Tubulinopathies are caused by mutations in genes that encode tubulin proteins—essential building blocks for microtubules, the cellular scaffolding system critical for many biological processes.
                        </p>
                        <div className="space-y-3">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                <strong className="text-gray-900">The Tubulin Protein Family:</strong> Tubulins are a family of proteins that form microtubules—hollow cylindrical structures that serve as the cell's internal framework. These proteins come in several types:
                            </p>
                            <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                                <li><strong>α-tubulins</strong> (e.g., TUBA1A, TUBA8) and <strong>β-tubulins</strong> (e.g., TUBB2A, TUBB2B, TUBB3, TUBB) pair together to form heterodimers</li>
                                <li>These heterodimers assemble into long microtubule polymers that provide structural support</li>
                                <li>Microtubules are dynamic structures that can grow and shrink, allowing cells to change shape and move</li>
                                <li>They serve as tracks for motor proteins (kinesin and dynein) that transport cellular cargo</li>
                                <li>They play crucial roles in cell division, maintaining cell shape, and intracellular transport</li>
                            </ul>
                        </div>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mt-3 md:mt-4">
                            When mutations occur in tubulin genes, they can disrupt how these proteins assemble, interact with other proteins, or maintain microtubule stability. Most mutations are <strong>missense changes</strong>—single amino acid substitutions that subtly alter protein function but have profound effects on brain development.
                        </p>
                    </div>

                    {/* Inheritance Patterns */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">How Are Tubulinopathies Inherited?</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Autosomal Dominant Pattern</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Tubulinopathies typically follow an <strong>autosomal dominant</strong> inheritance pattern. This means that having just one mutated copy of the affected gene is sufficient to cause the disorder. Each child of an affected parent has a 50% chance of inheriting the mutation.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">De Novo Mutations</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    The majority of tubulinopathy cases (approximately 80-90%) result from <strong>de novo mutations</strong>—mutations that occur spontaneously in the sperm, egg, or early embryo. These mutations are not inherited from either parent and typically occur for the first time in the affected individual.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Mosaicism</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    In rare cases, a parent may have <strong>germline mosaicism</strong>, where only some of their cells (including reproductive cells) carry the mutation. Even if the parent shows no symptoms, they can pass the mutation to their children, creating a recurrence risk for future pregnancies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Brain is Affected */}
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-medical-blue">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Why Does It Primarily Affect the Brain?</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">High Expression During Brain Development</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Many tubulin genes (especially TUBA1A, TUBB2B, and TUBB3) are expressed at very high levels in the developing brain, particularly during fetal and early postnatal development. These genes are essential for neurons during critical developmental windows when the brain is forming its complex structure.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Critical Roles in Brain Development</h4>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Microtubules play indispensable roles in multiple brain development processes:
                                </p>
                                <ul className="list-disc list-outside space-y-2 text-gray-700 ml-5 pl-2">
                                    <li><strong>Neuronal Migration:</strong> Microtubules guide neurons from their birthplaces to their final destinations in the brain, forming the proper layered structure of the cortex</li>
                                    <li><strong>Axon Growth:</strong> They provide the structural framework for axons to extend and reach their target cells, establishing neural connections</li>
                                    <li><strong>Cortical Folding:</strong> They contribute to the complex folding patterns (gyri and sulci) that increase brain surface area</li>
                                    <li><strong>Intracellular Transport:</strong> They serve as highways for transporting essential molecules, organelles, and proteins throughout the long neuronal processes</li>
                                    <li><strong>Neural Circuit Assembly:</strong> They help establish the intricate wiring that forms functional brain networks</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Neurons Are Highly Dependent on Microtubules</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Neurons are among the most structurally complex cells in the body, with extremely long processes (axons and dendrites) that can extend from millimeters to over a meter in length. This complexity makes them particularly vulnerable to disruptions in microtubule function. Any disturbance in tubulin proteins has amplified effects in neurons because they rely so heavily on microtubules for their structure, function, and development.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Region-Specific Vulnerability</h4>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    Different brain regions express specific tubulin isotypes at varying levels. For example, certain β-tubulin variants are more abundant in the cortex, cerebellum, or brainstem. When mutations affect these highly expressed isotypes, those specific brain regions become especially vulnerable, leading to region-specific malformations like lissencephaly (smooth brain), polymicrogyria (many small folds), or cerebellar hypoplasia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CausesInheritance;
