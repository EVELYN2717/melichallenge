import axios from "axios";

const getItemById = (id) => {
    return axios.get('http://localhost:3001/api/items/'.concat(id),'/description');
};

export default getItemById;
