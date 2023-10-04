import Game from '../types/Game'
import { EditableCard } from './EditableCard'
import { InformationCard } from './InformationCard'

export default function GameCard({ game, isEditable }: { game: Game, isEditable: boolean }) {
  return (
    isEditable
      ? <EditableCard game={game} />
      : <InformationCard game={game} />
  )
}
