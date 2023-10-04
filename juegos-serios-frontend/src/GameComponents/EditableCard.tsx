import Game from '../types/Game'
import React, { useState } from 'react'

export function EditableCard({ game, isNewGame }: { game: Game, isNewGame?: boolean }) {
    console.log(isNewGame)
    const [gameName, setGameName] = useState(game.name)
    const [description, setDescription] = useState(game.description)
    // const [areas, setAreas] = useState(game.area)
    const [newArea, setNewArea] = useState("")
    const [hasGoal, setHasGoal] = useState(game.hasGoal)
    const [contentValidation, setContentValidation] = useState(game.contentValidation)
    const [observationsAndSuggestions, setObservationsAndSuggestions] = useState(game.observationsAndSuggestions)
    const [score, setScore] = useState(game.score)
    const [others, setOthers] = useState(game.others)
    const [link, setLink] = useState(game.link)
    const [imageLink, setImageLink] = useState(game.imageLink)
    // const [market, setMarket] = useState(game.scope.market)
    // const [gamePublic, setGamePublic] = useState(game.scope.public)

    const onGameNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setGameName(e.target.value)
    const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)
    // const onAreasChange = (e: React.ChangeEvent<HTMLInputElement>) => setAreas(e.target.value)
    const onNewAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewArea(e.target.value)
    const onHasGoalChange = () => setHasGoal(!hasGoal)
    const onContentValidationChange = (e: React.ChangeEvent<HTMLInputElement>) => setContentValidation(e.target.value)
    const onObservationsAndSuggestionsChange = (e: React.ChangeEvent<HTMLInputElement>) => setObservationsAndSuggestions(e.target.value)
    const onScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => setScore(parseInt(e.target.value))
    const onOthersChange = (e: React.ChangeEvent<HTMLInputElement>) => setOthers(e.target.value)
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)
    const onImageLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => setImageLink(e.target.value)
    // const onMarketChange = (e: React.ChangeEvent<HTMLInputElement>) => setMarket(e.target.value)
    // const onGamePublicChange = (e: React.ChangeEvent<HTMLInputElement>) => setGamePublic(e.target.value)

    // TODO: add the form style
    return (
        <div className="card m-3">
            <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} />
            <h3 className="card-title text-dark m-3">{game.name}</h3>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor={'name-' + game.name} className="form-label">Nombre:</label>
                        <input id={"name-" + game.name} type="text" className="form-control" value={gameName} onChange={onGameNameChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={'description-' + game.name} className="form-label">Descripción:</label>
                        <input id={"description-" + game.name} type="text" className="form-control" value={description} onChange={onDescriptionChange} />
                    </div>
                    {/* {game.area.map((area: string) => (
                    <div key={area} className="mb-3">
                        <label htmlFor={'area-' + area} className="form-label">Area:</label>
                        <input id={'area-' + area} type="text" className="form-control" value={area} onChange={} />
                        <button type="button" className="btn btn-danger">Borrar area</button>
                    </div>
                    ))
                    } */}
                    <div className="mb-3">
                        <label htmlFor={'newArea-' + game.name} className="form-label">Nueva area</label>
                        <input id={'newArea-' + game.name} type="text" className="form-control" value={newArea} onChange={onNewAreaChange} />
                    </div>
                    <button type="button" className="btn btn-primary mb-3">Agregar area</button>
                    <div className="form-check mb-3">
                        <label htmlFor={"has-goal-" + game.name} className="form-check-label">Tiene un objetivo?</label>
                        <input id={"has-goal-" + game.name} type="checkbox" className="form-check-input" checked={hasGoal} onChange={onHasGoalChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={"content-validation-" + game.name} className="form-label">Validación de contenido:</label>
                        <input id={"content-validation-" + game.name} type="text" className="form-control" value={contentValidation} onChange={onContentValidationChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={"observations-and-suggestions-" + game.name} className="form-label">Observaciones y sugerencias:</label>
                        <input id={"observations-and-suggestions-" + game.name} type="text" className="form-control" value={observationsAndSuggestions} onChange={onObservationsAndSuggestionsChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={"score-" + game.name} className="form-label">Puntaje:</label>
                        <input id={"score-" + game.name} type="number" className="form-control" value={score} onChange={onScoreChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={"other-" + game.name} className="form-label">Otro:</label>
                        <input id={"other-" + game.name} type="text" className="form-control" value={others} onChange={onOthersChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={"game-url-" + game.name} className="form-label">URL del juego:</label>
                        <input id={"game-url-" + game.name} type="text" className="form-control" value={link} onChange={onLinkChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={"image-url-" + game.name} className="form-label">URL de la imagen:</label>
                        <input id={"image-url-" + game.name} type="text" className="form-control" value={imageLink} onChange={onImageLinkChange} />
                    </div>
                    {/* {game.scope.market.map((market: string) => (
                    <div key={market} className="mb-3">
                        <label htmlFor={'market-' + market} className="form-label">Mercado:</label>
                        <input id={'market-' + market} type="text" className="form-control" value={market} onChange={} />
                        <button type="button" className="btn btn-danger">Borrar mercado</button>
                    </div>
                ))
                } */}
                    {/* {game.scope.public.map((gamePublic: string) => (
                    <div key={gamePublic} className="mb-3">
                        <label htmlFor={'public-' + gamePublic} className="form-label">Público:</label>
                        <input id={'public-' + gamePublic} type="text" className="form-control" value={gamePublic} onChange={} />
                        <button type="button" className="btn btn-danger">Borrar público</button>
                    </div>
                ))
                } */}
                    <button type="button" className="btn btn-danger">Borrar juego</button>
                </form>
            </div>
        </div>
    )
}