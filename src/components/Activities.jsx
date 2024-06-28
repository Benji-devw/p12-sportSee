import React, { useEffect, useState } from "react";
import "../styles/activities.css";
import { getActivities } from "../api/serviceApi";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Activities = () => {
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

  console.log(activities);

  return (
    <div className="activities">
      <div className="legends">
        <h3>Activité quotidienne</h3>
        <span className="color-dot-black"></span>
        <span>Poids (kg)</span>
        <span className="color-dot-red"></span>
        <span>Calories brûlées (kCal)</span>
      </div>

      {/* graph */}
      <article className="graph">
        {/* <SimpleBar data={activities} /> */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={activities}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            {
                activities.length && activities[0].kgBar
            }
            {
                activities.length && activities[0].calBar
            }
          </BarChart>
        </ResponsiveContainer>
      </article>
    </div>
  );
};

export default Activities;
