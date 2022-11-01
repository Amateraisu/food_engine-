import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase";

import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    console.log("ran provider");

    useEffect(() => {
        const onCall = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user, "AuthContext ran");
        });

        return () => {
            onCall();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
