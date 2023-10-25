import Game from '../types/Game'

export const ShortGameCard = ({ game, onShowMore }: { game: Game, onShowMore: () => void }) => {
    return (
        <div className="short-card-body">
            <div className="short-card">
                <div className="short-card-top">
                    <h2 className="short-card-name">{game.name}</h2>
                    {game?.imageLink ? <img className="short-card-circle-img" src={game.imageLink} alt="avatar_img" /> : null}
                </div>
                <div className="short-card-bottom">
                    {game.description ? <p className="short-card-info">{game.description}</p> : null }
                    <button className="btn btn-primary" onClick={onShowMore}>Ver más</button>
                </div>
            </div>
        </div>
    )
}