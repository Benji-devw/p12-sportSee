import "./score.css";
import {
    PieChart,
    Pie,
    ResponsiveContainer,
} from "recharts";

export const Score = ({ score }) => {
    // console.log(score);
    const calculateEndAngle = (score) => {
        return 90 + (360 * score[0].score / 100);
      };

    return (
        <article className="graph score-wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={300}>
                <rect
                        x="50%"
                        y="50%"
                        width="130"
                        height="130"
                        fill="#fff"
                        rx="110"
                        ry="110"
                        transform="translate(-65, -65)"
                    />
                    <text
                        x={"20%"}
                        y={"10%"}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={".9rem"}
                    >
                        Score
                    </text>
                    <text
                        x={"50%"}
                        y={"42%"}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={".8rem"}
                    >
                        <tspan x="50%" dy="0" style={{fontSize: '20px', fontWeight: 'bold', width: '30px' }}>{score[0].score}%</tspan>
                        <tspan x="50%" dy="1.5em" fill="#74798C">de votre</tspan>
                        <tspan x="50%" dy="1.5em" fill="#74798C">objectif</tspan>
                    </text>
                    <Pie
                        data={score}
                        dataKey="score"
                        nameKey="name"
                        innerRadius={65}
                        outerRadius={73}
                        stroke="none"
                        cornerRadius={10}
                        startAngle={90}
                        endAngle={calculateEndAngle(score)}
                    ></Pie>
                </PieChart>
            </ResponsiveContainer>
        </article>
    );
};
