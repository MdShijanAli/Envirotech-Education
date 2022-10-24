import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside changed', currentUser);
            setUser(currentUser)
        });
        return unsubscribe;
    }, [])


    const authInfo = {
        createUser,
        providerLogin,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;