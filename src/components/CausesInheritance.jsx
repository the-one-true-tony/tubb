import { useCausesInheritanceStyles } from '../styles/causesInheritanceStyles';

const CausesInheritance = ({ id }) => {
    const classes = useCausesInheritanceStyles();
    
    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Causes</h2>
                
                <div className={classes.contentWrapper}>
                    {/* What Causes Tubulinopathies */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>What Causes Tubulinopathies?</h3>
                        <p className={classes.paragraph}>
                            Tubulinopathies are caused by mutations in genes that encode tubulin proteins—essential building blocks for microtubules, the cellular scaffolding system critical for many biological processes.
                        </p>
                        <div className={classes.contentSection}>
                            <p className={classes.paragraphSmall}>
                                <strong className={classes.strong}>The Tubulin Protein Family:</strong> Tubulins are a family of proteins that form microtubules—hollow cylindrical structures that serve as the cell's internal framework. These proteins come in several types:
                            </p>
                            <ul className={classes.list}>
                                <li className={classes.listItem}><strong className={classes.strong}>α-tubulins</strong> (e.g., TUBA1A, TUBA8) and <strong className={classes.strong}>β-tubulins</strong> (e.g., TUBB2A, TUBB2B, TUBB3, TUBB) pair together to form heterodimers.</li>
                                <li className={classes.listItem}>These heterodimers (proteins with two polypeptide chains) assemble into long microtubule polymers that provide structural support.</li>
                                <li className={classes.listItem}>Microtubules are dynamic structures that can grow and shrink, allowing cells to change shape and move.</li>
                                <li className={classes.listItem}>They serve as tracks for motor proteins (kinesin and dynein) that transport cellular cargo.</li>
                                <li className={classes.listItem}>They play crucial roles in cell division, maintaining cell shape, and intracellular transport.</li>
                            </ul>
                        </div>
                        <p className={classes.paragraphWithMargin}>
                            When mutations occur in tubulin genes, they can disrupt how these proteins assemble, interact with other proteins, or maintain microtubule stability. Most mutations are <strong className={classes.strong}>missense changes</strong>—single amino acid substitutions that subtly alter protein function but have profound effects on brain development.
                        </p>
                    </div>

                    {/* Inheritance Patterns */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>How Are Tubulinopathies Inherited?</h3>
                        <div className={classes.subsection}>
                            <div>
                                <h4 className={classes.subsectionTitle}>Autosomal Dominant Pattern</h4>
                                <p className={classes.paragraphSmall}>
                                    Tubulinopathies typically follow an <strong className={classes.strong}>autosomal dominant</strong> inheritance pattern. This means that having just one mutated copy of the affected gene is sufficient to cause the disorder. Each child of an affected parent has a 50% chance of inheriting the mutation.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>De Novo Mutations</h4>
                                <p className={classes.paragraphSmall}>
                                    The majority of tubulinopathy cases (approximately 80-90%) result from <strong className={classes.strong}>de novo (new) mutations</strong>—mutations that occur spontaneously in the sperm, egg, or early embryo. These mutations are not inherited from either parent and typically occur for the first time in the affected individual.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Mosaicism</h4>
                                <p className={classes.paragraphSmall}>
                                    In rare cases, a parent may have <strong className={classes.strong}>germline mosaicism</strong> where only some of their cells (including reproductive cells) carry the mutation. Even if the parent shows no symptoms, they can pass the mutation to their children, creating a recurrence risk for future pregnancies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Brain is Affected */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Why Does It Primarily Affect the Brain?</h3>
                        <div className={classes.subsection}>
                            <div>
                                <h4 className={classes.subsectionTitle}>High Expression During Brain Development</h4>
                                <p className={classes.paragraphSmall}>
                                    Many tubulin genes (especially TUBA1A, TUBB2B, and TUBB3) are expressed at very high levels in the developing brain, particularly during fetal and early postnatal development. These genes are essential for neurons during critical developmental windows when the brain is forming its complex structure.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Critical Roles in Brain Development</h4>
                                <p className={classes.paragraphSmall} style={{ marginBottom: '0.75rem' }}>
                                    Microtubules play indispensable roles in multiple brain development processes:
                                </p>
                                <ul className={classes.list}>
                                    <li className={classes.listItem}><strong className={classes.strong}>Neuronal Migration:</strong> Microtubules guide neurons from their birthplaces to their final destinations in the brain, forming the proper layered structure of the cortex.</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Axon Growth:</strong> They provide the structural framework for axons to extend and reach their target cells, establishing neural connections.</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Cortical Folding:</strong> They contribute to the complex folding patterns (gyri and sulci) that increase brain surface area.</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Intracellular Transport:</strong> They serve as highways for transporting essential molecules, organelles, and proteins throughout the long neuronal processes.</li>
                                    <li className={classes.listItem}><strong className={classes.strong}>Neural Circuit Assembly:</strong> They help establish the intricate wiring that forms functional brain networks.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Neurons Are Highly Dependent on Microtubules</h4>
                                <p className={classes.paragraphSmall}>
                                    Neurons are among the most structurally complex cells in the body, with extremely long processes (axons and dendrites) that can extend from millimeters to over a meter in length. This complexity makes them particularly vulnerable to disruptions in microtubule function. Any disturbance in tubulin proteins has amplified effects in neurons because they rely so heavily on microtubules for their structure, function, and development.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Region-Specific Vulnerability</h4>
                                <p className={classes.paragraphSmall}>
                                    Different brain regions express specific tubulin isotypes at varying levels. For example, certain β-tubulin variants are more abundant in the cortex, cerebellum, or brainstem. When mutations affect these highly expressed isotypes, those specific brain regions become especially vulnerable, leading to region-specific malformations like lissencephaly (smooth brain), polymicrogyria (many small folds), or cerebellar hypoplasia (reduction in brain tissue volume).
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
