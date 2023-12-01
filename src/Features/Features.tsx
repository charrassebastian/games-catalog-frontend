export function Features() {
    return (
        <section id="features" className="my-5">
            <div className="container px-4 pb-2" id="hanging-icons">
                <h2 id="Features-h1">Features:</h2>
                <div className="contenedorFeatures d-flex justify-content-around">
                    <div className="d-flex justify-content-between">
                        <div className="textoFeatures">
                            <h3 className="fs-2 features-h3">Easy of use</h3>
                            <p className="features-p-2">With just writing what you want and pressing the search button you will be able to see the results</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="textoFeatures">
                            <h3 className="fs-2 features-h3">Variety</h3>
                            <p className="features-p-2">You can find games with different topics</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="textoFeatures">
                            <h3 className="fs-2 features-h3">Advanced search</h3>
                            <p className="features-p">You can use the filter to find what you want</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
