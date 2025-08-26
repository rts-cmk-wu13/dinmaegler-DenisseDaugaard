
export default function MainInfo() {

    return (
        <section className="danish__home">
          <div className="marketing__info flex gap-10 border-b-1">
            <figure className="danish__home__container">
                <img className="danish__home__img" src="./danish_home.png" alt="" />
            </figure>
            <section >
                <h2 className="text-2xl font-semibold">Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                <h6>Det synes vi siger noget om os!</h6>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <div>
                    <div>
                        <img className="danish__home__icon "src="./sold.svg" alt="house icon" />
                        <p><strong>4829</strong> boliger solgt</p>
                    </div>
                    <div>
                        <img className="danish__home__icon "src="./for_sale.svg" alt="house icon" />
                        <p><strong>158</strong> boliger til salg</p>
                    </div>
                </div>
            </section>
          </div>

          <div className="marketing__info__spects flex">
                <div>
                    <img className="danish__home__icon "src="./icon1.svg" alt="house icon" />
                    <p><strong>Bestil et salgstjek</strong>Med et Din Mægler Salgstjek 
                        bliver du opdateret på værdien 
                        af din bolig.</p>
                </div>
                <div>
                    <img className="danish__home__icon "src="./icon2.svg" alt="house icon" />
                    <p><strong>74 butikker</strong>Hos Din Mægler er din bolig 
                    til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                </div>
                <div>
                    <img className="danish__home__icon "src="./icon3.svg" alt="house icon" />
                    <p><strong>Tilmeld køberkartotek</strong> Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                </div>
          </div>
        </section>
    )
}