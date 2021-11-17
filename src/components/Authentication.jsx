import { useState } from "react"
const SIGNIN = "signin";
const SIGNUP = "signup";
const Authentication = () => {
    const [authMode, setAuthMode] = useState(SIGNIN);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = () => {
        if(authMode === SIGNIN){

        }
        if(authMode === SIGNUP){

        }
    }
    const handleAuthToggle = () => {
        if(authMode === SIGNIN){
            setAuthMode(SIGNUP);
        }
        else if(authMode === SIGNUP){
            setAuthMode(SIGNIN);
        }
    }
    return(
        <div>
            <form>
                <input id="email" value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
                <input id="password" value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="Password" />
                <p onClick={handleAuthToggle}>Toggle</p>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}