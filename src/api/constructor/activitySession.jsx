import { Bar, Rectangle } from 'recharts';

export default class ActivitySession {
    constructor(day, kilogram, calories) {
        this.date = new Date(day);
        this.kilogram = kilogram;
        this.calories = calories;
    }

    get day() {
        return this.date.getDate();
    }
    
    get kgBar() {
        return <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            maxBarSize={10}
            barGap={20}
            activeBar={<Rectangle />}
        />
    }

    get calBar() {
        return <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            maxBarSize={10}
            barGap={20}
            activeBar={<Rectangle />}
        />
    }
    
}