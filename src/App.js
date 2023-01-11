import "./App.css";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import { useState } from "react";
import user from "./contexts/userContext";

function App() {
  // This is the state for the user name, this will be used to fetch the user data from the github api
  const [userName, setUserName] = useState("");

  // This is the state for the user data, this will be used to share the user data to all the children components
  const [userData, setUserData] = useState({
    msg: "", // This is the message that will help identify if the user data is fetched or not
    data: {}, // This is the user data that will be fetched from the github api
  });

  return (
    <div className="App">
      {/* This is the provider for the user data, this will be used to share the user data to all the children components */}
      <user.Provider value={{ setUserName, setUserData, userData, userName }}>
        {/* If the UserData is present, show the profile of the user, else go to the login page to take the username from user */}
        {!userData.msg ? <Profile /> : <Login />}
      </user.Provider>
    </div>
  );
}

export default App;
