import React from 'react'
import  { createContext, useReducer } from "react";
import reducer from "./render"

export const AppContext = createContext();

const initState = {
    isLoading: false,
    isAuth: false,
    token: "",
    isError: false
  };


function AuthContext( {children }) {
    const [state, dispatch] = useReducer(reducer, initState);
  return <AppContext.Provider value={{ state, dispatch }}>{ children }</AppContext.Provider>
}

export default AuthContext