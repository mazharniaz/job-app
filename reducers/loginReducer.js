import React from 'react';

const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };

  const loginReducer = (prevState, action) =>  {
    switch (action.type) {
      case 'RETRIEVE_TOKEN' :
      return {
        ... prevState,
        userToken: action.token,
        isLoading: false
      };
      case 'LOGIN' :
      return {
        ... prevState,
        userName: action.name,
        userToken: action.token,
        isLoading: false
      };
      case 'LOGOUT' :
      return {
        ... prevState,
        userName: null,
        userToken: null,
        isLoading: false
      };
      case 'REGISTER' :
      return {
        ... prevState,
        userName: action.name,
        userToken: action.token,
        isLoading: false
      };
    }
  };

  export { loginReducer, initialLoginState };