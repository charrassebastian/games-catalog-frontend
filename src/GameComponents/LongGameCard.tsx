import areas from '../constants/areas'
import markets from '../constants/markets'
import publics from '../constants/publics'
import purposes from '../constants/purposes'
import Game from '../types/Game'

export function LongGameCard({ game, isEditable, onClose, onToggleEdit }: { game: Game, isEditable: boolean, onClose: () => void, onToggleEdit: () => void }) {
    return (
        <div className="card m-3 border-rounded">
            <div className="short-card-top">
                <h2 className="short-card-name">{game.name}</h2>
                {game?.imageLink ? <div className="short-card-circle-img"><img src={game.imageLink} alt="avatar_img" /></div> : null}
            </div>
            <div className="card-body">
                <p className="card-text text-dark">{'Description: ' + game.description}</p>
                <div>
                    <h4>Areas</h4>
                    <ul>
                        {areas.filter(e => e !== 'Choose an option').map(area => {
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
                <p className="card-text text-dark">{'Choose an option: ' + (game.hasGoal ? 'Yes' : 'No')}</p>
                {game.hasGoal ? <p className="card-text text-dark">{'Goal of the game: ' + game.goal}</p> : null}
                <div>
                    <h4>Purposes</h4>
                    <ul>
                        {purposes.filter(e => e !== 'Choose an option').map(purpose => {
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
                <p className="card-text text-dark">{'Playability assessment: ' + game.playabilityEvaluation}</p>
                <p className="card-text text-dark">{'Justification of the playability assessment: ' + game.playabilityJustification}</p>
                <p className="card-text text-dark">{'Content validation: ' + game.contentValidation}</p>
                <p className="card-text text-dark">{'Observations and suggestions: ' + game.observationsAndSuggestions}</p>
                <div>
                    <h4>Markets</h4>
                    <ul>
                        {markets.filter(e => e !== 'Choose an option').map(market => {
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
                    <h4>Publics</h4>
                    <ul>
                        {publics.filter(e => e !== 'Choose an option').map(gamePublic => {
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
                <p className="card-text text-dark">{'Other: ' + game.others}</p>
                <div><a href={game.link} className="btn btn-primary mb-3">Open web page</a></div>
                <div><button className="btn btn-secondary mb-3" onClick={onClose}>Close</button></div>
                {isEditable ?
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={onToggleEdit}>Edit</button>
                    </div>
                    : null}
            </div>
        </div>
    )
}
