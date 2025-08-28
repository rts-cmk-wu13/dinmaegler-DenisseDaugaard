import { NavLink } from "react-router"

export default function Footer() {

    return (
        <footer className="bg-[var(--bg-color)] relative">
            <div className="footer__wrapper">
                    <section className="footer__logo">
                        <img src="/logo.svg" alt="logo" />
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                    </section>
                    <section className="footer__links">
                        <h3 className="font-bold">Quick Links</h3>
                        <ul>
                            <li><NavLink to="#">Boliger til salg</NavLink></li>
                            <li><NavLink to="#">Mæglere</NavLink></li>
                            <li><NavLink to="#">Kontakt os</NavLink></li>
                            <li><NavLink to="#">Log ind / bliv bruger</NavLink></li>
                        </ul>
                    </section>
                    <section className="footer__contact bg-white absolute">
                        <div className="contact__info flex items-center gap-4">
                            <img className="footer__icon" src="/phone-icon.png" alt="phone icon" />
                            <span>
                                <p>Ring til os</p>
                                <p>+45 7070 4000</p>
                            </span>
                        </div>
                        <div className="contact__info flex items-center gap-4">
                            <img className="footer__icon" src="/mail-icon.png" alt="mail icon" />
                            <span>
                                <p>Send en mail</p>
                                <p>4000@dinmaegler.com</p>
                            </span>
                        </div>
                        <div className="contact__info flex items-center gap-4">
                            <img className="footer__icon" src="/location-icon.png" alt="location icon" />
                            <span>
                                <p>Butik</p>
                                <p>Stændertorvet 78, 4000 Roskilde</p>
                            </span>
                        </div>
                        <div>
                        <p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                        </div>
                    </section>
            </div>
                <section className="footer__acronym">
                    <div>
                        <span>Medlem af</span>
                        <h2>DMS</h2>
                        <p>Dansk Mægler Sammenslutning</p>
                    </div>
                </section>
                <div className="rights">
                    <small>Layout By Jit Banik 2020</small>
                </div>
        </footer>
    )
}