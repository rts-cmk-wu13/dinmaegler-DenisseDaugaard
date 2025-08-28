import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import List from "./pages/List";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { getUser, getUsers } from "./api/typicode";
import Loading from "./Components/Loading";
import { ErrorBoundary } from "./Components/Error";
import { handleSubmit } from "./api/actions";
import Login from "./pages/Login";
import RequireAuth from "./Components/RequireAuth";

import BoligerTilSalg from "./pages/BoligerTilSalg";
import Maeglere from "./pages/Maeglere";
import HouseDetails from "./pages/HouseDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "list",
                element: (
                    <RequireAuth>
                        <List />
                    </RequireAuth>
                ),
                loader: getUsers,
            },
            {
                path: "contact",
                element: <Contact />,
                action: handleSubmit,
            },
            {
                path: "boliger-salg",
                element: <BoligerTilSalg />
            },
            {
                path: "boliger-salg/:id",
                element:<HouseDetails />
            },
            {
                path: "maeglere",
                element: <Maeglere />
            },
            {
                path: "login",
                element: <Login />
            },
            {   
                path: "*",  
                element: <NotFound />
            } 
        ]
    }

]);
export default router;