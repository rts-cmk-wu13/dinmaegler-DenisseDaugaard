import { Form, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react";
import SmallHero from './boligerSalg_components/BoligSalgHero'
import { Link } from "react-router-dom";

export default function Login() {
    const [error, setError] = useState();
    const {login} = useAuth()
    const location = useLocation();
    const navigate = useNavigate()

    console.log(location)
    const from = location.state?.from?.pathname || "/"
    console.log(from)

    async function handleLogin(event) {
        event.preventDefault()
        console.log(event.target.password.value)
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())

        console.log(data)
        // validér her...

        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const userdata = await response.json()

        console.log(userdata)

        if(!response.ok) {
            setError(userdata.message || userdata.error || "Please provide login credentials")
        } else {
            login(userdata.accessToken)
            navigate(from, { replace: true })
        }

    }

    return (

        <>
        <SmallHero
        title="Account Login"/>
        <div className="login__form p-4 m-4" >
            <Form onSubmit={handleLogin}>
                    <h1 className="text-center font-bold text-2xl">Log ind på din konto</h1>
                <div className="formgroup flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input className="border-1" type="text" name="username" id="username" />
                </div>
                <div className="formgroup flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input className="border-1"  type="password" name="password" id="password" />
                </div>
                {error && (<div className="error text-amber-700 text-xs">{error}</div>)}
                <button className="login__btn" type="submit">Log in</button>
            </Form>
    
            <div className="login__options">
                <span>Log ind med </span>
                <div className="flex gap-3">
                    <a className="login__opt bg-[#DD4B39]" href="#">Google</a>
                    <a className="login__opt bg-[#3B5999]" href="#">Facebook</a>
                    <a className="login__opt bg-[var(--primary-color)]" href="#">Twitter</a>
                </div>
                <p>Har du ikke en konto? <Link to="/account-register" className="link__add-user"> Opret bruger. </Link></p>
            </div>
        </div>
        </>
    )
}