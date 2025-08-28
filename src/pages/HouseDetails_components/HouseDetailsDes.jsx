export default function HouseDetailsDes({ house }) {
  if (!house || !house.agent) {
    return <p>Loading…</p>; // or return null
  }

  return (
    <section className="house__description grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-bold">Beskrivelse</h3>
        <p>{house.description}</p>
      </div>

      <div className="respons__agent">
        <h3 className="font-bold">Ansvarlig mægler</h3>
        <div  className="flex gap-4 p-4 border border-[var(--lightgrey-color)]">
            <figure>
                <img
                    src={house.agent?.image?.url}
                     alt={house.agent?.name}
                />
                </figure>
            <section>
                <h3>{house.agent?.name}</h3>
                <p>{house.agent?.title}</p>
                <p>{house.agent?.phone}</p>
                <p>{house.agent?.email}</p>
            </section>
        </div>
      </div>
    </section>
  );
}
