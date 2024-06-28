export default class Nutriment {
    constructor(value, key) {
        this.key = key;
        this.value = value;
    }

    get nutrimentIcon() {
        switch(this.key) {
            case "calorieCount":
                return "/calories.png";
            case "proteinCount":
                return "/chicken.png";
            case "carbohydrateCount":
                return "/apple.png";
            case "lipidCount":
                return "/cheeseburger.png";
            default:
                return "/default.png";
        }
    }

    get nutrimentUnit() {
        switch(this.key) {
            case "calorieCount":
                return "kcal";
            case "proteinCount":
                return "g";
            case "carbohydrateCount":
                return "g";
            case "lipidCount":
                return "g";
            default:
                return "not defined";
        }
    }

    get nutrimentName() {
        switch(this.key) {
            case "calorieCount":
                return "Calories";
            case "proteinCount":
                return "Proteines";
            case "carbohydrateCount":
                return "Glucides";
            case "lipidCount":
                return "Lipides";
            default:
                return "not defined";
        }
    }
}