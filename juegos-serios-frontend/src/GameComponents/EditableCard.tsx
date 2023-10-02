import Game from '../types/Game'

export function EditableCard({ game }: { game: Game }) {
    // TODO:
    // allow the user to add areas
    // allow the user to remove areas
    // allow the user to edit the missing fields
    // improve the design
    // interact with the server

    console.log(game.imageLink)

    return (
        <div className="card m-3">
            { game.imageLink?.length ? <img src={game.imageLink} className="card-img-top text-dark" alt={game.name} /> : null }
            <div className="card-body">
                <h5 className="card-title text-dark">{game.name}</h5>
                <label htmlFor={'name-' + game.name} className="form-label">Nombre:</label>
                <input id={"name" + game.name} type="text" className="form-control" />
                <label htmlFor={'description' + game.name} className="form-label">Descripción:</label>
                <input id={"description" + game.name} type="text" className="form-control" />
                {game.area.map((area: string) => (
                    <>
                        <label htmlFor={'area-' + area} className="form-label">{'Area: ' + area}</label>
                        <input id={'area-' + area} type="text" className="form-control" />
                    </>
                ))
                }
                <label htmlFor='newArea' className="form-label">Nueva area</label>  
                <input id='newArea' type="text" className="form-control" />
                <label htmlFor={"objective" + game.name} className="form-check-label">Tiene un objetivo?:</label>
                <input id={"objective" + game.name} type="checkbox" className="form-check-input" />
                <label htmlFor={"contentValidation" + game.name} className="form-label">Validación de contenido:</label>
                <input id={"contentValidation" + game.name} type="text" className="form-control" />
                <label htmlFor={"observationsAndSuggestions" + game.name} className="form-label">Observaciones y sugerencias:</label>
                <input id={"observationsAndSuggestions" + game.name} type="text" className="form-control" />
                <label htmlFor={"score" + game.name} className="form-label">Puntaje:</label>
                <input id={"score" + game.name} type="text" className="form-control" />
                <label htmlFor={"other" + game.name} className="form-label">Otro:</label>
                <input id={"other" + game.name} type="text" className="form-control" />
                <label htmlFor={"imageUrl" + game.name} className="form-label">URL de la imagen:</label>
                <input id={"imageUrl" + game.name} type="text" className="form-control" />
                <a href={game.link} className="btn btn-primary mt-3">Abrir pagina web</a>
            </div>
        </div>
    )
}