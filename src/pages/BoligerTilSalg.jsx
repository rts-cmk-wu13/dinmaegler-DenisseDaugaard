import { GetAllHouses } from "../api/typicode"
import { useState, useEffect } from "react";
import SmallHero from "./boligerSalg_components/BoligSalgHero";
import SearchBolig from "./boligerSalg_components/SearchBolig"; 

export default function BoligerTilSalg() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAllHouses();
            setHouses(data);
        };
        fetchData();
    }, []);

    //console.log(houses);

    return (
       <>
       <SmallHero
         title="Boliger til salg"
       />
       <SearchBolig />
       <p>Har du ikke en konto? <Link to="/account-register" className="link__add-user"> Opret bruger. </Link></p>
       </>
    )
}