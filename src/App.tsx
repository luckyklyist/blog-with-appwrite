import "./App.css";
import authservice from "./appwrite/auth";
import Login from "./components/Login";
import SingUp from "./components/SignUp";

function App() {
  return (
    <div>
      <Login />
      <SingUp />
    </div>
  );
}

export default App;
