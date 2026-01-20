'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useCurrentResearchStyles } from '../styles/currentResearchStyles';

const CurrentResearch = ({ id }) => {
    const classes = useCurrentResearchStyles();
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
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <h2 className={classes.title}>Current Research Directions</h2>
                    <p className={classes.subtitle}>
                        Ongoing research is expanding our understanding of tubulinopathies, from basic mechanisms to clinical applications.
                    </p>
                </div>

                <div className={classes.list}>
                    {researchAreas.map((area, index) => (
                        <div key={index} className={classes.card}>
                            <button
                                onClick={() => toggleExpanded(index)}
                                className={classes.button}
                            >
                                <h3 className={classes.buttonTitle}>{area.title}</h3>
                                {expandedIndex === index ? (
                                    <ChevronUp className={classes.icon} />
                                ) : (
                                    <ChevronDown className={classes.iconCollapsed} />
                                )}
                            </button>
                            {expandedIndex === index && (
                                <div className={classes.content}>
                                    <p className={classes.description}>{area.description}</p>
                                    {area.links && area.links.length > 0 && (
                                        <div className={classes.linksSection}>
                                            <h4 className={classes.linksTitle}>Research Links:</h4>
                                            <ul className={classes.linksList}>
                                                {area.links.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={classes.link}
                                                        >
                                                            <ExternalLink className={classes.linkIcon} />
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
