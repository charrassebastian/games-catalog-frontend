import Game from '../types/Game'
import { EditableCard } from './EditableCard'
import { emptyGame } from '../gameExamples/emptyGame'
import { useMutation } from '@tanstack/react-query'
import { baseUrl } from '../constants/url'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GameCard } from './GameCard'

export function GameList({ games, isEditable }: { games: Game[], isEditable: boolean }) {
    const [currentGames, setCurrentGames] = useState([...games])

    useEffect(() => {
        setCurrentGames([...games])
    }, [games])

    const deleteGameMutation = useMutation({
        mutationFn: (id: string) => axios.delete(baseUrl + 'game', { params: { id }, headers: { authentication: localStorage.getItem('token') } })
    })

    const onGameDelete = (id: string) => {
        deleteGameMutation.mutate(id)
        setCurrentGames(currentGames.filter(game => game._id !== id))
    }

    const handleUpdateGameList = (game: Game) => {
        setCurrentGames(currentGames.map(e => e!._id === game!._id ? game : e))
    }

    const newGame = emptyGame

    const gameCards = currentGames.map((game: Game) => (
        <GameCard game={game} isEditable={isEditable} onGameDelete={onGameDelete} onUpdateGameList={handleUpdateGameList} key={JSON.stringify(game)} />
    ))

    return (
        <section className='container my-2' id='search-results'>
            <div className='row justify-content-center'>
                {gameCards}
                { isEditable ? <EditableCard game={newGame} isNewGame={true} onGameDelete={onGameDelete} onUpdateGameList={handleUpdateGameList} /> : null }
            </div>
        </section>
    )
}
