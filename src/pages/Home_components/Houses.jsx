import { useEffect, useState } from "react"

import { GetAllHouses } from "../../api/typicode"
import SectionHeader from "../../Components/header-components/SectionHeadder";

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
                <section className="house" key={house.id}>
                    <figure>
                        <img src={house.images[0].url} alt={house.images[0].name} />
                    </figure>
                    <div className="house__info">
                        <h2>{house.adress1}</h2>
                        <p>{house.city}</p>
                          <span className="border-b-1"><strong>{house.type}</strong> • Ejerudgift : {house.payment} kr.</span>
                          <div className="house__spect">
                            {house.energylabel == 'A' ? (<span className="bg-green-600 text-white">{house.energylabel}</span>) 
                            : house.energylabel == 'B' ? (<span className="bg-yellow-600 text-white">{house.energylabel}</span>) 
                            : house.energylabel == 'C' ? (<span className="bg-orange-600 text-white">{house.energylabel}</span>)
                            : house.energylabel == 'D' ? (<span className="bg-red-600 text-white">{house.energylabel}</span>)
                            : null}
                            <span>{house.rooms} værelser • {house.size} m²</span>
                            <strong> Kr. {house.price}</strong>
                          </div>
                    </div>
                </section>
            ))}
              <button className="bg-blue-950 text-white py-4 px-8 mx-auto" onClick={() => setShowAll(!showAll)}>
               {showAll ? "Vis færre" : "Vis alle"}
           </button>
        </section>
        
    )
}