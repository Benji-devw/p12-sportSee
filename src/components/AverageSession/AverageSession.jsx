import React, { useEffect, useState } from "react";
// import "./averageSession.css";
import { getSessionAverage } from "../../api/serviceApi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const AverageSession = () => {
  const [averageSession, averageSessionData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const averageSession = await getSessionAverage(18);
              console.log(averageSession);
              averageSessionData(averageSession);
          } catch (error) {
              console.error(
                  "Erreur lors de la récupération des données utilisateur:",
                  error
              );
          }
      };
      fetchData();
  }, []);
  console.log(averageSession);

  return (
    <div>

    </div>
  );
};
