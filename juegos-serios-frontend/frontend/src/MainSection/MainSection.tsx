export function MainSection({ searchValue, onSearchValueChange, onSearch, onClear }: { searchValue: string, onSearchValueChange: (value: any) => void, onSearch: () => void, onClear: () => void }){
    return(
        <section className="gradient-background home vw-100">
            <div className="container col-xxl-8 px-3 px-md5 " >
                <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="" className="d-block mx-lg-auto img-fluid" alt="" height="200" loading="lazy" />
                    </div>
                    <div className="col-lg-6 px-3 px-md5">
                        <h1 className="display-1 fw-bold text-body-emphasis bs-light lh-1 mb-3">Juegos Serios</h1>
                        <br />
                        <h2>Encontra el juego que estas buscando.</h2>
                        <br />
                        <p>Ingresa el nombre del juego que estes buscando y luego hace click en el boton Buscar.</p>
                    </div>
                    <form className="d-flex d-grid gap-3 d-md-flex justify-content-md-start" role="search">
                        <input
                            className="form-control me-"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchValue}
                            onChange={(e) => onSearchValueChange(e.target.value)}
                        />
                        <button type="button" className="btn btn-light btn-lg px-4" onClick={onSearch}> Buscar </button>
                        <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={onClear}> Limpiar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}