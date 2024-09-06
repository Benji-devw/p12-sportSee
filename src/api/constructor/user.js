export default class User {
    constructor(id, firstName, score) {
        this.id = id;
        this.score = score;
        this.firstName = firstName;
    }

    // Getters
    get scorePieValue() {
        return [
            {
                score: this.score * 100,
                fill: '#e60000',
            },
            {
                score: 1 - this.score,
                fill: 'transparent',
            },
        ];
    }
}
