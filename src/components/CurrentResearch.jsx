'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const CurrentResearch = ({ id }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const researchAreas = [
        {
            title: "Phenotypic Spectrum Expansion (2025)",
            description: "Recent clinical and imaging studies are expanding the phenotypic spectrum of tubulinopathies. Research has found that milder imaging phenotypes and relatively attenuated neurological symptoms (including familial inheritance) are more common than previously thought, changing our understanding of disease severity.",
            links: [
                { text: "Attenuated Clinical Forms of Tubulinopathies (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40614697/" }
            ]
        },
        {
            title: "Genotype-Phenotype Correlations (2020-2025)",
            description: "Large cohort studies are working to map how specific gene variants correlate with clinical outcomes. Researchers are identifying novel variants and establishing connections between mutation types and symptom severity, which helps improve genetic counseling and prognosis.",
            links: [
                { text: "Natural history and quantitative analysis (2020)", url: "https://pubmed.ncbi.nlm.nih.gov/33082561/" },
                { text: "Expanding genetic and clinical spectra of β-tubulinopathies: A Korean study (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/41152456/" }
            ]
        },
        {
            title: "Mechanistic Understanding (2022-2025)",
            description: "Scientists are investigating how tubulin mutations affect microtubule functions—including GTP-binding, stability of heterodimers, and interactions with motor proteins. Over 100 mutations have been documented in TUBA1A, TUBB2B, and TUBB3, with ongoing research into their functional consequences.",
            links: [
                { text: "Tubulinopathy mechanisms review (2022)", url: "https://pubmed.ncbi.nlm.nih.gov/35915025/" },
                { text: "Ciliopathy overlap and microtubule disruption (2025)", url: "https://www.nature.com/articles/s41467-025-65634-x" }
            ]
        },
        {
            title: "Animal and Cellular Models (2021-2024)",
            description: "Researchers are using models like zebrafish and cell cultures to understand disease mechanisms. Recent work has shown that tubulin variants can disrupt neurogenesis and affect signaling pathways, providing insights into potential therapeutic targets.",
            links: [
                { text: "Zebrafish TUBG1 model study (2024)", url: "https://pubmed.ncbi.nlm.nih.gov/39215931/" },
                { text: "MRI & pathological studies in taiep rat (2021)", url: "https://pubmed.ncbi.nlm.nih.gov/34335454/" }
            ]
        },
        {
            title: "Improved Prenatal Diagnostics (2022-2025)",
            description: "Multicenter studies are defining prenatal imaging findings tied to specific gene variants. Features like ventriculomegaly, absence of brain structures, and cerebellar hypoplasia are being catalogued to help clinicians identify which imaging signs should prompt genetic sequencing.",
            links: [
                { text: "Prenatal diagnosis study (2022)", url: "https://pubmed.ncbi.nlm.nih.gov/36484554/" },
                { text: "Prenatal neurosonographic features case report (2025)", url: "https://karger.com/fdt/article-abstract/doi/10.1159/000549349/938350/Prenatal-Diagnosis-of-Tubulinopathy-Case-Report-of" }
            ]
        },
        {
            title: "Biobanks and Resources (Ongoing)",
            description: "Projects like the Tubulin Biobank are collecting samples, clinical data, and sequences from affected individuals and families. This infrastructure supports both research and diagnostic improvements, creating valuable resources for the scientific community.",
            links: [
                { text: "Tubulin Biobank", url: "https://www.tubulinbiobank.org/" }
            ]
        },
        {
            title: "Sensory Phenotypes & Non-Brain Manifestations (2023)",
            description: "New studies are illuminating broader effects of tubulin mutations beyond the brain—such as eye, ear, kidney, or skeletal system involvement. Novel variants in TUBB4B have been linked with hearing loss, eye abnormalities, and renal processes.",
            links: [
                { text: "Novel TUBB4B tubulinopathy characterization (2023)", url: "https://pubmed.ncbi.nlm.nih.gov/37448631/" }
            ]
        },
        {
            title: "Therapeutic Research (Ongoing)",
            description: "While there are currently no gene therapies for tubulinopathies in clinical trials, research is progressing in functional studies of specific variants, improved imaging biomarkers, and genetic counseling interventions informed by new findings about inheritance patterns and phenotypic variability.",
            links: []
        }
    ];

    const toggleExpanded = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Current Research Directions</h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
                        Ongoing research is expanding our understanding of tubulinopathies, from basic mechanisms to clinical applications.
                    </p>
                </div>

                <div className="space-y-3">
                    {researchAreas.map((area, index) => (
                        <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <button
                                onClick={() => toggleExpanded(index)}
                                className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4 break-words">{area.title}</h3>
                                {expandedIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-medical-blue shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                )}
                            </button>
                            {expandedIndex === index && (
                                <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 border-t border-gray-100">
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">{area.description}</p>
                                    {area.links && area.links.length > 0 && (
                                        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                                            <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Research Links:</h4>
                                            <ul className="space-y-2">
                                                {area.links.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-medical-blue hover:text-blue-700 hover:underline flex items-center gap-2 text-xs md:text-sm break-words"
                                                        >
                                                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
                                                            <span>{link.text}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentResearch;
