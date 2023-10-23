export const ShortGameCard = () => {
    return (
        <div className="short-card">
            <div className="short-card-top">
                <h2 className="short-card-name">Plague Inc</h2>
                <img
                    className="short-card-circle-img"
                    src="https://cdn.ndemiccreations.com/media/Evolved_bg_steam.png"
                    alt="avatar_img"
                />
            </div>
            <div className="short-card-bottom">
                <p className="short-card-info">
                    <b>Objetivo del juego:</b> Crear y hacer evolucionar un patógeno
                    para extinguir a la humanidad.<br />
                    <br />
                    Tu patógeno acaba de infectar al paciente cero. Ahora tu misión es
                    conseguir que la humanidad se extinga propagando una epidemia letal
                    a la vez que saboteas los esfuerzos de la población para combatirla.
                </p>
                <a href="https://www.ndemiccreations.com/en/25-plague-inc-evolved"
                >Click Here!</a
                >
            </div>
        </div>
    )
}