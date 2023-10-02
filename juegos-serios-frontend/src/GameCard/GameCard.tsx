import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Game from '../types/Game'

export default function GameCard({ game }: { game: Game }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="m-3">
        <CardMedia
          sx={{ height: 140 }}
          image={game.imageLink}
          title={game.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {'Descripción: ' + game.description}
          </Typography>
          <Typography variant="body1" component="div">
            {game.area.reduce((str, area) => str + ' ' + area, 'Areas: ')}
          </Typography>
          <Typography variant="body1" component="div">
            {'Tiene un objetivo?: ' + (game.hasGoal ? 'Sí' : 'No')}
          </Typography>
          <Typography variant="body1" component="div">
            {'Validación de contenido: ' + game.contentValidation}
          </Typography>
          <Typography variant="body1" component="div">
            {'Observaciones y sugerencias: ' + game.observationsAndSuggestions}
          </Typography>
          <Typography variant="body1" component="div">
            {'Puntaje: ' + game.score}
          </Typography>
          <Typography variant="body1" component="div">
            {'Otro: ' + game.others}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Link href={game.link} variant="button" underline="none">Abrir pagina web</Link>
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
