import { useEffect, useState } from "react";
import "./App.css";
import { getUser, getPerformances, getSessionAverage } from "./api/serviceApi";
import Layout from "./components/Layout";
import { NutrimentCard } from "./components/Nutriment/NutrimentCard";
import { Activities } from "./components/Activities/Activities";
import { AverageSession } from "./components/AverageSession/AverageSession";

// TODO: Ajouter REACT-ROUTER
// TODO: Ajouter page 404

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
                                <div className="average_wrapper">
                                    <AverageSession />
                                </div>

                                <div className="performance_wrapper">
                                    <p>TESTETSETSTETSE</p>
                                    {/* <Performance performance={performance} /> */}
                                </div>

                                <div className="score_wrapper">
                                    <p>TESTETSETSTETSE</p>
                                    {/* <Score score={score} /> */}
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            )}
        </Layout>
    );
}

export default App;
