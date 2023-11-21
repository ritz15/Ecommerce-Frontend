import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8086/api/v2/Product';
const PRODUCT1_API_BASE_URL = 'http://localhost:8086/api/v2/products';
const PRODUCT2_API_BASE_URL = 'http://localhost:8086/api/v2/products';
const PRODUCT3_API_BASE_URL = 'http://localhost:8086/api/v2/update';

const PRODUCT4_API_BASE_URL = 'http://localhost:8086/api/v2/delete';

class ProductService{

    getAllProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    addProduct(product){
        return axios.post(PRODUCT1_API_BASE_URL,product);

    }
    getProductById(productId){
        return axios.get(PRODUCT2_API_BASE_URL+'/'+productId);
    }

    updateProduct(product,productId){
        return axios.put(PRODUCT3_API_BASE_URL+'/'+productId,product);
    }
    deleteProduct(productId){
        return axios.delete(PRODUCT4_API_BASE_URL+'/'+productId);
    }
}

export default new ProductService();