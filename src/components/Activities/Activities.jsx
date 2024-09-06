import React, { useEffect, useState } from "react";
import "./activities.css";
import { getActivities } from "../../api/serviceApi";
import {
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}`}Kg</p>
                <p className="label">{`${payload[1].value}`}Kcal</p>
            </div>
        );
    }
    return null;
};

export const Activities = ({id}) => {
    const [activities, setactivitiesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activities = await getActivities(id);
                setactivitiesData(activities);
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
        <div className="activities">
            <div className="legends">
                <span>Activité quotidienne</span>
            </div>

            <article className="graph">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={activities}
                        barGap={2}
                        barCategoryGap="30%"
                        margin={{
                            top: 5,
                            right: 30,
                            left: 30,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" vertical={false} />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#74798C" }}
                        />
                        <YAxis
                            orientation="right"
                            tickCount={3}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#74798C" }}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            position={{ y: 40 }}
                        />
                        <Legend
                            verticalAlign="top"
                            height={56}
                            align="right"
                            iconSize={10}
                            iconType="circle"
                            formatter={(value) => (
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        color: "#74798C",
                                    }}
                                >
                                    {value}
                                </span>
                            )}
                        />
                        {activities.length && activities[0].kgBar}
                        {activities.length && activities[0].calBar}
                    </BarChart>
                </ResponsiveContainer>
            </article>
        </div>
    );
};
