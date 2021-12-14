import api from "./api";
import jwt from "jwt-decode";

export const TOKEN_KEY = "@user-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  return 0;
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const signIn = (params, config) => {
  return new Promise((resolve, reject) => {
    api
      .post("/login", params, config)
      .then((response) => {
        if (response.data) {
          login(response.data.access_token);
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserData = () => {
  const tk = getToken();
  const tk_decode = jwt(tk);
  return new Promise((resolve, reject) => {
    api
      .get(`/user/id?id=${tk_decode.id}`)
      .then((response) => {
        resolve(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const SignInWithToken = () => {
  return new Promise((resolve, reject) => {
    api
      .post("/me") //rota que envia o token pra logar
      .then((response) => {
        if (response.data) {
          login(response.data.access_token);
          resolve(response.data);
        } else {
          reject(response.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
