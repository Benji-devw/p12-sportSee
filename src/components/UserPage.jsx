import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import { getUser } from "../api/serviceApi";
import { NutrimentCard } from "./Nutriment/NutrimentCard";
import { Activities } from "./Activities/Activities";
import { AverageSession } from "./AverageSession/AverageSession";
import { Performances } from "./Performances/Performances";
import { Score } from "./Score/Score";

function UserPage() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [nutrimentsData, setNutrimentsData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { user, nutriments } = await getUser(id);
                setUserData(user);
                setNutrimentsData(nutriments);
            } catch (error) {
                navigate('/utilisateur-introuvable');
                console.error(
                    "Erreur lors de la récupération des données utilisateur:",
                    error
                );
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {!userData ? (
                <div>Chargement...</div>
            ) : (
                <section>
                    <h1>
                        Bonjour <span>{userData.firstName}</span>
                    </h1>
                    <h3>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </h3>

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
                                <Activities id={id} />
                            </div>

                            <div className="left-bottom">
                                <AverageSession id={id} />
                                <Performances id={id} />
                                <Score score={userData.scorePieValue} />
                            </div>
                        </article>
                    </div>
                </section>
            )}
        </div>
    );
}

export default UserPage;
