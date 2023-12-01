import { Licenses } from '../Licenses/Licenses'

export function Footer(){
    return (
        <footer className="py-2 gradient-background">
            <ul className="nav justify-content-center">
                <Licenses />
            </ul>
        </footer>
    )
}