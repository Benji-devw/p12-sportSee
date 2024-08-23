export default class User {
    constructor(id, firstName, score) {
        this.id = id;
        this.score = score;
        this.firstName = firstName;
    }

    // Getters
    get percentScore() {
        return `${this.score * 100}`;
    }
}
