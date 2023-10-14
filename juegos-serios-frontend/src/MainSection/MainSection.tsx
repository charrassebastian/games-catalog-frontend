import areas from '../constants/areas'
import markets from '../constants/markets'
import publics from '../constants/publics'
import purposes from '../constants/purposes'

export function MainSection({ onSearch, onClear, searchValue, onSearchValueChange, onlyValidatedContent, onOnlyValidatedContentChange, area, onAreaChange, purpose, onPurposeChange, market, onMarketChange, gamePublic, onGamePublicChange }: {
    onSearch: () => void,
    onClear: () => void,
    searchValue: string,
    onSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onlyValidatedContent: boolean,
    onOnlyValidatedContentChange: () => void,
    area: string,
    onAreaChange: (area: string) => void,
    purpose: string,
    onPurposeChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    market: string,
    onMarketChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    gamePublic: string,
    onGamePublicChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    // TODO: add all the inputs for the filters and check that they work
    return (
        <section className="gradient-background home vw-100">
            <div className="container col-xxl-8 px-3 px-md5 " >
                <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="" className="d-block mx-lg-auto img-fluid" alt="" height="200" loading="lazy" />
                    </div>
                    <div className="col-lg-6 px-3 px-md5">
                        <h1 className="display-1 fw-bold text-body-emphasis bs-light lh-1 mb-3">Juegos Serios</h1>
                        <br />
                        <h2 className="introductory-text">Encontra el juego que estas buscando.</h2>
                        <br />
                        <p className="introductory-text">Ingresa el nombre del juego que estes buscando y luego hace click en el boton Buscar.</p>
                    </div>
                    <form className="d-flex d-grid gap-3 d-md-flex justify-content-md-start" role="search" onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="form-control me-"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchValue}
                            onChange={onSearchValueChange}
                        />
                        <button type="button" className="btn btn-light btn-lg px-4" onClick={onSearch}> Buscar </button>
                        <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={onClear}> Limpiar</button>
                        <div className="form-check mb-3">
                            <label htmlFor={"has-goal"} className="form-check-label">Tiene un objetivo?</label>
                            <input id={"has-goal"} type="checkbox" className="form-check-input" checked={onlyValidatedContent} onChange={onOnlyValidatedContentChange} />
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor={"area" + game.name} className="form-label">Puntaje:</label>
                            <input id={"area" + game.name} type="number" className="form-control" value={score} onChange={onScoreChange} />
                        </div> */}
                        <div className="btn-group">
                            <div className="dropdown">
                                <a
                                    className="btn btn-secondary dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {area}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {areas.map(area => (
                                        <li key={area}>
                                            <a className="dropdown-item" href="#" onClick={() => onAreaChange(area)}>
                                                {area?.length ? area : "Filter by area"}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}