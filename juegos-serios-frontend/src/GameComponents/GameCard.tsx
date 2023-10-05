import Game from '../types/Game'
import { EditableCard } from './EditableCard'
import { InformationCard } from './InformationCard'

export default function GameCard({ game, isEditable, onGameDelete }: { game: Game, isEditable: boolean, onGameDelete: (id: string) => void }) {
  return (
    isEditable
      ? <EditableCard game={game} onGameDelete={onGameDelete} />
      : <InformationCard game={game} />
  )
}
