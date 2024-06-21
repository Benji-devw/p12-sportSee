const NutrimentCard = ({ nutriment }) => {
    return (
        <div>
            <img src={nutriment.nutrimentIcon} alt={nutriment.nutrimentName} />
            <p>{nutriment.value} {nutriment.nutrimentUnit}</p>
            <p>{nutriment.nutrimentName}</p>
        </div>
    );
};

export default NutrimentCard;