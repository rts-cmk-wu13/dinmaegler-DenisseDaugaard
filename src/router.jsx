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
import HouseCarousel from "./pages/HouseDetails_components/HouseCarousel";
import HouseLocation from "./pages/HouseDetails_components/HouseLocation";
import HouseFloorPlant from "./pages/HouseDetails_components/HouseFloorPlant";
import AccountRegister from "./pages/AccountRegister";


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
                element:<HouseDetails />,
                children:[
                    {
                        path:'housecarousel',
                        element:<HouseCarousel/>
                    },
                    {
                        path: 'housefloorplant',
                        element: <HouseFloorPlant/>
                    },
                    {
                        path:"houselocation",
                        element:<HouseLocation/>
                    }
                ]
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
                path: "account-register",
                errorElement : <AccountRegister/>
            },
            {   
                path: "*",  
                element: <NotFound />
            } 
        ]
    }

]);
export default router;