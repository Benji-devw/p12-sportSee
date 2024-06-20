import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
// import Home from './Home'
import { getUser } from "./api/serviceApi";
import NutrimentCard from "./components/NutrimentCard";

function App() {
    const [userData, setUserData] = useState(null);
	const [nutrimentsData, setNutrimentsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { user, nutriments } = await getUser(18);
                setUserData({ firstName: user.firstName, score: user.percentScore, id: user.id});
				const allNutriments = nutriments.map(nutriment => ({
					icon: nutriment.nutrimentIcon,
					name: nutriment.nutrimentName,
					unit: nutriment.nutrimentUnit,
					value: nutriment.value
				}));
            setNutrimentsData(allNutriments);
            } catch (error) {
                console.error("Erreur lors de la récupération des données utilisateur:", error);
            }
        };
        fetchData();
    }, []);
	// console.log(nutrimentsData);
	// console.log(userData);


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
