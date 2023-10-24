import Game from '../types/Game'
import { LongGameCard } from './LongGameCard'
import { ShortGameCard } from './ShortGameCard'
import { useState } from 'react'

export const InformationCard = ({ game, isEditable, onToggleEdit }: { game: Game, isEditable: boolean, onToggleEdit: () => void }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleShowMore = () => {
        setIsExpanded(true)
    }

    const handleShowLess = () => {
        setIsExpanded(false)
    }

    if (isExpanded) {
        return <LongGameCard game={game} isEditable={isEditable} onToggleEdit={onToggleEdit} onClose={handleShowLess} />
    }

    return <ShortGameCard game={game} onShowMore={handleShowMore} />
}