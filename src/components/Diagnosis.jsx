import { Microscope, Dna, Baby, CheckCircle2 } from 'lucide-react';
import { useDiagnosisStyles } from '../styles/diagnosisStyles';
import { theme } from '../theme';

const Diagnosis = ({ id }) => {
    const classes = useDiagnosisStyles();
    
    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Diagnosis</h2>
                
                <div className={classes.contentWrapper}>
                    {/* Screening Evolution Roadmap */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Evolution of Screening & Diagnosis</h3>
                        <div className={classes.timelineContainer}>
                            {/* Timeline line */}
                            <div className={classes.timelineLine}></div>
                            
                            {/* Timeline items */}
                            <div className={classes.timelineItems}>
                                {/* Early 2000s */}
                                <div className={classes.timelineItem}>
                                    <div className={classes.timelineIconContainer}>
                                        <div className={classes.timelineIcon}>
                                            <Microscope style={{ width: '1rem', height: '1rem', color: theme.colors.white }} />
                                        </div>
                                    </div>
                                    <div className={classes.timelineContent}>
                                        <div className={classes.timelineCard}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <span className={classes.timelineBadge}>
                                                    <Microscope className={classes.timelineBadgeIcon} />
                                                    Early 2000s
                                                </span>
                                            </div>
                                            <h4 className={classes.timelineItemTitle}>Initial Recognition</h4>
                                            <p className={classes.timelineText}>
                                                Tubulinopathies were first recognized as a distinct group of disorders. Diagnosis relied primarily on <strong className={classes.strong}>postnatal MRI</strong> showing characteristic brain malformations, followed by <strong className={classes.strong}>Sanger sequencing</strong> of individual suspected genes—a slow, one-gene-at-a-time process.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2010s */}
                                <div className={classes.timelineItem}>
                                    <div className={classes.timelineIconContainer}>
                                        <div className={classes.timelineIcon}>
                                            <Dna style={{ width: '1rem', height: '1rem', color: theme.colors.white }} />
                                        </div>
                                    </div>
                                    <div className={classes.timelineContent}>
                                        <div className={classes.timelineCard}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <span className={classes.timelineBadge}>
                                                    <Dna className={classes.timelineBadgeIcon} />
                                                    2010s
                                                </span>
                                            </div>
                                            <h4 className={classes.timelineItemTitle}>Next-Generation Sequencing Revolution</h4>
                                            <p className={classes.timelineText} style={{ marginBottom: '0.5rem' }}>
                                                The introduction of <strong className={classes.strong}>next-generation sequencing (NGS)</strong> transformed diagnosis:
                                            </p>
                                            <ul className={classes.timelineList}>
                                                <li className={classes.timelineListItem}>Multigene panels allowed testing of multiple tubulin genes simultaneously</li>
                                                <li className={classes.timelineListItem}>Whole exome sequencing (WES) became available for comprehensive testing</li>
                                                <li className={classes.timelineListItem}>Faster, more cost-effective genetic testing</li>
                                                <li className={classes.timelineListItem}>Improved ability to identify novel variants</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 2015-2020 */}
                                <div className={classes.timelineItem}>
                                    <div className={classes.timelineIconContainer}>
                                        <div className={classes.timelineIcon}>
                                            <Baby style={{ width: '1rem', height: '1rem', color: theme.colors.white }} />
                                        </div>
                                    </div>
                                    <div className={classes.timelineContent}>
                                        <div className={classes.timelineCard}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <span className={classes.timelineBadge}>
                                                    <Baby className={classes.timelineBadgeIcon} />
                                                    2015-2020
                                                </span>
                                            </div>
                                            <h4 className={classes.timelineItemTitle}>Prenatal Screening Advances</h4>
                                            <p className={classes.timelineText} style={{ marginBottom: '0.5rem' }}>
                                                Improved prenatal detection capabilities:
                                            </p>
                                            <ul className={classes.timelineList}>
                                                <li className={classes.timelineListItem}>Enhanced fetal MRI techniques for earlier detection (as early as 21-24 weeks)</li>
                                                <li className={classes.timelineListItem}>Better understanding of prenatal imaging features specific to tubulinopathies</li>
                                                <li className={classes.timelineListItem}>Integration of prenatal imaging with genetic testing</li>
                                                <li className={classes.timelineListItem}>Multicenter studies defining characteristic prenatal findings</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 2020-Present */}
                                <div className={classes.timelineItem}>
                                    <div className={classes.timelineIconContainer}>
                                        <div className={classes.timelineIcon}>
                                            <CheckCircle2 style={{ width: '1rem', height: '1rem', color: theme.colors.white }} />
                                        </div>
                                    </div>
                                    <div className={classes.timelineContent}>
                                        <div className={classes.timelineCard}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                <span className={classes.timelineBadge}>
                                                    <CheckCircle2 className={classes.timelineBadgeIcon} />
                                                    2020-Present
                                                </span>
                                            </div>
                                            <h4 className={classes.timelineItemTitle}>Current Standard of Care</h4>
                                            <p className={classes.timelineText} style={{ marginBottom: '0.5rem' }}>
                                                Modern diagnostic approach combines multiple methods:
                                            </p>
                                            <ul className={classes.timelineList}>
                                                <li className={classes.timelineListItem}><strong className={classes.strong}>Comprehensive genetic testing:</strong> Targeted panels, WES, and whole genome sequencing (WGS)</li>
                                                <li className={classes.timelineListItem}><strong className={classes.strong}>Advanced imaging:</strong> High-resolution MRI with standardized protocols</li>
                                                <li className={classes.timelineListItem}><strong className={classes.strong}>Prenatal diagnosis:</strong> Routine fetal MRI and genetic testing for at-risk pregnancies</li>
                                                <li className={classes.timelineListItem}><strong className={classes.strong}>Trio sequencing:</strong> Testing patient and both parents simultaneously for faster diagnosis</li>
                                                <li className={classes.timelineListItem}><strong className={classes.strong}>Biobanks and databases:</strong> Centralized resources for variant interpretation and research</li>
                                                <li className={classes.timelineListItem}><strong className={classes.strong}>Multidisciplinary evaluation:</strong> Coordinated approach involving neurology, genetics, and imaging specialists</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Clinical Evaluation */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Clinical Evaluation</h3>
                        <p className={classes.paragraph} style={{ marginBottom: '0.75rem' }}>
                            Diagnosis typically begins with a detailed medical history and physical examination. Healthcare providers look for key signs and symptoms including:
                        </p>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>Developmental delays (motor, cognitive, speech)</li>
                            <li className={classes.listItem}>Hypotonia (low muscle tone)</li>
                            <li className={classes.listItem}>Early-onset seizures or epilepsy</li>
                            <li className={classes.listItem}>Feeding difficulties</li>
                            <li className={classes.listItem}>Eye movement abnormalities</li>
                            <li className={classes.listItem}>Abnormal head size (microcephaly or macrocephaly)</li>
                        </ul>
                        <p className={classes.paragraphLarge}>
                            Many families first become aware of potential issues through prenatal imaging that reveals brain abnormalities.
                        </p>
                    </div>

                    {/* Neuroimaging */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Neuroimaging</h3>
                        <p className={classes.paragraphLarge} style={{ marginBottom: '0.75rem' }}>
                            <strong className={classes.strong}>Magnetic Resonance Imaging (MRI)</strong> is the most informative diagnostic tool for tubulinopathies. It reveals characteristic brain malformations:
                        </p>
                        <div className={classes.subsection}>
                            <div>
                                <h4 className={classes.subsectionTitle}>Malformations of Cortical Development:</h4>
                                <ul className={classes.list} style={{ gap: '0.25rem' }}>
                                    <li className={classes.listItem}>Lissencephaly (smooth brain surface)</li>
                                    <li className={classes.listItem}>Pachygyria (broad, simplified gyri)</li>
                                    <li className={classes.listItem}>Polymicrogyria (many small folds)</li>
                                    <li className={classes.listItem}>Dysgyria (abnormal folding patterns)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Other Characteristic Findings:</h4>
                                <ul className={classes.list} style={{ gap: '0.25rem' }}>
                                    <li className={classes.listItem}>Dysmorphic basal ganglia</li>
                                    <li className={classes.listItem}>Corpus callosum abnormalities or agenesis</li>
                                    <li className={classes.listItem}>Cerebellar vermis hypoplasia or dysplasia</li>
                                    <li className={classes.listItem}>Brainstem anomalies</li>
                                    <li className={classes.listItem}>Ventricular dilatation</li>
                                </ul>
                            </div>
                            <p className={classes.paragraph} style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                                <strong className={classes.strong}>Prenatal imaging</strong> (ultrasound or fetal MRI) can detect these abnormalities as early as 21-24 weeks gestation, prompting further genetic evaluation.
                            </p>
                        </div>
                    </div>

                    {/* Genetic Testing */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Genetic Testing</h3>
                        <p className={classes.paragraphLarge} style={{ marginBottom: '0.75rem' }}>
                            A confirmed diagnosis requires molecular genetic testing to identify the specific tubulin gene mutation. Testing options include:
                        </p>
                        <div className={classes.subsection}>
                            <div>
                                <h4 className={classes.subsectionTitle}>Targeted Gene Panels</h4>
                                <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                                    Multigene panels that test for the most common tubulinopathy genes (TUBA1A, TUBB2B, TUBB3, TUBB2A, TUBB, TUBA8, TUBG1, etc.). This is often the first-line approach when imaging suggests a tubulinopathy.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Whole Exome Sequencing (WES) or Whole Genome Sequencing (WGS)</h4>
                                <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                                    More comprehensive sequencing approaches used when targeted panels are negative or when the clinical presentation is atypical. These tests can identify novel variants in known genes or discover mutations in less common tubulin genes.
                                </p>
                            </div>
                            <div>
                                <h4 className={classes.subsectionTitle}>Parental Testing</h4>
                                <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                                    Once a variant is identified, testing both parents helps determine if the mutation is <strong className={classes.strong}>de novo</strong> (new in the child) or inherited. This information is crucial for genetic counseling and understanding recurrence risk for future pregnancies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Differential Diagnosis */}
                    <div className={classes.card}>
                        <h3 className={classes.cardTitle}>Differential Diagnosis</h3>
                        <p className={classes.paragraph} style={{ marginBottom: 0 }}>
                            Other conditions can present with similar brain malformations, including lissencephaly due to LIS1 or DCX gene mutations, other cortical malformation syndromes, or metabolic disorders. The combination of characteristic imaging features—such as cortical malformations plus basal ganglia dysmorphisms, corpus callosum defects, and cerebellar hypoplasia—can help distinguish tubulinopathies. Genetic testing provides definitive diagnosis and helps differentiate between these conditions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Diagnosis;
