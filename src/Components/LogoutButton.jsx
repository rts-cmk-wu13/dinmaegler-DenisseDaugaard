import { useAuth } from "../contexts/AuthContext"
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
       
        <button onClick={handleLogout}> <FaUser /> Log out</button>
     
    ) : <Link to="/login"> <FaUser /> Login</Link>
}