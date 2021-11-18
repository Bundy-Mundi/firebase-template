import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const signInWithGoogle = async()=>{
    const result = await signInWithPopup(auth, provider)
        .catch(err => {
            const errorCode = err.code;
            const errorMessage = err.message;
            // The email of the user's account used.
            const email = err.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(err);
            console.log(errorCode, errorMessage, email, credential);
        });
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    // Things to put in React-context dispatch
    const token = credential.accessToken;
    const user = result.user;
}

/*
Optional: 
Specify additional OAuth 2.0 scopes that you want to request from the authentication provider. 
To add a scope, call addScope. For example:
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
*/

/*
You can Redirect user by using signInWithRedirect(auth, provider);
*/