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
            activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
    }

    get calBar() {
        return <Bar
            dataKey="calories"
            fill="#E60000"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
    }
    
}