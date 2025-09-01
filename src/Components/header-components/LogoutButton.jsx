import { useAuth } from "./../../contexts/AuthContext"
import { useNavigate, Link } from "react-router"
import { FaUser } from "react-icons/fa";

export default function LogoutButton() {
    const { token, logout } = useAuth();
    const navigate = useNavigate()

    function handleLogout () {
        logout()
        navigate("/")
    }

    return token ? (
       
        <button className="text-white" onClick={handleLogout}><FaUser  className="text-white"/> Log out</button>
     
    ) : <Link className="text-white" to="/login"> <FaUser className="text-white" /> Login</Link>
}