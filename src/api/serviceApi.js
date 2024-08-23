import User from "./constructor/user";
import Nutriment from "./constructor/nutriment";
import Performance from "./constructor/performance";
import AverageSession from "./constructor/averageSession";
import ActivitySession from "./constructor/activitySession";

/**
 * Generates a URL based on the provided parameters.
 *
 * @param {string} fileName - The name of the file.
 * @param {string} id - The user ID.
 * @param {string} slug - The slug (optional).
 * @returns {string} The generated URL.
 */
function getUrl(fileName, id, slug) {
    if (import.meta.env.VITE_MOCK === "dev") {
        return `${import.meta.env.VITE_MOCK_API_URL}/${fileName}.json`;
    } else {
        return `${import.meta.env.VITE_DOCKER_API_URL}/user/${id}${
            slug ? `/${slug}` : ""
        }`;
    }
}

/**
 * Fetches user data from the API.
 * @param {string} id - The user ID.
 * @returns {Promise} The user data and nutriments.
 */
export const getUser = async (id) => {
    const response = await fetch(getUrl("getUser", id));
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    const user = new User(
        data.data.id,
        data.data.userInfos.firstName,
        data.data.score
    );

    // Get nutriments from the API
    const nutriments = [];
    for (const key in data.data.keyData) {
        nutriments.push(new Nutriment(data.data.keyData[key], key));
    }

    return { user, nutriments };
};

/**
 * Fetches performances from the API.
 * @param {string} id - The user ID.
 * @returns {Promise} The performances.
 */
export const getPerformances = async (id) => {
    const response = await fetch(getUrl("getPerformances", id, "performance"));
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.data.data.map((performance) => {
        return new Performance(
            data.data.kind[performance.kind],
            performance.value
        );
    });
};

/**
 * Fetches activities from the API.
 * @param {string} id - The user ID.
 * @returns {Promise} The activities.
 */
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

/**
 * Fetches average session from the API.
 * @param {string} id - The user ID.
 * @returns {Promise} The average session.
 */
export const getSessionAverage = async (id) => {
    const response = await fetch(
        getUrl("getAverageSession", id, "average-sessions")
    );
    if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
    }
    const data = await response.json();

    return data.data.sessions.map((average) => {
        return new AverageSession(average.day, average.sessionLength);
    });
};
