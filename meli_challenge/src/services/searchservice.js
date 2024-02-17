import axios from "axios";

const getSearch = (query) => {
    return axios.get('http://localhost:3001/api/items?q='.concat(query));
};

export default getSearch;