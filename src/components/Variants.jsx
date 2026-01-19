const Variants = ({ id }) => {
    const variants = [
        { name: "TUBA1A", desc: "The most common variant (~42-43% of cases), mutations here are a major cause of lissencephaly and other brain malformations." },
        { name: "TUBB2B", desc: "Second most common variant (~17% of cases), often associated with polymicrogyria and other cortical dysplasias." },
        { name: "TUBB3", desc: "Third most common variant (~10-11% of cases), linked to ocular motility disorders and specific malformations of cortical development." },
        { name: "TUBB2A", desc: "Rare variant (fewer than 30 reported cases), frequently linked to simplified gyral patterns and cortical malformations." },
        { name: "TUBB", desc: "Can lead to microcephaly and structural brain abnormalities." },
        { name: "TUBA8", desc: "Rare variant associated with polymicrogyria." },
    ];

    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10 text-center">Genetic Variants</h2>
                <div className="space-y-3 md:space-y-4">
                    {variants.map((variant, index) => (
                        <div key={index} className="flex flex-col md:flex-row md:items-center bg-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-medical-blue">
                            <span className="text-xl md:text-2xl font-black text-medical-blue w-28 md:w-32 shrink-0 mb-2 md:mb-0">{variant.name}</span>
                            <p className="text-sm md:text-lg text-gray-700">{variant.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-6 md:mt-8 text-center text-xs md:text-sm text-gray-500 italic">
                    *There are many other tubulin gene variants, each with unique phenotypic spectrums.
                </p>
            </div>
        </section>
    );
};

export default Variants;
