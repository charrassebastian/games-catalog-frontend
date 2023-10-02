import Game from '../types/Game'
import { EditableCard } from '../EditableCard/EditableCard'
import { InformationCard } from '../InformationCard/InformationCard'

export default function GameCard({ game, isEditable }: { game: Game, isEditable: boolean }) {
  return (
    <div>
      {isEditable
        ? <EditableCard game={game} />
        : <InformationCard game={game} />
      }
    </div>
  )
}
