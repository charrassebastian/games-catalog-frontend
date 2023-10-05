import Game from '../types/Game'

export function InformationCard({ game, isEditable, onToggleEdit }: { game: Game, isEditable: boolean, onToggleEdit: () => void }) {
    return (
        <div className="card m-3">
            {game.imageLink?.length ? <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} /> : null}
            <h3 className="card-title text-dark m-3">{game.name}</h3>
            <div className="card-body">
                <p className="card-text text-dark">{'Descripción: ' + game.description}</p>
                <p className="card-text text-dark">{game.area.reduce((str, area) => str + ' ' + area, 'Areas: ')}</p>
                <p className="card-text text-dark">{'Tiene un objetivo?: ' + (game.hasGoal ? 'Sí' : 'No')}</p>
                <p className="card-text text-dark">{'Validación de contenido: ' + game.contentValidation}</p>
                <p className="card-text text-dark">{'Observaciones y sugerencias: ' + game.observationsAndSuggestions}</p>
                <p className="card-text text-dark">{'Puntaje: ' + game.score}</p>
                <p className="card-text text-dark">{game.scope.market.reduce((str, mercado) => str + ' ' + mercado, 'Mercados: ')}</p>
                <p className="card-text text-dark">{game.scope.public.reduce((str, gamePublic) => str + ' ' + gamePublic, 'Público: ')}</p>
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