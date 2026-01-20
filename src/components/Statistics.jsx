import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const dataExpressions = [
    { name: 'Cortical Malformations', value: 99 },
    { name: 'Global Developmental Delay', value: 98 },
    { name: 'Basal Ganglia Anomalies', value: 98 },
    { name: 'Corpus Callosum Anomalies', value: 96 },
    { name: 'Cerebellar Vermis Hypoplasia', value: 94 },
    { name: 'Delayed Speech', value: 85 },
    { name: 'Motor Issues', value: 78 },
    { name: 'Hippocampal Anomalies', value: 78 },
    { name: 'Microcephaly', value: 76 },
    { name: 'Seizures', value: 71 },
    { name: 'Spasticity', value: 62 },
    { name: 'Eye Abnormalities', value: 30 },
];

const dataImpact = [
    { name: 'Severely Affected', value: 40 },
    { name: 'Moderately Affected', value: 45 },
    { name: 'Mildly Affected', value: 15 },
];

// Seizure statistics data
const seizureOnsetAge = [
    { age: 'Birth-6 months', percentage: 35, label: '0-6 months' },
    { age: '6-12 months', percentage: 28, label: '6-12 months' },
    { age: '1-3 years', percentage: 22, label: '1-3 years' },
    { age: '3-5 years', percentage: 10, label: '3-5 years' },
    { age: '5+ years', percentage: 5, label: '5+ years' },
];

const COLORS = ['#005b96', '#0088FE', '#00C49F'];

const Statistics = ({ id }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id={id} className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Statistical Breakdown</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Expression Frequency Chart */}
                    <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg overflow-hidden">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 text-center">Frequency of Expressions*</h3>
                        
                        {/* Mobile: Pie Charts Grid */}
                        {isMobile ? (
                            <div className="grid grid-cols-2 gap-4">
                                {dataExpressions.map((item, index) => {
                                    const pieData = [
                                        { name: 'Affected', value: item.value, fill: '#005b96' },
                                        { name: 'Not Affected', value: 100 - item.value, fill: '#e5e7eb' }
                                    ];
                                    return (
                                        <div key={index} className="flex flex-col items-center">
                                            <div className="h-32 w-full min-w-0 min-h-[128px]">
                                                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={128}>
                                                    <PieChart>
                                                        <Pie
                                                            data={pieData}
                                                            cx="50%"
                                                            cy="50%"
                                                            innerRadius={25}
                                                            outerRadius={45}
                                                            dataKey="value"
                                                            startAngle={90}
                                                            endAngle={-270}
                                                        >
                                                            {pieData.map((entry, idx) => (
                                                                <Cell key={`cell-${idx}`} fill={entry.fill} />
                                                            ))}
                                                        </Pie>
                                                        <Tooltip />
                                                    </PieChart>
                                                </ResponsiveContainer>
                                            </div>
                                            <p className="text-xs font-semibold text-gray-900 mt-2 text-center leading-tight">{item.name}</p>
                                            <p className="text-sm font-bold text-medical-blue mt-1">{item.value}%</p>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Desktop: Bar Chart */
                            <div className="h-[500px] w-full min-w-0 min-h-[500px]">
                                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={500}>
                                    <BarChart 
                                        data={dataExpressions} 
                                        layout="vertical" 
                                        margin={{ 
                                            top: 5, 
                                            right: 30, 
                                            left: 120, 
                                            bottom: 5 
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                                        <XAxis type="number" unit="%" />
                                        <YAxis 
                                            type="category" 
                                            dataKey="name" 
                                            width={110}
                                            tick={{ fontSize: 10 }} 
                                        />
                                        <Tooltip cursor={{ fill: '#f3f4f6' }} />
                                        <Bar dataKey="value" fill="#005b96" radius={[0, 4, 4, 0]} name="Percentage Affected" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                        
                        <p className="text-center text-xs md:text-sm text-gray-500 mt-4">*Illustrative data based on general observation</p>
                    </div>

                    {/* Impact/Severity Chart */}
                    <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 text-center">Severity Distribution</h3>
                        <div className="h-80 w-full min-w-0 min-h-[320px]">
                            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={320}>
                                <PieChart>
                                    <Pie
                                        data={dataImpact}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label
                                    >
                                        {dataImpact.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4">*Estimated breakdown of severity</p>
                    </div>

                </div>

                {/* Seizure Statistics Section */}
                <div className="mt-12 md:mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Overall Likelihood */}
                        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 text-center">Overall Likelihood of Seizures</h4>
                            <div className="flex flex-col items-center justify-center min-h-[400px] py-4">
                                <div className="relative w-full max-w-[280px] h-[280px] mb-6 min-w-0 min-h-[280px]">
                                    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={280}>
                                        <PieChart>
                                            <Pie
                                                data={[
                                                    { name: 'With Seizures', value: 71, fill: '#6366f1' },
                                                    { name: 'Without Seizures', value: 29, fill: '#e5e7eb' }
                                                ]}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={70}
                                                outerRadius={120}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={-270}
                                            >
                                                <Cell fill="#6366f1" />
                                                <Cell fill="#e5e7eb" />
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">71%</p>
                                    <p className="text-sm md:text-base text-gray-600">of individuals with tubulinopathy experience seizures</p>
                                </div>
                            </div>
                        </div>

                        {/* Age of Onset */}
                        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg">
                            <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800 text-center">Age of Seizure Onset</h4>
                            <div className="h-64 w-full min-w-0 min-h-[256px]">
                                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={256}>
                                    <BarChart 
                                        data={seizureOnsetAge}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis 
                                            dataKey="label" 
                                            angle={-45}
                                            textAnchor="end"
                                            height={80}
                                            tick={{ fontSize: 10 }}
                                        />
                                        <YAxis unit="%" />
                                        <Tooltip 
                                            formatter={(value) => `${value}%`}
                                            labelFormatter={(label) => `Age: ${label}`}
                                        />
                                        <Bar dataKey="percentage" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Percentage" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-sm font-semibold text-gray-700">Key Findings:</p>
                                <ul className="text-xs md:text-sm text-gray-600 space-y-1 ml-4 list-disc">
                                    <li><strong>63%</strong> of seizures begin in the first year of life</li>
                                    <li><strong>85%</strong> of seizures begin before age 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Statistics;
