import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializefirebase from "../firebase/firebase.init";


initializefirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    //observe whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            }
        });
    }, [])


    return { user, signInUsingGoogle, LogOut }

}


export default useFirebase;