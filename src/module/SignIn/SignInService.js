import axios from 'axios';
import Constant from '../../config/Constant';
import {message} from 'antd';

class SignInService {
    signIn(data){
        const payload = data;

        var credentials = btoa("adminapp:password");
        var config = {
            headers: {'Authorization': 'Basic ' + credentials}
        };

        let formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('username', payload.username);
        formData.append('password', payload.password);

        return new Promise((resolve, reject)=>{
            axios.post(Constant.URL_MASTER_PATH + Constant.URL_SIGN_IN, formData, config).then(response => {
                resolve(response);
            }).catch(error=>{
                message.error("username or password doesn't match");
            });
        })
    };

    
}

export default SignInService;