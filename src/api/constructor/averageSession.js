export default class AverageSession {
    constructor(day, sessionLength) {
        this.day = day;
        this.sessionLength = sessionLength;
    }

    // Getters
    get length() {
        return `${this.sessionLength} min`;
    }

    get convertDay() {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        return days[this.day - 1];
    }
}