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

export const Activities = () => {
    const [activities, setactivitiesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activities = await getActivities(18);
                // console.log(activities);

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
    // console.log(activities);

    return (
        <div className="activities">
            <div className="legends">
                <h3>Activité quotidienne</h3>
                {/* <span className="color-dot-black"></span>
                <span>Poids (kg)</span>
                <span className="color-dot-red"></span>
                <span>Calories brûlées (kCal)</span> */}
            </div>

            {/* graph */}
            <article className="graph">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={activities}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip cursor={{ strokeWidth: 2 }} viewBox={{ x: 0, y: 0, width: 400, height: 400 }} />
                        <Legend verticalAlign="top" height={36} />
                        {activities.length && activities[0].kgBar}
                        {activities.length && activities[0].calBar}
                    </BarChart>
                </ResponsiveContainer>
            </article>
        </div>
    );
};
