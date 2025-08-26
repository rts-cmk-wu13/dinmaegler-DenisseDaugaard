
export default function MainInfo() {

    return (
        <section className="danish__home">
          <div className="marketing__info flex gap-10 border-b-1">
            <figure className="danish__home__container">
                <img className="danish__home__img" src="./danish_home.png" alt="" />
            </figure>
            <section >
                <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                <h6>Det synes vi siger noget om os!</h6>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                <div>
                    <div>
                        <img className="danish__home__icon "src="./sold.svg" alt="house icon" />
                        <p><span>4829</span> boliger solgt</p>
                    </div>
                    <div>
                        <img className="danish__home__icon "src="./for_sale.svg" alt="house icon" />
                        <p><span>158</span> boliger til salg</p>
                    </div>
                </div>
            </section>
          </div>
          <div>

          </div>
        </section>
    )
}