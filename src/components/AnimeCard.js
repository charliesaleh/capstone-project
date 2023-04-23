import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import { doc, deleteDoc } from "firebase/firestore"
import { db, auth } from "../firebase"

export default function AnimeCard(props) {
  const removeFromFirebase = async () => {
    const malId = String(props.anime.mal_id)
    await deleteDoc(doc(db, "users", auth.currentUser.uid, "anime", malId))
    props.currentWatchList()
  }

  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.anime.image}
          alt={props.anime.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.anime.name}
          </Typography>

          <small>
            <strong>{props.anime.title}</strong>
          </small>
          <hr />
          <Typography variant="h6" color="text.secondary">
            Rank: {props.anime.rank}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Score: {props.anime.score}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Episodes: {props.anime.episodes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.currentWatchList ? (
          <Button
            onClick={removeFromFirebase}
            variant="contained"
            size="small"
            color="error"
          >
            Remove
          </Button>
        ) : (
          <Button
            onClick={() => props.addToFirebase(props.anime)}
            variant="contained"
            size="small"
            color="primary"
          >
            Add to Watchlist
          </Button>
        )}
        <Button variant="contained" size="small" color="warning">
          <a className="anime-link" href={props.anime.url}>
            Link to MAL
          </a>
        </Button>
      </CardActions>
    </Card>
  )
}
