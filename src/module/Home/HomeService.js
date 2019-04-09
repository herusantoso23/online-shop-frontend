import axios from 'axios';
import Constant from '../../config/Constant';
import {message} from 'antd';

class HomeService {
    getProductHotList(params){
        var config = {
            params: {
                limit : params.limit 
            }
        };

        return new Promise((resolve, reject)=>{
            axios.get(Constant.URL_MASTER_PATH + Constant.URL_GET_PRODUCTS, config).then(response => {
                resolve(response);
            }).catch(error=>{
                if(error.response.status === 401){
                    console.log("session abis");
                } else {
                    message.error(error.response.data.message);
                }
            });
        })
    };
    
}

export default HomeService;