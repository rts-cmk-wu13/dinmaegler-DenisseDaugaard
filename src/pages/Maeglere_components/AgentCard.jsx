import { GetAllAgents } from "../../api/typicode"
import { useEffect, useState } from "react"

export default function AgentCard() {

    const [agents, setAgents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAllAgents()
            setAgents(data)
        }
        fetchData()
    }, [])


    return (
       <>
        <section className="agents">
            <div className="agents__list">
                {agents.map(agent => (
                    <section key={agent.id} className="agent">
                           <figure>
                               <img src={agent.image.url} alt={agent.name} />
                           </figure>
                           <div className="agent__info">
                              <h3>{agent.name}</h3>
                              <p>{agent.title}</p> 
                              <img className="m-auto" src="./social.svg" alt={agent.name} />
                           </div>
                    </section>
                ))}
            </div>
        </section>
       </> 
    )
}