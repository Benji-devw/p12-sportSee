import { Bar, Rectangle } from 'recharts';

export default class ActivitySession {
    constructor(day, kilogram, calories) {
        this.date = new Date(day);
        this.kilogram = kilogram;
        this.calories = calories;
    }

    // Getters
    get day() {
        return this.date.getDate();
    }
    
    get kgBar() {
        return <Bar
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            maxBarSize={8}
            activeBar={<Rectangle />}
        />
    }

    get calBar() {
        return <Bar
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            maxBarSize={8}
            activeBar={<Rectangle />}
        />
    }
    
}