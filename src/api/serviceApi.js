import User from "./constructor/user";
import Nutriment from "./constructor/nutriment";
import Performence from "./constructor/performance";
import AverageSession from "./constructor/averageSession";
import ActivitySession from "./constructor/activitySession";

function getUrl(fileName, id, slug) {
    if (import.meta.env.VITE_MOCK) {
        return `${import.meta.env.VITE_MOCK_API_URL}/${fileName}.json`;
    } else {
        return `${import.meta.env.VITE_DEV_API_URL}/user/${id}${
            slug ? `/${slug}` : ""
        }`;
    }
}

export const getUser = async (id) => {
    const response = await fetch(getUrl("getUser", id));
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    // console.log(response);
    const data = await response.json();

    const user = new User(
        data.data.id,
        data.data.userInfos.firstName,
        data.data.score
    );

    const nutriments = [];
    for (const key in data.data.keyData) {
        nutriments.push(new Nutriment(data.data.keyData[key], key));
    }

    return { user, nutriments };
};

export const getPerformances = async (id) => {
    const response = await fetch(getUrl("getPerformances", id, "performance"));
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.data.data.map((performance) => {
        return new Performence(
            data.data.kind[performance.kind],
            performance.value
        );
    });
};

export const getActivities = async (id) => {
    const response = await fetch(getUrl("getActivities", id, "activity"));
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.data.sessions.map((activity) => {
        return new ActivitySession(
            activity.day,
            activity.kilogram,
            activity.calories
        );
    });
};

export const getSessionAverage = async (id) => {
    const response = await fetch(getUrl("getAverageSession", id, "average-sessions"));
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.data.sessions.map((average) => {
        return new AverageSession(average.day, average.sessionLength);
    });
};
