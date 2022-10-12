import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ child }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        });

        onAuthStateChanged();
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {child}
        </AuthContext.Provider>
    );
};
