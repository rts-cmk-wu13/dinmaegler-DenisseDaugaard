import { useEffect, useState } from "react"

import { GetAllHouses } from "../../api/typicode"
import SectionHeader from "../../Components/header-components/SectionHeadder";
import HouseCard from "./HouseCard";

export default function Houses() {

    const [houses, setHouses] = useState([]);
    const [showAll, setShowAll] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAllHouses();
            setHouses(data);
        };
        fetchData();
    }, []);

    //console.log(houses); 
    const displayedHouses = showAll ? houses : houses.slice(0, 4);

    return (
        <section className="houses">
           <SectionHeader 
           title="Udvalgte Boliger" 
           description="There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some"
           style="section__header" />
            {displayedHouses.map(house => (
               <HouseCard key={house.id} house={house} />
            ))}
              <button className="show__more__btn bg-blue-950 text-white py-4 px-8 mx-auto" onClick={() => setShowAll(!showAll)}>
               {showAll ? "Vis færre" : "Vis alle"}
           </button>
        </section>
        
    )
}