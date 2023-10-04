import GameCard from './GameCard'
import Game from '../types/Game'
import { EditableCard } from './EditableCard'
import { emptyGame } from '../../examples/emptyGame'

export function GameList({ games, isEditable }: { games: Game[], isEditable: boolean }) {
    const gameCards = games.map((game: Game) => (
        <GameCard game={game} isEditable={isEditable} key={game.name} />
    ))

    const newGame = emptyGame

    return (
        <section className='container mt-5'>
            <div className='row'>
                {gameCards}
                { isEditable ? <EditableCard game={newGame} isNewGame={true} /> : null }
            </div>
        </section>
    )
}
