export default class AverageSession {
    constructor(day, sessionLength) {
        this.day = day;
        this.sessionLength = sessionLength;
    }

    get length() {
        return `${this.sessionLength} min`;
    }

    get convertDay() {
        switch (this.day) {
            case 1:
                return "L";
            case 2:
            case 3:
                return "M";
            case 4:
                return "J";
            case 5:
                return "V";
            case 6:
                return "S";
            case 7:
                return "D";
            default:
                return "Jour inconnu";
        }
    }
}