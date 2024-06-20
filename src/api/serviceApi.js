import User from './constructor/user';
import Nutriment from './constructor/nutriment';

export const getUser = async (id) => {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    const user = new User(data.data.id, data.data.userInfos, data.data.score);

    const nutriments = [];
    for(const key in data.data.keyData) {
        nutriments.push(new Nutriment(data.data.keyData[key], key));
    }
        
    return {user, nutriments}
};



export const getPerformance = async (id) => {}
