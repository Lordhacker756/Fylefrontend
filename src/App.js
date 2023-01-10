import "./App.css";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import { useEffect, useState } from "react";
import user from "./contexts/userContext";

function App() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({
    msg: "",
    data: {},
  });

  return (
    <div className="App">
      <user.Provider value={{ setUserName, setUserData, userData, userName }}>
        {userData.msg ? <Profile /> : <Login />}
      </user.Provider>
    </div>
  );
}

export default App;
