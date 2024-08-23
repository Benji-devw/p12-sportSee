import { useEffect, useState } from "react";
import "./App.css";
import { getUser } from "./api/serviceApi";
import Layout from "./components/Layout";
import { NutrimentCard } from "./components/Nutriment/NutrimentCard";
import { Activities } from "./components/Activities/Activities";
import { AverageSession } from "./components/AverageSession/AverageSession";
import { Performances } from "./components/Performances/Performances";

// TODO: Ajouter REACT-ROUTER
// TODO: Ajouter page 404

function App() {
    const [userData, setUserData] = useState(null);
    const [nutrimentsData, setNutrimentsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { user, nutriments } = await getUser(18);
                setUserData(user);
                setNutrimentsData(nutriments);
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
        <Layout>
            {!userData ? (
                <div>Chargement...</div>
            ) : (
                <section>
                    <h1>
                        Bonjour <span>{userData.firstName}</span>
                    </h1>

                    <div className="wrapper">
                        <article className="right">
                            {nutrimentsData.map((nutriment, index) => (
                                <NutrimentCard
                                    key={index}
                                    nutriment={nutriment}
                                />
                            ))}
                        </article>

                        <article className="left">
                            <div className="activities_wrapper">
                                <Activities />
                            </div>

                            <div className="left-bottom">
                                <AverageSession />
                                <Performances />
                                <p>TESTETSETSTETSE</p>
                            </div>
                        </article>
                    </div>
                </section>
            )}
        </Layout>
    );
}

export default App;
