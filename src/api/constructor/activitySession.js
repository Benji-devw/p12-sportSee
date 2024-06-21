export default class ActivitySession {
    constructor(day, kilogram, calories) {
        this.date = new Date(day);
        this.kilogram = kilogram;
        this.calories = calories;
    }

    get day() {
        return this.date.getDate();
    }
    
}