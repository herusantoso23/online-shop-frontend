import axios from 'axios';
import Constant from '../../config/Constant';
import {message} from 'antd';

class SignUpService {
    signUp(data){
        const URL = Constant.URL_MASTER_PATH + Constant.URL_SIGN_UP;
        const payload = data;

        return new Promise((resolve, reject)=>{
            axios.post(URL, payload).then(response => {
                resolve(response);
                console.error(response);
            }).catch(error=>{
                message.error(error.response.data.message);
            });
        })
    };
}

export default SignUpService;

