import { useVariantsStyles } from '../styles/variantsStyles';

const Variants = ({ id }) => {
    const classes = useVariantsStyles();
    const variants = [
        { name: "TUBA1A", desc: "The most common variant (~42-43% of cases), mutations here are a major cause of lissencephaly and other brain malformations." },
        { name: "TUBB2B", desc: "Second most common variant (~17% of cases), often associated with polymicrogyria and other cortical dysplasias." },
        { name: "TUBB3", desc: "Third most common variant (~10-11% of cases), linked to ocular motility disorders and specific malformations of cortical development." },
        { name: "TUBB2A", desc: "Rare variant (fewer than 30 reported cases), frequently linked to simplified gyral patterns and cortical malformations." },
        { name: "TUBB", desc: "Can lead to microcephaly and structural brain abnormalities." },
        { name: "TUBA8", desc: "Rare variant associated with polymicrogyria." },
    ];

    return (
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Genetic Variants</h2>
                <div className={classes.variantsList}>
                    {variants.map((variant, index) => (
                        <div key={index} className={classes.variantCard}>
                            <span className={classes.variantName}>{variant.name}</span>
                            <p className={classes.variantDesc}>{variant.desc}</p>
                        </div>
                    ))}
                </div>
                <p className={classes.note}>
                    *There are many other tubulin gene variants, each with unique phenotypic spectrums.
                </p>
            </div>
        </section>
    );
};

export default Variants;
