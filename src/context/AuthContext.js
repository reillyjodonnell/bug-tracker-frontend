import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
const getUser = async () => {
  const user = await Axios.get(`http://localhost:3000/user`, {
    withCredentials: true,
    credentials: "include",
  }).catch((err) => {
    return Promise.reject(err.response);
  });
  return user;
};

export default function AuthProvider({ children }) {
  console.log("AuthContext is rendering");

  const [state, setState] = useState({
    status: "pending",
    error: null,
    user: null,
  });

  const setUser = (data) => {
    if (data.status === 200) {
      setState({ status: "success", error: null, user: data.data });
    } else if (data.status === 401) {
      setState({ status: "error", error: data.data, user: null });
    }
  };

  useEffect(() => {
    console.log("looking for user");

    getUser()
      .then((user) => {
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        setUser(err);
        console.log(err);
      });
  }, []);

  const values = { state, setUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
