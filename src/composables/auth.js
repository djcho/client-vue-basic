import { ref } from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";
import tokenStore from '@/store/tokenStore';

export default function useAuth() {
  const errors = ref([]);
  const router = useRouter();

  const setAccessToken = (tokenData) => {
    console.log(tokenData)
    tokenStore.dispatch('login', tokenData);
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post('auth/login', credentials, {
        withCredentials : true});        
        setAccessToken(response.data);      
    } catch (error) {
        errors.value = error.response.data.errors;
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post('auth/logout');
      tokenStore.dispatch('logout');
      await router.push({name : "Login"}); 
    } catch (error) {
        errors.value = error.response.data.errors;
    }
  };

  const register = async (userData) => {
    try {
      await axios.post('/register', userData);
      await router.push({name : "Login"}); 
    } catch (error) {
        errors.value = error.response.data.errors;
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post('auth/refresh-token');
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      return response.data;
    } catch (error) {
        errors.value = error.response.data.errors;
    }
  };

  return {
    errors,
    login,
    logout,
    register,
    refreshToken,
  };
};
