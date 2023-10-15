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
    onPurposeChange: (purpose: string) => void,
    market: string,
    onMarketChange: (market: string) => void,
    gamePublic: string,
    onGamePublicChange: (gamePublic: string) => void
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
                        <h1 className="display-1 fw-bold text-body-emphasis bs-light lh-1 m-3">Juegos Serios</h1>
                        <br />
                        <h2 className="introductory-text m-3">Encontra el juego que estas buscando.</h2>
                        <br />
                        <p className="introductory-text m-3">Ingresa el nombre del juego que estes buscando y luego hace click en el boton Buscar.</p>
                    </div>
                    <form className="d-flex flex-column d-grid gap-3 d-md-flex justify-content-md-start" role="search" onSubmit={(e) => e.preventDefault()}>
                        <div className="d-flex flex-row">
                            <input
                                className="form-control m-3"
                                type="search"
                                placeholder="Search"    
                                aria-label="Search"
                                value={searchValue}
                                onChange={onSearchValueChange}
                            />
                            <button type="button" className="btn btn-light btn-lg px-4 m-3" onClick={onSearch}> Buscar </button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4 m-3" onClick={onClear}> Limpiar</button>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="form-check m-3">
                                <label htmlFor={"only-validated-content"} className="form-check-label text-white">Incluir solo contenido validado?</label>
                                <input id={"only-validated-content"} type="checkbox" className="form-check-input" checked={onlyValidatedContent} onChange={onOnlyValidatedContentChange} />
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-secondary dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="area-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {area?.length ? area : "Filtrar por area"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="area-dropdown-menu-link">
                                        {areas.map(area => (
                                            <li key={area}>
                                                <a className="dropdown-item" href="#" onClick={() => onAreaChange(area)}>
                                                    {area}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-secondary dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="purpose-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {purpose?.length ? purpose : "Filtrar por proposito"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="purpose-dropdown-menu-link">
                                        {purposes.map(purpose => (
                                            <li key={purpose}>
                                                <a className="dropdown-item" href="#" onClick={() => onPurposeChange(purpose)}>
                                                    {purpose}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-secondary dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="market-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {market?.length ? market : "Filtrar por mercado"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="market-dropdown-menu-link">
                                        {markets.map(market => (
                                            <li key={market}>
                                                <a className="dropdown-item" href="#" onClick={() => onMarketChange(market)}>
                                                    {market}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <a
                                        className="btn btn-secondary dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="game-public-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {gamePublic?.length ? gamePublic : "Filtrar por publico"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="game-public-dropdown-menu-link">
                                        {publics.map(gamePublic => (
                                            <li key={gamePublic}>
                                                <a className="dropdown-item" href="#" onClick={() => onGamePublicChange(gamePublic)}>
                                                    {gamePublic}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}