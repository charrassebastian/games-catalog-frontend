import Game from '../types/Game'
import { EditableCard } from './EditableCard'
import { InformationCard } from './InformationCard'
import { useState } from 'react'

export const GameCard = ({ game, isEditable, onGameDelete, onUpdateGameList }: { game: Game, isEditable: boolean, onGameDelete: (id: string) => void, onUpdateGameList: (game: Game) => void }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false)

  const onToggleEdit = () => setIsBeingEdited(!isBeingEdited)
  
  if (isBeingEdited) return <EditableCard game={game} onGameDelete={onGameDelete} onToggleEdit={onToggleEdit} onUpdateGameList={onUpdateGameList} />
  return <InformationCard game={game} isEditable={isEditable} onToggleEdit={onToggleEdit} />
}
