import styled from "styled-components";

export const NutrimentCard = ({ nutriment }) => {
    console.log(nutriment.nutrimentName);
    const Img = styled.div`
        background-color: ${() => 
            nutriment.nutrimentName === "Calories" ? "rgba(255, 0, 0, 0.2)" : 
            nutriment.nutrimentName === "Proteines" ? "rgba(74, 184, 255, 0.2)" : 
            nutriment.nutrimentName === "Glucides" ? "rgba(249, 206, 35, 0.2)" : 
            "rgba(253, 81, 129, 0.2)"
        };
        display: flex;
        padding: 0.8rem;
        margin: 0 1rem 0 1rem;
        border-radius: 5px;
        width: 20px;
        height: 20px;
    `;

    return (
        <Card className="nutriment-card">
            <Img>
                <img src={nutriment.nutrimentIcon} alt={nutriment.nutrimentName} />
            </Img>
            <Text>
                <p>{nutriment.value} {nutriment.nutrimentUnit}</p>
                <p>{nutriment.nutrimentName}</p>
            </Text>
        </Card>
    );
};

// Styled-components
const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 2rem 1rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: #FBFBFB;
`;

const Text = styled.div`
    p:nth-child(1) {
        margin: 0;
        font-weight: bold;
    }
    p:nth-child(2) {
        margin: 0;
        font-weight: 500;
        color: #74798C;
    }
`;