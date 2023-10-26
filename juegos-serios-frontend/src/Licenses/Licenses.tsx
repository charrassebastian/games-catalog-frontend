import { useState } from 'react'
import licenses from '../constants/licenses'

export const Licenses = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleToggle = () => setIsExpanded(s => !s)

    return (
        <div>
            {isExpanded
                ?
                <div className="licensesContent">
                    <p><pre className="licensesText">{licenses}</pre></p>
                    <button className='mb-3 blueButton' onClick={handleToggle}>Cerrar</button>
                </div>
                : <li className="nav-item"><button className="nav-link text-light" onClick={handleToggle}>Licencias</button></li>
            }
        </div>
    )
}
