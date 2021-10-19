import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS Components/Form.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Form() {
  console.log("rendering Form");
  const history = useHistory();

  //check if the user is already signed in
  const { state, setUser } = useAuth();

  useEffect(() => {
    console.log(state);
  }, []);

  var loginSite = "http://localhost:3000/login";
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();

    await axios
      .post(loginSite, inputData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log(res);
        setUser(res);
        history.push("/");
        //return res.data;
      })
      .catch((err) => {
        console.log(`failed to login ${err}`);
      });
  };

  return (
    <div className="login-form-container">
      <form className="login-form">
        <input
          name="email"
          className="login-email"
          type="email"
          placeholder="Anakin@MustafarEnterprise.sit"
          onChange={inputHandler}
          value={inputData.email}
        ></input>

        <input
          onChange={inputHandler}
          name="password"
          className="login-password"
          type="password"
          placeholder="password"
          value={inputData.password}
        ></input>
        <button onClick={submitForm} className="login-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
