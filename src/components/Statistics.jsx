'use client'

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { useStatisticsStyles } from '../styles/statisticsStyles';

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
    const classes = useStatisticsStyles();
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
        <section id={id} className={classes.section}>
            <div className={classes.container}>
                <h2 className={classes.title}>Statistical Breakdown</h2>

                <div className={classes.grid}>

                    {/* Expression Frequency Chart */}
                    <div className={classes.chartCard}>
                        <h3 className={classes.chartTitle}>Frequency of Expressions*</h3>
                        
                        {/* Mobile: Pie Charts Grid */}
                        {isMobile ? (
                            <div className={classes.mobileGrid}>
                                {dataExpressions.map((item, index) => {
                                    const pieData = [
                                        { name: 'Affected', value: item.value, fill: '#005b96' },
                                        { name: 'Not Affected', value: 100 - item.value, fill: '#e5e7eb' }
                                    ];
                                    return (
                                        <div key={index} className={classes.mobileChartItem}>
                                            <div className={classes.chartContainer}>
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
                                            <p className={classes.itemName}>{item.name}</p>
                                            <p className={classes.itemValue}>{item.value}%</p>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Desktop: Bar Chart */
                            <div className={classes.chartContainerLarge}>
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
                        
                        <p className={classes.note}>*Illustrative data based on general observation</p>
                    </div>

                    {/* Impact/Severity Chart */}
                    <div className={classes.chartCard}>
                        <h3 className={classes.chartTitle}>Severity Distribution</h3>
                        <div className={classes.chartContainerMedium}>
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
                        <p className={classes.note}>*Estimated breakdown of severity</p>
                    </div>

                </div>

                {/* Seizure Statistics Section */}
                <div className={classes.seizureSection}>
                    <div className={classes.seizureGrid}>
                        {/* Overall Likelihood */}
                        <div className={classes.chartCard}>
                            <h4 className={classes.chartTitle}>Overall Likelihood of Seizures</h4>
                            <div className={classes.centerContent}>
                                <div className={classes.chartContainerPie}>
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
                                <div style={{ textAlign: 'center' }}>
                                    <p className={classes.percentage}>71%</p>
                                    <p className={classes.percentageText}>of individuals with tubulinopathy experience seizures</p>
                                </div>
                            </div>
                        </div>

                        {/* Age of Onset */}
                        <div className={classes.chartCard}>
                            <h4 className={classes.chartTitle}>Age of Seizure Onset</h4>
                            <div className={classes.chartContainerSmall}>
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
                            <div className={classes.findings}>
                                <p className={classes.findingsTitle}>Key Findings:</p>
                                <ul className={classes.findingsList}>
                                    <li className={classes.findingsListItem}><strong className={classes.strong}>63%</strong> of seizures begin in the first year of life</li>
                                    <li className={classes.findingsListItem}><strong className={classes.strong}>85%</strong> of seizures begin before age 3</li>
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
