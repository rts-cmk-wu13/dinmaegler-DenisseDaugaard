

export default function HouseDetailsHero({house}) {

    return (
           <section className="house__details__hero">
            {house && (
            <>
              {house.images?.[0] && (
                <figure className="house__details__hero">
                  <img src={house.images[0].url} alt={house.images[0].name} />
                </figure>
              )}
            </>
             )}
            </section>
    )
}