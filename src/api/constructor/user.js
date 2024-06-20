export default class User {
    constructor(id, userInfos, score) {
        this.id = id;
        this.score = score;
        this.userInfos = userInfos;
    }

    get firstName() {
        return `${this.userInfos.firstName}`;
    }

    get percentScore() {
        return `${this.score * 100}`;
    }
}
