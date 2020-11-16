import { USER_LOGIN, USER_SIGNUP, USER_AUTH } from './Type';
import axios from 'axios';

export function loginUser(userSubmit) {
  const request = axios
    .post('/api/user/login', userSubmit)
    .then((res) => res.data);

  return {
    type: USER_LOGIN,
    payload: request,
  };
}

export function signupUser(userSubmit) {
  const request = axios
    .post('/api/user/signup', userSubmit)
    .then((res) => res.data);

  return {
    type: USER_SIGNUP,
    payload: request,
  };
}

export function authUser() {
  const request = axios.get('/api/user/auth').then((res) => res.data);

  return {
    type: USER_AUTH,
    payload: request,
  };
}
