import axios from 'axios';
import Constant from '../../config/Constant';
import {message} from 'antd';

class NavbarService {
    getProfile(){
        var config = {
            headers: {'Authorization': 'Bearer ' + localStorage.getItem('access_token')}
        };

        return new Promise((resolve, reject)=>{
            axios.get(Constant.URL_MASTER_PATH + Constant.URL_GET_PROFILE, config).then(response => {
                resolve(response);
            }).catch(error=>{
                if(error.response.status == 401){
                    localStorage.removeItem('access_token');
                } else {
                    message.error(error.response.data.message);
                }
            });
        })
    };
    
}

export default NavbarService;