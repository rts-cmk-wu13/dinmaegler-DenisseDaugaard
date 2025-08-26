import{useState, useEffect} from "react"

import { GetAllHouses } from "../api/typicode"
import Hero from "../Components/Hero";
import MainInfo from "../Components/MainInfo";


export default function Home() {

    const [houses, setHouses] = useState()
    
    useEffect(() => {
        const fetchAllHouses = async () => {
            const houses = await GetAllHouses();
            setHouses(houses);
        }
        fetchAllHouses();
    }, []);
    
    console.log(houses);
   

    return (
        <>
        <Hero />
        <MainInfo/>
        </>
    )
}