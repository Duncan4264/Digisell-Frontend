import cartApi from '../apiService/CartAPIService';
import userApi from '../apiService/UserApiService';
import productApi from '../apiService/ProductAPIService';

class DigiSellService {
    async checkout(products){
        
        var totalPrice = 0;


        for (let i = 0; i < products.length; i++){
            let tempPrice = Number.parseInt(products[i].productPrice)
            totalPrice += tempPrice
        }

        let json = JSON.stringify({
            "totalPrice" : totalPrice,
            "totalItems" : products.length,
            "products" : products
        });

        let status = await cartApi.createCart(json);

        if (status !== ""){
            alert("You have successfully checked out!")
        }

        return status;
    }

    async getProducts(){
        let status = await productApi.getAllProducts();

        return status;
    }

    async upsertUser(json){

        let status = await userApi.upsertUser(json);

        return status;

    }

    async validateUser(json){

        let status = await userApi.loginUser(json);

        return status;

    }


}

export default new DigiSellService();