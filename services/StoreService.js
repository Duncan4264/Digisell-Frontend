import axios from 'axios';

class StoreService {

    /**
     * 
     * @returns 
     */
    async getAllProducts(){

        const response = await axios.get("/store");
        return response.data;
    }

    async getCart(json) {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("/store/", json, axiosConfig);
        return response.data;
    }

    async createCart(json) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("/store/save", json, axiosConfig);
        return response.data;
    }

    
    async AddProductToCart(json) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("/store/add", json, axiosConfig);
        return response.data;
    }

    async deleteProductFromCart(json) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.post("/store/delete", json, axiosConfig);
        return response.data;
    }
}

export default new StoreService();