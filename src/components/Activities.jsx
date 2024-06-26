import React, { useEffect, useState } from 'react';
import '../styles/activities.css'
import SimpleBar from './charts/SimpleBar'
import { getActivities } from '../api/serviceApi';

const Activities = () => {
    const [activities, setactivitiesData] = useState(null);

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
      
    return (
        <div className="activities">
            <div className="legends">
                <h3>Activité quotidienne</h3>
                <span className="color-dot-black"></span><span>Poids (kg)</span>
                <span className="color-dot-red"></span><span>Calories brûlées (kCal)</span>
            </div>

            {/* graph */}
            <article className="graph">
                <SimpleBar data={activities} />
            </article>
            
        </div>
    );
}

export default Activities;