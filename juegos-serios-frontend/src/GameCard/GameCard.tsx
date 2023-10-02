import Game from '../types/Game'

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="card m-3">
      <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} />
        <div className="card-body">
          <h5 className="card-title text-dark">{game.name}</h5>
          <p className="card-text text-dark">{'Descripción: ' + game.description}</p>
          <p className="card-text text-dark">{game.area.reduce((str, area) => str + ' ' + area, 'Areas: ')}</p>
          <p className="card-text text-dark">{'Tiene un objetivo?: ' + (game.hasGoal ? 'Sí' : 'No')}</p>
          <p className="card-text text-dark">{'Validación de contenido: ' + game.contentValidation}</p>
          <p className="card-text text-dark">{'Observaciones y sugerencias: ' + game.observationsAndSuggestions}</p>
          <p className="card-text text-dark">{'Puntaje: ' + game.score}</p>
          <p className="card-text text-dark">{'Otro: ' + game.others}</p>
          <a href={game.link} className="btn btn-primary">Abrir pagina web</a>
        </div>
    </div>
  )
}
