import Game from '../types/Game'

export function EditableCard({ game }: { game: Game }) {
    return (
        <div className="card m-3">
            <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} />
            <div className="card-body">
                <h5 className="card-title text-dark">{game.name}</h5>
                <label htmlFor='description' className="card-text text-dark">{'Descripción: ' + game.description}</label>
                <input id="description" />
                <p className="card-text text-dark">Areas:</p>
                {game.area.map((area: string) => (
                    <>
                        <label htmlFor={'area-' + area} className="card-text text-dark">{'Area: ' + area}</label>
                        <input id={'area-' + area} />
                    </>
                ))
                }
                <label htmlFor="objective" className="card-text text-dark">Tiene un objetivo?:</label>
                <input id="objective" />
                <label htmlFor="contentValidation" className="card-text text-dark">Validación de contenido:</label>
                <input id="contentValidation" />
                <label htmlFor="observationsAndSuggestions" className="card-text text-dark">Observaciones y sugerencias:</label>
                <input id="observationsAndSuggestions" />
                <label htmlFor="score" className="card-text text-dark">Puntaje:</label>
                <input id="score" />
                <label htmlFor="other" className="card-text text-dark">Otro:</label>
                <input id="other" />
                <a href={game.link} className="btn btn-primary">Abrir pagina web</a>
            </div>
        </div>
    )
}