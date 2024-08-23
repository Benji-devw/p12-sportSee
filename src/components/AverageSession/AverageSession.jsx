import React, { useEffect, useState } from "react";
import "./averageSession.css";
import { getSessionAverage } from "../../api/serviceApi";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    YAxis,
} from "recharts";

//FIXME: Display the average session CHART

export const AverageSession = () => {
    const [averageSession, setAverageSession] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const averageSessionData = await getSessionAverage(18);
                setAverageSession(averageSessionData);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données utilisateur:",
                    error
                );
            }
        };
        fetchData();
    }, []);

    return (
        <article className="graph averageSession-wrapper">
            {averageSession.length && (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={averageSession}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="convertDay" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </article>
    );
};
