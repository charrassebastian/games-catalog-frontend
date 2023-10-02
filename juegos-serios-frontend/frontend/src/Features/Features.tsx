export function Features() {
    return (
        <section id="features">
            <div className="container mt-5">
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 id="Features-h1">Features</h2>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <img className="icon" src="./images/easy-to-use.png" alt="Easy to use" height="180" />
                            </div>
                            <div>
                                <h3 className="fs-2 features-h3"> Fácil de usar</h3>
                                <p className="features-p-2">Estan fácil de usar que hasta tu gato puede usarlo.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <img className="icon" src="./images/crown.png" alt="Easy to use" height="180" />
                            </div>
                            <div>
                                <h3 className="fs-2 features-h3">Clientes Elite</h3>
                                <p className="features-p-2">Gamers de todo el mundo utilizan el motor de busqueda.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <img className="icon" src="./images/best-seller.png" alt="Thumb up" height="180" />
                            </div>
                            <div>
                                <h3 className="fs-2 features-h3">Busqueda Garantizada</h3>
                                <p className="features-p">Encontras lo que buscas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}