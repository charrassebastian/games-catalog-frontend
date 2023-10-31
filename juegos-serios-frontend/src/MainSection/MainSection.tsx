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
    return (
        <section className="gradient-background home">
            <div className="container col-xxl-8 px-3 px-md5 " >
                <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
                    <div className="px-3 px-md5">
                        <h1 className="display-1 fw-bold text-body-emphasis bs-light lh-1 m-3">Juegos Serios</h1>
                        <br />
                        <h2 className="introductory-text m-3">Un juego serio es un juego en el que la educación -en&nbsp;sus diversas formas- es el objetivo principal, más que el entretenimiento (Michael y Chen, 2006).</h2>
                        <br />
                        <p className="introductory-text m-3">Encontrá el juego que estás buscando en la lista que aparecerá al hacer clic en el botón 'Buscar'. Adicionalmente podrás seleccionar opciones en los filtros o ingresar palabras.</p>
                    </div>
                    <form className="d-flex flex-column d-grid gap-3 d-md-flex justify-content-md-start" role="search" onSubmit={(e) => e.preventDefault()}>
                    <label className='introductory-text m-3'>Filtrar por:</label>
                    <div className="d-flex flex-row flex-wrap">
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <label className='introductory-text label-dropdown-toggle'>Área</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="area-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {area?.length ? area : "Elegí una opción"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="area-dropdown-menu-link">
                                        {areas.map(area => (
                                            <li key={area}>
                                                <a className="dropdown-item" onClick={() => onAreaChange(area)}>
                                                    {area}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <label className='introductory-text label-dropdown-toggle'>Propósito</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="purpose-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {purpose?.length ? purpose : "Elegí una opción"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="purpose-dropdown-menu-link">
                                        {purposes.map(purpose => (
                                            <li key={purpose}>
                                                <a className="dropdown-item" onClick={() => onPurposeChange(purpose)}>
                                                    {purpose}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <label className='introductory-text label-dropdown-toggle'>Mercado</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="market-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {market?.length ? market : "Elegí una opción"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="market-dropdown-menu-link">
                                        {markets.map(market => (
                                            <li key={market}>
                                                <a className="dropdown-item" onClick={() => onMarketChange(market)}>
                                                    {market}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <label className='introductory-text label-dropdown-toggle'>Público</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="game-public-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {gamePublic?.length ? gamePublic : "Elegí una opción"}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="game-public-dropdown-menu-link">
                                        {publics.map(gamePublic => (
                                            <li key={gamePublic}>
                                                <a className="dropdown-item" onClick={() => onGamePublicChange(gamePublic)}>
                                                    {gamePublic}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form-check m-3">
                                <label htmlFor={"only-validated-content"} className="form-check-label text-white">Incluir solo contenido validado</label>
                                <input id={"only-validated-content"} type="checkbox" className="form-check-input" checked={onlyValidatedContent} onChange={onOnlyValidatedContentChange} />
                            </div>
                        <div className="d-flex flex-row flex-wrap">
                            <label className='introductory-text  palabras-reservadas'>Palabras relevantes</label>
                            <input
                                className="form-control m-3"
                                type="search"
                                placeholder='Ejemplo: Plague Inc. (para buscar Plague y/o Inc.) o "Plague Inc." (para buscar Plague Inc.)'    
                                aria-label="Search"
                                value={searchValue}
                                onChange={onSearchValueChange}
                            />
                            <button type="button" className="btn btn-light btn-lg px-4 m-3" onClick={onSearch}>Buscar</button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4 m-3" onClick={onClear}>Limpiar</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </section>
    )
}
