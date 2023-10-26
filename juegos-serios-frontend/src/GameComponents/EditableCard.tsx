import areas from '../constants/areas'
import markets from '../constants/markets'
import publics from '../constants/publics'
import purposes from '../constants/purposes'
import Game from '../types/Game'
import React, { useState } from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { baseUrl } from '../constants/url'

import Popup from '../Popup/popup'

export function EditableCard({ game, isNewGame, onGameDelete, onToggleEdit }: { game: Game, isNewGame?: boolean, onGameDelete: (id: string) => void, onToggleEdit?: () => void }) {
    const [gameName, setGameName] = useState(game.name)
    const [description, setDescription] = useState(game.description)
    const [gameAreas, setGameAreas] = useState(game.area)
    const [gamePurposes, setGamePurposes] = useState(game.purpose)
    const [hasGoal, setHasGoal] = useState(game.hasGoal)
    const [contentValidation, setContentValidation] = useState(game.contentValidation)
    const [observationsAndSuggestions, setObservationsAndSuggestions] = useState(game.observationsAndSuggestions)
    const [score, setScore] = useState(game.score)
    const [others, setOthers] = useState(game.others)
    const [link, setLink] = useState(game.link)
    const [imageLink, setImageLink] = useState(game.imageLink)
    const [gameMarkets, setGameMarkets] = useState(game.scope.market)
    const [gamePublics, setGamePublics] = useState(game.scope.public)

    const [isOpen, setIsOpen] = useState(!isNewGame);

    const onGameNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setGameName(e.target.value)
    const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)
    const onHasGoalChange = () => setHasGoal(!hasGoal)
    const onContentValidationChange = (e: React.ChangeEvent<HTMLInputElement>) => setContentValidation(e.target.value)
    const onObservationsAndSuggestionsChange = (e: React.ChangeEvent<HTMLInputElement>) => setObservationsAndSuggestions(e.target.value)
    const onScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => setScore(parseInt(e.target.value))
    const onOthersChange = (e: React.ChangeEvent<HTMLInputElement>) => setOthers(e.target.value)
    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => setLink(e.target.value)
    const onImageLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => setImageLink(e.target.value)

    const onAreaToggle = (area: string) => {
        if (gameAreas.includes(area)) {
            setGameAreas(gameAreas.filter(e => e !== area))
        } else {
            setGameAreas([...gameAreas, area])
        }
    }

    const onPurposeToggle = (purpose: string) => {
        if (gamePurposes.includes(purpose)) {
            setGamePurposes(gamePurposes.filter(e => e !== purpose))
        } else {
            setGamePurposes([...gamePurposes, purpose])
        }
    }

    const onMarketToggle = (market: string) => {
        if (gameMarkets.includes(market)) {
            setGameMarkets(gameMarkets.filter(e => e !== market))
        } else {
            setGameMarkets([...gameMarkets, market])
        }
    }

    const onPublicToggle = (gamePublic: string) => {
        if (gamePublics.includes(gamePublic)) {
            setGamePublics(gamePublics.filter(e => e !== gamePublic))
        } else {
            setGamePublics([...gamePublics, gamePublic])
        }
    }

    const editedGame = {
        _id: game._id,
        name: gameName,
        area: gameAreas,
        purpose: gamePurposes,
        scope: {
            market: gameMarkets,
            public: gamePublics
        },
        hasGoal,
        description,
        link,
        contentValidation,
        observationsAndSuggestions,
        score,
        imageLink,
        others
    }

    const updateGameMutation = useMutation({
        mutationFn: () => axios.put(baseUrl + 'game', { game: editedGame }, { params: { id: game._id }, headers: { authentication: localStorage.getItem('token') } })
    })
    const createGameMutation = useMutation({
        mutationFn: (game: Game) => axios.post(baseUrl + 'game', { game }, { headers: { authentication: localStorage.getItem('token') }})
    })

    const onGameUpdate = () => {
        updateGameMutation.mutate()
        closePopup()
    }

    const onGameCreate = (game: Game) => {
        createGameMutation.mutate(game)
        closePopup()
    }

    const closePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isNewGame ? <button className='btn btn-primary w-75 m-3' onClick={() => setIsOpen(true)}>Agregar juego</button> : null}
            <Popup isOpen={isOpen}>
                <div className="card m-3">
                    {game.imageLink?.length ? <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} /> : null}
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
                            <div>
                                <h4>Áreas</h4>
                                <ul className="checkList">
                                    {areas.map(area => {
                                        const isChecked = gameAreas.includes(area)
                                        return (
                                            <li key={area}>
                                                <div className="form-check mb-3">
                                                    <label htmlFor={"has-area-" + area} className="form-check-label">{area}</label>
                                                    <input id={"has-area-" + area} type="checkbox" className="form-check-input" checked={isChecked} onChange={() => onAreaToggle(area)} />
                                                </div>
                                            </li>)
                                    })
                                    }
                                </ul>
                            </div>
                            <div className="form-check mb-3">
                                <label htmlFor={"has-goal-" + game.name} className="form-check-label">Tiene un objetivo?</label>
                                <input id={"has-goal-" + game.name} type="checkbox" className="form-check-input" checked={hasGoal} onChange={onHasGoalChange} />
                            </div>
                            <div>
                                <h4>Propósitos</h4>
                                <ul className="checkList">
                                    {purposes.map(purpose => {
                                        const isChecked = gamePurposes.includes(purpose)
                                        return (
                                            <li key={purpose}>
                                                <div className="form-check mb-3">
                                                    <label htmlFor={"has-purpose-" + purpose} className="form-check-label">{purpose}</label>
                                                    <input id={"has-purpose-" + purpose} type="checkbox" className="form-check-input" checked={isChecked} onChange={() => onPurposeToggle(purpose)} />
                                                </div>
                                            </li>)
                                    })
                                    }
                                </ul>
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
                            <div>
                                <h4>Mercados</h4>
                                <ul className="checkList">
                                    {markets.map(market => {
                                        const isChecked = gameMarkets.includes(market)
                                        return (
                                            <li key={market}>
                                                <div className="form-check mb-3">
                                                    <label htmlFor={"has-market-" + market} className="form-check-label">{market}</label>
                                                    <input id={"has-market-" + market} type="checkbox" className="form-check-input" checked={isChecked} onChange={() => onMarketToggle(market)} />
                                                </div>
                                            </li>)
                                    })
                                    }
                                </ul>
                            </div>
                            <div>
                                <h4>Publicos</h4>
                                <ul className="checkList">
                                    {publics.map(gamePublic => {
                                        const isChecked = gamePublics.includes(gamePublic)
                                        return (
                                            <li key={gamePublic}>
                                                <div className="form-check mb-3">
                                                    <label htmlFor={"has-public-" + gamePublic} className="form-check-label">{gamePublic}</label>
                                                    <input id={"has-public-" + gamePublic} type="checkbox" className="form-check-input" checked={isChecked} onChange={() => onPublicToggle(gamePublic)} />
                                                </div>
                                            </li>)
                                    })
                                    }
                                </ul>
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
                            {!isNewGame ? <div><button type="button" className="btn btn-danger mb-3" onClick={() => onGameDelete(String(game._id))}>Borrar juego</button></div> : null}
                            <div>
                                {!isNewGame ?
                                    <>
                                        <div className="mb-3"><button type="button" className="btn btn-primary" onClick={() => onGameUpdate()}>Actualizar juego</button></div>
                                        <div><button type="button" className="btn btn-secondary" onClick={onToggleEdit}>Dejar de editar</button></div>
                                    </>
                                    :
                                    <>
                                        <div className="mb-3"><button type="button" className="btn btn-primary" onClick={() => onGameCreate(editedGame)}>Guardar juego</button></div>
                                        <div><button type="button" className="btn btn-secondary" onClick={closePopup}>Cerrar</button></div>
                                    </>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>
        </>
    )
}