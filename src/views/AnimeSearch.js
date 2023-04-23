import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { auth, db } from "../firebase"
import { doc, setDoc, collection, onSnapshot } from "firebase/firestore"
import AnimeCard from "../components/AnimeCard"
import Grid from "@mui/material/Grid"

const theme = createTheme()

export default function SignIn() {
  const [anime, setAnime] = useState("")
  const [watchlist, setWatchList] = useState([])
  const [searchAnime, setSearchAnime] = useState([])
  const [showSearchedAnime, setShowSearchedAnime] = useState(false)
  const [animeToWatchlist, setAnimeToWatchlist] = useState({})

  const getAnimeData = async (search) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
    const data = await response.json()

    const results = data.data.map((anime) => ({
      name: anime.title,
      rank: anime.rank,
      score: anime.score,
      episodes: anime.episodes,
      image: anime.images.jpg.large_image_url,
      mal_id: anime.mal_id,
      url: anime.url,
    }))

    setSearchAnime(results)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const animeTitle = anime[0].toUpperCase() + anime.slice(1).toLowerCase()
    await getAnimeData(animeTitle)
    setShowSearchedAnime(true)
  }

  const addAnimeToFirebase = async (animeData) => {
    const malId = String(animeData.mal_id)
    await setDoc(doc(db, "users", auth.currentUser.uid, "anime", malId), {
      name: animeData.name,
      rank: animeData.rank,
      score: animeData.score,
      episodes: animeData.episodes,
      image: animeData.image,
      mal_id: animeData.mal_id,
      url: animeData.url,
    })
  }

  useEffect(() => {
    if (Object.keys(animeToWatchlist).length > 0) {
      addAnimeToFirebase(animeToWatchlist)
    }
  }, [animeToWatchlist])

  const currentWatchList = async () => {
    const watchListArr = []
    const subColRef = collection(db, "users", auth.currentUser.uid, "anime")
    onSnapshot(subColRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        watchListArr.push(doc.data())
      })
      setWatchList(watchListArr)
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <br />
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            marginTop: 8,
          }}
        >
          <Typography component="h1" variant="h5"></Typography>
          <strong className="recent-text2">Anime Search</strong>
          <Box
            sx={{ mt: 1 }}
            noValidate
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              onClick={(event) => {
                setAnime(event.target.value)
              }}
              onChange={(event) => {
                setAnime(event.target.value)
              }}
              margin="normal"
              fullWidth
              label="Search Anime"
              required
              id="anime"
              autoFocus
              name="anime"
            />
            <Button
              variant="contained"
              type="submit"
              color="success"
              sx={{ mt: 3, mb: 2, width: "50%" }}
            >
              Search
            </Button>
            <Button
              color="primary"
              sx={{ mt: 3, mb: 2, width: "50%" }}
              variant="contained"
              onClick={currentWatchList}
            >
              View Watchlist
            </Button>
            <Grid container spacing={3}>
              {showSearchedAnime &&
                searchAnime.map((anime) => (
                  <Grid item xs={10} sm={6} md={4} key={anime.mal_id}>
                    <AnimeCard
                      anime={anime}
                      addToFirebase={() => setAnimeToWatchlist(anime)}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <br />
          <Grid container spacing={3}>
            {watchlist.map((anime) => (
              <Grid item xs={10} sm={6} md={4} key={anime.mal_id}>
                <AnimeCard anime={anime} currentWatchList={currentWatchList} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {watchlist.length > 0 ? <p>{watchlist[0].title}</p> : <p></p>}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ThemeProvider>
  )
}
