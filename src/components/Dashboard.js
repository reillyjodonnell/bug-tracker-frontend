import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../CSS Components/Dashboard.css";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  console.log("Dashboard rendered");
  const history = useHistory();

  const { state } = useAuth();

  console.log(state);

  if (state.user === null) {
    console.log("user is null - pushing to /login");
    history.push("/login");
    return null;
  } else {
    return (
      <div>
        <div>
          <h2>Bug-Tracker</h2>
          <span>Welcome to the dashboard, {state.user.firstName}</span>
        </div>
      </div>
    );
  }
}
