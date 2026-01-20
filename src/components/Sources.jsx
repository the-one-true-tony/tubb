import { useSourcesStyles } from '../styles/sourcesStyles';

const Sources = ({ id }) => {
    const classes = useSourcesStyles();
    
    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Sources & Further Reading</h2>
                <div className={classes.grid}>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>PubMed Central - Tubulinopathy Variant Frequency Study</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/24860126/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Wide spectrum of tubulinopathies: A study of 40 patients
                        </a>
                        <p className={classes.description}>Comprehensive study on variant frequencies: TUBA1A (~42-43%), TUBB2B (~17%), TUBB3 (~10-11%), and other tubulinopathy variants.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Tubulin Biobank</h4>
                        <a href="https://www.tubulinbiobank.org/tubulinopathies/tuba1a/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Tubulinopathy Gene Variants Database
                        </a>
                        <p className={classes.description}>Comprehensive database of tubulin gene variants, including over 85 variants reported for TUBA1A and over 40 variants for TUBB2B.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Phenotypic Spectrum Expansion (2025)</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/40614697/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Attenuated Clinical Forms of Tubulinopathies in Children and Adults: A Series of 24 Individuals
                        </a>
                        <p className={classes.description}>Study describing milder imaging phenotypes and attenuated neurological symptoms, including familial inheritance patterns.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Genotype-Phenotype Correlations</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33082561/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Natural history and quantitative analysis (2020)
                        </a>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/41152456/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Expanding genetic and clinical spectra of β-tubulinopathies: A Korean study (2025)
                        </a>
                        <p className={classes.description}>Large cohort studies mapping gene variants to clinical outcomes and identifying novel variants.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Mechanistic Understanding</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/35915025/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Tubulinopathy mechanisms review (2022)
                        </a>
                        <a href="https://www.nature.com/articles/s41467-025-65634-x" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Ciliopathy overlap and microtubule disruption (2025)
                        </a>
                        <p className={classes.description}>Research on how tubulin mutations affect microtubule functions and interactions.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Animal and Cellular Models</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/39215931/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Zebrafish TUBG1 model study (2024)
                        </a>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/34335454/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            MRI & pathological studies in taiep rat (2021)
                        </a>
                        <p className={classes.description}>Studies using animal models to understand disease mechanisms and neurogenesis.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Prenatal Diagnostics</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/36484554/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Prenatal diagnosis study (2022)
                        </a>
                        <a href="https://karger.com/fdt/article-abstract/doi/10.1159/000549349/938350/Prenatal-Diagnosis-of-Tubulinopathy-Case-Report-of" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Prenatal neurosonographic features case report (2025)
                        </a>
                        <p className={classes.description}>Multicenter studies defining prenatal imaging findings tied to specific gene variants.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Sensory Phenotypes & Non-Brain Manifestations (2023)</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/37448631/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Novel TUBB4B tubulinopathy characterization
                        </a>
                        <p className={classes.description}>Study on broader effects of tubulin mutations beyond the brain, including eye, ear, and kidney involvement.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Seizure Statistics & Epilepsy in Tubulinopathies</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/24860126/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Wide spectrum of tubulinopathies: A study of 40 patients
                        </a>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33082561/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Natural history and quantitative analysis (2020)
                        </a>
                        <p className={classes.description}>Studies reporting seizure prevalence (~71% of individuals), age of onset patterns, and epilepsy characteristics in tubulinopathy cohorts. Most seizures begin in infancy or early childhood.</p>
                    </div>
                    <div className={classes.card}>
                        <h4 className={classes.cardTitle}>Biobanks and Resources</h4>
                        <a href="https://www.tubulinbiobank.org/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                            Tubulin Biobank
                        </a>
                        <p className={classes.description}>International initiative collecting samples and clinical data from individuals with tubulinopathies.</p>
                    </div>
                </div>
                <p className={classes.disclaimer}>
                    Disclaimer: This website is for informational purposes only and does not constitute medical advice.
                </p>
            </div>
        </section>
    );
};

export default Sources;
