import { useState, useEffect } from "react";

import SectionHeader from "../../Components/header-components/SectionHeadder";
import { GetAllAgents } from "../../api/typicode";


export default function Agents() {

    const [agents, setAgents] = useState([]);
    const [showAll, setShowAll] = useState(null);

    useEffect(() => {
       const fetchData = async () => {
           const data = await GetAllAgents();
           setAgents(data);
       };
       fetchData();
    }, []);

    //console.log(agents);
    const displayedAgents = showAll ? agents : agents.slice(0, 3);

    return (
        <section className="agents">
           <SectionHeader
           title="Mød vores engagerede medarbejdere"
           description="Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere."
           style="section__header"
           />

           <div className="agents__list">
               {displayedAgents.map(agent => (
                   <section key={agent.id} className="agent">
                    <figure>
                        <img src={agent.image.url} alt={agent.name} />
                    </figure>
                    <div className="agent__info">
                       <h3>{agent.name}</h3>
                       <p>{agent.title}</p> 
                    </div>
                   </section>
               ))}
           </div>

           <button className="show__more__btn bg-blue-950 text-white py-4 px-8 mx-auto" onClick={() => setShowAll(!showAll)}>
               {showAll ? "Vis færre" : "Vis alle"}
           </button>
        </section>
    )
}