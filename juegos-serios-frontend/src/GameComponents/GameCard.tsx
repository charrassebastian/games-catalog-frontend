import Game from '../types/Game'
import { EditableCard } from './EditableCard'
import { InformationCard } from './InformationCard'
import { useState } from 'react'

export default function GameCard({ game, isEditable, onGameDelete }: { game: Game, isEditable: boolean, onGameDelete: (id: string) => void }) {
  const [isBeingEdited, setIsBeingEdited] = useState(false)

  const onToggleEdit = () => setIsBeingEdited(!isBeingEdited)
  
  if (isBeingEdited) return <EditableCard game={game} onGameDelete={onGameDelete} onToggleEdit={onToggleEdit} />
  return <InformationCard game={game} isEditable={isEditable} onToggleEdit={onToggleEdit} />
}
