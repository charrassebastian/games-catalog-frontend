import GameCard from '../GameCard/GameCard'
import Game from '../types/Game'

export function GameList({ games, isEditable }: { games: Game[], isEditable: boolean }) {
    const gameCards = games.map((game: Game) => (
        <GameCard game={game} isEditable={isEditable} key={game.name} />
    ))

    return (
        <section className='container mt-5'>
            <div className='row'>
                {gameCards}
            </div>
        </section>
    )
}
