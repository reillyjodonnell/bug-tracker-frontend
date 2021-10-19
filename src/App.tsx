import "./App.css";
import AuthProvider from "./context/AuthContext";
import BugTracker from "./components/BugTracker";

function App() {
  console.log("rendering App.tsx");
  return (
    <AuthProvider>
      <BugTracker />
      {/* <div className="App">
        <header className="App-header">
          <h2>Login</h2>
          <Form updateText={updateText} />

          <span>{text}</span>
        </header>
      </div> */}
    </AuthProvider>
  );
}

export default App;
