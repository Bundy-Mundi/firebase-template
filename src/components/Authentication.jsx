import { useState } from "react"
import { writeUserData } from "../firebase";
const SIGNIN = "signin";
const SIGNUP = "signup";
const Authentication = () => {
    const [authMode, setAuthMode] = useState(SIGNIN);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(authMode === SIGNIN){

        }
        if(authMode === SIGNUP){
            writeUserData("Ananymous", email, "/");
        }
    }
    const handleAuthToggle = (e) => {
        e.preventDefault();
        if(authMode === SIGNIN){
            setAuthMode(SIGNUP);
        }
        else if(authMode === SIGNUP){
            setAuthMode(SIGNIN);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                <input id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
                <button onClick={handleAuthToggle}>
                    {authMode}
                </button>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Authentication;