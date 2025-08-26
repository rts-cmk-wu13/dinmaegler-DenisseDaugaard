export default function Hero() {

    return (
        <section className="hero">
            <figure className="hero__container">
                <img className="hero__img" src="./hero.jpg" alt="image hero" />
            </figure>
            <div className="search__home absolute text-5xl font-bold">
                <h1 className="text-white">Søg efter din drømmebolig</h1>
                <form action="" className="search__form p-10 bg-white text-lg font-normal text-left">
                    <h2>Søg blandt 158 boliger til salg i 74 butikker </h2>
                    <p>Hvad skal din næste bolig indeholde</p>

                    <input className="search__input border" type="search" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" />
                    <button className="search__btn text-white p-2 rounded" type="submit">Søg</button>
                </form>
            </div>

        </section>
    )
}