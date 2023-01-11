import { createContext } from "react";
// We are creating a context for the user data, this will be used to share data to all the children components
const user = createContext({});

export default user;
