import axios from 'axios';

// const BASE_URL = 'https://61c4ceeef1af4a0017d997e8.mockapi.io';
// const BASE_URL = 'https://connections-api.herokuapp.com';

const getData = endpoint => axios.get(endpoint);

const saveItem = (endpoint, item) => axios.post(endpoint, item);

const deleteItem = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export { getData, saveItem, deleteItem };
