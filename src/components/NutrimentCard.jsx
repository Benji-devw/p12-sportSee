const NutrimentCard = ({ nutriment }) => {
    return (
        <div>
            <img src={nutriment.icon} alt={nutriment.name} />
            <p>{nutriment.value} {nutriment.unit}</p>
            <p>{nutriment.name}</p>
        </div>
    );
};

export default NutrimentCard;