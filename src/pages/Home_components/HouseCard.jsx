export default function HouseCard({ house }) {

    return (
        <section className="house" key={house.id}>
            <figure>
                <img src={house.images[0].url} alt={house.images[0].name} />
            </figure>
            <div className="house__info">
                <h2>{house.adress1}</h2>
                <p>{house.city}</p>
                <span className="border-b-1">
                    <strong>{house.type}</strong> • Ejerudgift : {house.cost} kr.
                </span>
                <div className="house__spect">
                    {house.energylabel === "A" ? (
                        <span className="bg-green-600 text-white">{house.energylabel}</span>
                    ) : house.energylabel === "B" ? (
                        <span className="bg-yellow-600 text-white">{house.energylabel}</span>
                    ) : house.energylabel === "C" ? (
                        <span className="bg-orange-600 text-white">{house.energylabel}</span>
                    ) : house.energylabel === "D" ? (
                        <span className="bg-red-600 text-white">{house.energylabel}</span>
                    ) : null}

                    <span>
                        {house.rooms} værelser • {house.size} m²
                    </span>
                    <strong> Kr. {house.price.toLocaleString("da-DK")}</strong>
                </div>
            </div>
        </section>
    )
}