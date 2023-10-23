export function Features() {
    return (
        <section id="features">
            <div className="container mt-5">
                <div className="container px-4 py-5" id="hanging-icons">
                    <h2 id="Features-h1">Qué ofrece:</h2>
                    <div className="contenedorFeatures d-flex justify-content-around">
                        <div className="d-flex justify-content-between">
                            <div className="textoFeatures">
                                <h3 className="fs-2 features-h3">Facilidad de uso</h3>
                                <p className="features-p-2">Con solo escribir lo que buscás y presionar el botón de búsqueda vas a poder ver los resultados</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="textoFeatures">
                                <h3 className="fs-2 features-h3">Variedad</h3>
                                <p className="features-p-2">Podés buscar juegos de distintas áreas</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="textoFeatures">
                                <h3 className="fs-2 features-h3">Busqueda avanzada</h3>
                                <p className="features-p">Podés usar los filtros para encontrar lo que estás buscando</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}