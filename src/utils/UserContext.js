import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "default User",
    setuserInfo: () => {},
});

export default UserContext;
