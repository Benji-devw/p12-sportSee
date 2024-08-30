import "./score.css";
import {
    PieChart,
    Pie,
    ResponsiveContainer,
} from "recharts";

export const Score = ({ score }) => {
    console.log(score);

    return (
        <article className="graph score-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={300}>
                    <text
                        x={"15%"}
                        y={"10%"}
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        Score
                    </text>
                    <text
                        x={"50%"}
                        y={"45%"}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ width: '30px', display: 'inline-block', textAlign: 'center' }}
                    >
                        <tspan x="50%" dy="0">{score[0].score * 100}%</tspan>
                        <tspan x="50%" dy="1.5em">de votre</tspan>
                        <tspan x="50%" dy="1.5em">objectif</tspan>
                    </text>
                    <Pie
                        data={score}
                        dataKey="score"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={85}
                        outerRadius={100}
                        fill="#fff"
                        cornerRadius={10}
                        background={{ fill: "#fff" }}
                    ></Pie>
                </PieChart>
            </ResponsiveContainer>
        </article>
    );
};
