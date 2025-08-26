import { useLocation } from "react-router"

import Navigation from "../header-components/Navigation"


export default function Header() {
    const location = useLocation()

    console.log(location.pathname)

    return (
        <header className="header">
        { location.pathname !== "/login" && (
            <>
                <Navigation />
            </>
        )}
      </header>
    )
}