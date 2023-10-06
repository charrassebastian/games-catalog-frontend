import areas from '../constants/areas'
import markets from '../constants/markets'
import publics from '../constants/publics'
import purposes from '../constants/purposes'
import Game from '../types/Game'

export function InformationCard({ game, isEditable, onToggleEdit }: { game: Game, isEditable: boolean, onToggleEdit: () => void }) {
    return (
        <div className="card m-3">
            {game.imageLink?.length ? <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} /> : null}
            <h3 className="card-title text-dark m-3">{game.name}</h3>
            <div className="card-body">
                <p className="card-text text-dark">{'Descripción: ' + game.description}</p>
                <div>
                    <h4>Areas</h4>
                    <ul>
                        {areas.map(area => {
                            const isChecked = game.area.includes(area)
                            return (
                                <li>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-area-" + area} className="form-check-label">{area}</label>
                                        <input id={"has-area-" + area} type="checkbox" className="form-check-input" checked={isChecked} />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <p className="card-text text-dark">{'Tiene un objetivo?: ' + (game.hasGoal ? 'Sí' : 'No')}</p>
                <div>
                    <h4>Propositos</h4>
                    <ul>
                        {purposes.map(purpose => {
                            const isChecked = game.purpose.includes(purpose)
                            return (
                                <li>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-purpose-" + purpose} className="form-check-label">{purpose}</label>
                                        <input id={"has-purpose-" + purpose} type="checkbox" className="form-check-input" checked={isChecked} />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <p className="card-text text-dark">{'Validación de contenido: ' + game.contentValidation}</p>
                <p className="card-text text-dark">{'Observaciones y sugerencias: ' + game.observationsAndSuggestions}</p>
                <p className="card-text text-dark">{'Puntaje: ' + game.score}</p>
                <div>
                    <h4>Mercados</h4>
                    <ul>
                        {markets.map(market => {
                            const isChecked = game.scope.market.includes(market)
                            return (
                                <li>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-market-" + market} className="form-check-label">{market}</label>
                                        <input id={"has-market-" + market} type="checkbox" className="form-check-input" checked={isChecked} />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <div>
                    <h4>Publicos</h4>
                    <ul>
                        {publics.map(gamePublic => {
                            const isChecked = game.scope.public.includes(gamePublic)
                            return (
                                <li>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-public-" + gamePublic} className="form-check-label">{gamePublic}</label>
                                        <input id={"has-public-" + gamePublic} type="checkbox" className="form-check-input" checked={isChecked} />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <p className="card-text text-dark">{'Otro: ' + game.others}</p>
                <a href={game.link} className="btn btn-primary mb-3">Abrir página web</a>
                {isEditable ?
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={onToggleEdit}>Editar</button>
                    </div>
                    : null}

            </div>
        </div>
    )
}