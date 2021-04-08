import axios from 'axios';

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

class CartAPIService {
    async createCart(json) {
        const response = await axios.post("http://localhost:8080/carts/save", json, axiosConfig);
        return response.data;
    }
}

export default new CartAPIService();