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

    get scorePieValue() {
        return [
            {
                score: this.score,
                fill: '#e60000',
            },
            {
                score: 1 - this.score,
                fill: 'transparent',
            },
        ];
    }
}
