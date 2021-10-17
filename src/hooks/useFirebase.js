import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            }).catch((error) => {
            // An error happened.
            });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change',user);
                setUser(user);
            }
        })
    },[])

    return {
        signInUsingGoogle, user, error, logOut
    }
}

export default useFireBase;