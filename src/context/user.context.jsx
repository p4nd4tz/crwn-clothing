import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChangeListner } from "../utils/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListner((user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe;
    }, [])

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
};

export default UserProvider;

export function useUserContext() {
    return useContext(UserContext);
}