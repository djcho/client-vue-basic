import axios from 'axios';
import tokenStore from '../store/tokenStore'

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers = {
    'Accept' : 'application/json',
    common: {
        'Authorization': ''
      }
}

axios.interceptors.request.use(
    (config) => {
        const token = tokenStore.state.accessToken;
        config.headers['Authorization'] = `Bearer ${token}`;
        
        console.log('Starting Request', JSON.stringify(config, null, 2))
        return config;
    },
    (error) => {
        console.log('Request failed.', error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
  (response) => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response;
  },
  async (error) => {
    console.error('response error : ', error);
    const requestUrl = error.config.url;
    if(error.response.status === 401 && !requestUrl.includes('/refresh-token')){
        try{
            console.log("response interceptor error : " + error)
            await refreshToken();
            return authService(config);
        }catch(refreshError){
            console.error('Error refreshing token:', refreshError);
        }
    }
    return Promise.reject(error);
  }
);


// import axios from "axios"
// import router from '../router/index'

// axios.defaults.baseURL = 'http://localhost:8000/api/';

// let refresh = false;
// let tokenExpirationTimer;

// axios.interceptors.response.use(resp => resp, async error => {  

//     if(error.resposne.stauts == 401 && !refresh) {
//         refresh = true;
//         const {status, data} = await axios.post('auth/refresh-token', {}, {
//             withCredentials : true
//         });
        
//         if(status == 200){
//             refresh = false;

//             if(data.access_token && data.access_token_expires_in){
//                 axios.defaults.headers.common['Authrization'] = `Bearer ${data.access_token}`;
//                 store.commit('login', data.access_token);
//                 return axios(error.config);
//             }
//         }
//     }

//     refresh = false;
//     router.push("/login");
//     return Promise.reject(error);
// });

function startAccessTokenTimer(expirationTime) {
    if (tokenExpirationTimer) {
      clearTimeout(tokenExpirationTimer);
    }

    tokenExpirationTimer = setTimeout(() => {
        router.push('/login');
    }, expirationTime - new Date().getTime());
  }