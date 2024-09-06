import "./nutriment.css";

export const NutrimentCard = ({ nutriment }) => {

    return (
        <div className="nutriment-card">
            <img
                src={nutriment.nutrimentIcon}
                alt={nutriment.nutrimentName}
                style={{
                    backgroundColor:
                        nutriment.nutrimentName === "Calories"
                            ? "rgba(255, 0, 0, 0.2)"
                            : nutriment.nutrimentName === "Proteines"
                            ? "rgba(74, 184, 255, 0.2)"
                            : nutriment.nutrimentName === "Glucides"
                            ? "rgba(249, 206, 35, 0.2)"
                            : "rgba(253, 81, 129, 0.2)",
                }}
            />
            <div>
                <p>
                    {nutriment.value} {nutriment.nutrimentUnit}
                </p>
                <p>{nutriment.nutrimentName}</p>
            </div>
        </div>
    );
};
