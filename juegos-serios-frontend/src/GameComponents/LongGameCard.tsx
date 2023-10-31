import areas from '../constants/areas'
import markets from '../constants/markets'
import publics from '../constants/publics'
import purposes from '../constants/purposes'
import Game from '../types/Game'

export function LongGameCard({ game, isEditable, onClose, onToggleEdit }: { game: Game, isEditable: boolean, onClose: () => void, onToggleEdit: () => void }) {
    return (
        <div className="card m-3">
            {game.imageLink?.length ? <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} /> : null}
            <h3 className="card-title text-dark m-3">{game.name}</h3>
            <div className="card-body">
                <p className="card-text text-dark">{'Descripción: ' + game.description}</p>
                <div>
                    <h4>Áreas</h4>
                    <ul>
                        {areas.filter(e => e !== 'Elegí una opción').map(area => {
                            const isChecked = game.area.includes(area)
                            return (
                                <li key={area}>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-area-" + area} className="form-check-label">{area}</label>
                                        <input id={"has-area-" + area} type="checkbox" className="form-check-input" checked={isChecked} readOnly />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <p className="card-text text-dark">{'Tiene un objetivo: ' + (game.hasGoal ? 'Sí' : 'No')}</p>
                {game.hasGoal ? <p className="card-text text-dark">{'Objetivo del juego: ' + game.goal}</p> : null}
                <div>
                    <h4>Propósitos</h4>
                    <ul>
                        {purposes.filter(e => e !== 'Elegí una opción').map(purpose => {
                            const isChecked = game.purpose.includes(purpose)
                            return (
                                <li key={purpose}>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-purpose-" + purpose} className="form-check-label">{purpose}</label>
                                        <input id={"has-purpose-" + purpose} type="checkbox" className="form-check-input" checked={isChecked} readOnly />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <p className="card-text text-dark">{'Evaluación de jugabilidad: ' + game.playabilityEvaluation}</p>
                <p className="card-text text-dark">{'Justificación de la evaluación de jugabilidad: ' + game.playabilityJustification}</p>
                <p className="card-text text-dark">{'Validación de contenido: ' + game.contentValidation}</p>
                <p className="card-text text-dark">{'Observaciones y sugerencias: ' + game.observationsAndSuggestions}</p>
                <div>
                    <h4>Mercados</h4>
                    <ul>
                        {markets.filter(e => e !== 'Elegí una opción').map(market => {
                            const isChecked = game.scope.market.includes(market)
                            return (
                                <li key={market}>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-market-" + market} className="form-check-label">{market}</label>
                                        <input id={"has-market-" + market} type="checkbox" className="form-check-input" checked={isChecked} readOnly />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <div>
                    <h4>Públicos</h4>
                    <ul>
                        {publics.filter(e => e !== 'Elegí una opción').map(gamePublic => {
                            const isChecked = game.scope.public.includes(gamePublic)
                            return (
                                <li key={gamePublic}>
                                    <div className="form-check mb-3">
                                        <label htmlFor={"has-public-" + gamePublic} className="form-check-label">{gamePublic}</label>
                                        <input id={"has-public-" + gamePublic} type="checkbox" className="form-check-input" checked={isChecked} readOnly />
                                    </div>
                                </li>)
                        })
                        }
                    </ul>
                </div>
                <p className="card-text text-dark">{'Otro: ' + game.others}</p>
                <div><a href={game.link} className="btn btn-primary mb-3">Abrir página web</a></div>
                <div><button className="btn btn-secondary mb-3" onClick={onClose}>Cerrar</button></div>
                {isEditable ?
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={onToggleEdit}>Editar</button>
                    </div>
                    : null}
            </div>
        </div>
    )
}