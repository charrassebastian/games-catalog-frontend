import GameCard from '../GameCard/GameCard'
import Game from '../types/Game'

export function GameList({ games }: { games: Game[] }) {
    const gameCards = games.map((game: Game) => (
        <GameCard game={game} key={game.name} />
    ))

    return (
        <section className='container mt-5'>
            <div className='row'>
            {gameCards}
            </div>
        </section>
    )
}
