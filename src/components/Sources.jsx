const Sources = ({ id }) => {
    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-gray-900 text-gray-300">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Sources & Further Reading</h2>
                <div className="grid gap-4 md:gap-6 text-left">
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">PubMed Central - Tubulinopathy Variant Frequency Study</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/24860126/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Wide spectrum of tubulinopathies: A study of 40 patients
                        </a>
                        <p className="text-gray-400 text-sm">Comprehensive study on variant frequencies: TUBA1A (~42-43%), TUBB2B (~17%), TUBB3 (~10-11%), and other tubulinopathy variants.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Tubulin Biobank</h4>
                        <a href="https://www.tubulinbiobank.org/tubulinopathies/tuba1a/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Tubulinopathy Gene Variants Database
                        </a>
                        <p className="text-gray-400 text-sm">Comprehensive database of tubulin gene variants, including over 85 variants reported for TUBA1A and over 40 variants for TUBB2B.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Phenotypic Spectrum Expansion (2025)</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/40614697/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Attenuated Clinical Forms of Tubulinopathies in Children and Adults: A Series of 24 Individuals
                        </a>
                        <p className="text-gray-400 text-sm">Study describing milder imaging phenotypes and attenuated neurological symptoms, including familial inheritance patterns.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Genotype-Phenotype Correlations</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/33082561/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Natural history and quantitative analysis (2020)
                        </a>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/41152456/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Expanding genetic and clinical spectra of β-tubulinopathies: A Korean study (2025)
                        </a>
                        <p className="text-gray-400 text-sm">Large cohort studies mapping gene variants to clinical outcomes and identifying novel variants.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Mechanistic Understanding</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/35915025/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Tubulinopathy mechanisms review (2022)
                        </a>
                        <a href="https://www.nature.com/articles/s41467-025-65634-x" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Ciliopathy overlap and microtubule disruption (2025)
                        </a>
                        <p className="text-gray-400 text-sm">Research on how tubulin mutations affect microtubule functions and interactions.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Animal and Cellular Models</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/39215931/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Zebrafish TUBG1 model study (2024)
                        </a>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/34335454/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            MRI & pathological studies in taiep rat (2021)
                        </a>
                        <p className="text-gray-400 text-sm">Studies using animal models to understand disease mechanisms and neurogenesis.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Prenatal Diagnostics</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/36484554/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Prenatal diagnosis study (2022)
                        </a>
                        <a href="https://karger.com/fdt/article-abstract/doi/10.1159/000549349/938350/Prenatal-Diagnosis-of-Tubulinopathy-Case-Report-of" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Prenatal neurosonographic features case report (2025)
                        </a>
                        <p className="text-gray-400 text-sm">Multicenter studies defining prenatal imaging findings tied to specific gene variants.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Sensory Phenotypes & Non-Brain Manifestations (2023)</h4>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/37448631/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Novel TUBB4B tubulinopathy characterization
                        </a>
                        <p className="text-gray-400 text-sm">Study on broader effects of tubulin mutations beyond the brain, including eye, ear, and kidney involvement.</p>
                    </div>
                    <div className="p-3 md:p-4 border border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
                        <h4 className="text-base md:text-xl font-semibold text-white mb-2">Biobanks and Resources</h4>
                        <a href="https://www.tubulinbiobank.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">
                            Tubulin Biobank
                        </a>
                        <p className="text-gray-400 text-sm">International initiative collecting samples and clinical data from individuals with tubulinopathies.</p>
                    </div>
                </div>
                <p className="mt-8 md:mt-12 text-xs md:text-sm text-gray-500">
                    Disclaimer: This website is for informational purposes only and does not constitute medical advice.
                </p>
            </div>
        </section>
    );
};

export default Sources;
