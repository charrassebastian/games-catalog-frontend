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
                <div className="row flex-lg-row-reverse align-items-center pt-5">
                    <div className="px-3 px-md5">
                        <div className='tituloYgif'>
                            <h1 className="dorado display-1 fw-bold bs-light m-3">Games Catalog</h1>
                        </div>                        
                        <br />
                        <p className="introductory-text m-3">Find the game you are looking for. First, if you want, you will be able to choose options on the filters or enter keywords. When clicking on the "Search" button a results list will appear. If no option if picked in the filters and no keywords are entered, the complete list will appear.</p>
                    </div>
                    <form className="d-flex flex-column d-grid d-md-flex justify-content-md-start" role="search" onSubmit={(e) => e.preventDefault()}>
                    <label className='introductory-text mx-3'>Filter by:</label>
                    <div className="d-flex flex-row flex-wrap">
                            <div className="btn-group m-3">
                                <div className="dropdown">
                                    <label className='introductory-text label-dropdown-toggle'>Area</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="area-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {area?.length ? area : "Choose an option"}
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
                                    <label className='introductory-text label-dropdown-toggle'>Purpose</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="purpose-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {purpose?.length ? purpose : "Choose an option"}
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
                                    <label className='introductory-text label-dropdown-toggle'>Market</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="market-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {market?.length ? market : "Choose an option"}
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
                                    <label className='introductory-text label-dropdown-toggle'>Public</label>
                                    <a
                                        className="btn btn-light dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="game-public-dropdown-menu-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {gamePublic?.length ? gamePublic : "Choose an option"}
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
                                <label htmlFor={"only-validated-content"} className="form-check-label text-white">Only include validated content</label>
                                <input id={"only-validated-content"} type="checkbox" className="form-check-input" checked={onlyValidatedContent} onChange={onOnlyValidatedContentChange} />
                            </div>
                        <div className="d-flex flex-row flex-wrap">
                            <label className='introductory-text m-3 mb-0 palabras-reservadas'>Keywords</label>
                            <input
                                className="form-control m-3 mt-0 mb-1"
                                type="search"
                                aria-label="search"
                                value={searchValue}
                                onChange={onSearchValueChange}
                            />
                            <div className="d-flex flex-column">
                                <p className="mx-3 text-white">Example: <i><b>Plague Inc.</b></i> (to find <i><b>Plague</b></i> and/or <i><b>Inc.</b></i>) or <i><b>"Plague Inc."</b></i> (to find <i><b>Plague Inc.</b></i>)</p>
                                <div>
                                    <button type="button" className="btn btn-light btn-lg px-4 m-3" onClick={onSearch}>Search</button>
                                    <button type="button" className="btn btn-outline-light btn-lg px-4 m-3" onClick={onClear}>Clean</button>
                                </div>
                            </div>
                            
                        </div>                        
                    </form>
                </div>
            </div>
        </section>
    )
}
