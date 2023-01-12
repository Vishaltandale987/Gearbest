import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AuthContext/AuthContext";

function PrivateRout({ children }) {
  const { state } = useContext(AppContext);

  console.log("sdfdsf", state.isAuth);
    debugger
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
  return children
}

export default PrivateRout;
