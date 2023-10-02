export function Footer(){
    return (
        <footer className="py-4 gradient-background ">
            <ul className="nav justify-content-center border-bottom mb-3">
                <a className="img-footer" href="./index.html"><img src="./images/mobile-game.png" alt="A mobile game" height="100" /></a>
                <li className="nav-item"><a href="#" className="nav-link px-4 text-light">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-4 text-light">Buscar</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-4 text-light">Creado por INSPT-UTN</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-4 text-light">Licencias</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-4 text-light">Acerca de</a></li>
            </ul>
            <p className="text-center text-light">Juegos Serios © 2023 </p>
        </footer>
    )
}