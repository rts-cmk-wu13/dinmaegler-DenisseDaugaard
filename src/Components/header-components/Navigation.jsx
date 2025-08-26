import { NavLink } from "react-router"

import { SiMinutemailer } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import LogoutButton from "../header-components/LogoutButton";



export default function Navigation() {

    return (

        <>
        <div className="header__contact flex justify-around align-center">
            <div className="flex gap-4">
                <span className="contact__info"><SiMinutemailer /> 4000@dinmaegler.com</span>
                <span className="contact__info"><BsTelephoneFill /> +45 7070 4000</span>
            </div>
            <LogoutButton />
        </div>
        <nav className="navigation flex items-center justify-around py-4">
            <img className="logo" src="./logo.svg" alt="Din Mægler Logo" />

            <ul className="flex gap-4">
                <li><NavLink to="/list">Boliger til salg</NavLink></li>
                <li><NavLink to="/contact">Mæglere</NavLink></li>
                <li><NavLink to="/contact">Mine favoritter</NavLink></li>
                <li><NavLink to="/contact">Kontakt os</NavLink></li>
            </ul>
           
        </nav>
        </>

    )
}