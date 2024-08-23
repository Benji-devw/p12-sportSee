import React, { useEffect, useState } from "react";
import "./performances.css";
import { getPerformances } from "../../api/serviceApi";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

export const Performances = () => {
    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const performancesData = await getPerformances(18);
                setPerformances(performancesData);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des performances:",
                    error
                );
            }
        };
        fetchData();
    }, []);
    console.log(performances);
    

    return (
        <article className="graph performance-wrapper">
            {performances.length && (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        data={performances}
                    >
                        <PolarGrid />
                        <PolarAngleAxis dataKey="label" />
                        <Radar
                            name="Mike"
                            dataKey="value"
                            // stroke="#ff0000"
                            fill="#ff0000"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </article>
    );
};
