import { useEffect, useState } from "react";
import "./App.css";
import { getUser, getPerformances, getActivities, getSessionAverage } from "./api/serviceApi";
import Layout from "./components/Layout";
import NutrimentCard from "./components/NutrimentCard";

function App() {
    const [userData, setUserData] = useState(null);
	const [nutrimentsData, setNutrimentsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { user, nutriments } = await getUser(18);
				// const performances = await getPerformances(18);
				// console.log(performances);
				// const activities = await getActivities(18);
				// console.log(activities);
				// const sessionAverage = await getSessionAverage(18);
				// console.log(sessionAverage);

                setUserData(user);
            	setNutrimentsData(nutriments);
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur:", error);
            }
        };
        fetchData();
    }, []);

	return (
		<Layout>
			{!userData ? (
				<div>Chargement...</div>
			) : (
				<section>
					<h1>Bonjour {userData.firstName}</h1>
					{nutrimentsData.map((nutriment, index) => (
						<NutrimentCard key={index} nutriment={nutriment} />
					))}
				</section>
			)}
		</Layout>
	);
}

export default App;
