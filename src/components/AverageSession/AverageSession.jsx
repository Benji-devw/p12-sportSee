import React, { useEffect, useState } from "react";
import "./averageSession.css";
import { getSessionAverage } from "../../api/serviceApi";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" style={{ height: "40px", width:'50px', backgroundColor: '#fff', padding: "3px" }}>
                <p className="label">{`${payload[0].payload.length}`}</p>
            </div>
        );
    }
    return null;
};

export const AverageSession = ({id}) => {
    const [averageSession, setAverageSession] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const averageSessionData = await getSessionAverage(id);
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
            <div className="legends">
                <span>Durée moyenne des sessions</span>
            </div>
            {averageSession.length && (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={averageSession}
                        margin={{
                            top: 100,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id="colorGradient"
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="white"
                                    stopOpacity={0.2}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="white"
                                    stopOpacity={1}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="convertDay"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#ffffff79" }}
                            tickMargin={20}
                            height={50}
                            padding={{ left: 20, right: 20 }}
                        />
                        <Tooltip 
                            position={{ y: 40 }}
                            content={<CustomTooltip />}
                        />
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="url(#colorGradient)"
                            strokeWidth={2}
                            dot={false}
                            // activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </article>
    );
};
