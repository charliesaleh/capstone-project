import Home from "./views/Home"
import Nav from "./components/Nav"
import SignUp from "./views/SignUp"
import SignIn from "./views/SignIn"
import AnimeGames from "./views/AnimeGames"
import AnimeVideos from "./views/AnimeVideos"
import AnimeAlbums from "./views/AnimeAlbums"
import AnimeMerchandise from "./views/AnimeMerchandise"
import AnimeFigures from "./views/AnimeFigures"
import AnimeSearch from "./views/AnimeSearch"
import AnimeMusic from "./views/AnimeMusic"
import AnimeBooks from "./views/AnimeBooks"
import Footer from "./components/Footer"
import PaymentForm from "./views/PaymentForm"
import Checkout from "./views/Checkout"
import AddressForm from "./views/AddressForm"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AnimeCart from "./views/AnimeCart"
import { ShopContextProvider } from "./components/ShopContext"
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ShopContextProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animebooks" element={<AnimeBooks />} />
            <Route path="/animevideos" element={<AnimeVideos />} />
            <Route path="/animealbums" element={<AnimeAlbums />} />
            <Route path="/animegames" element={<AnimeGames />} />
            <Route path="/animemerchandise" element={<AnimeMerchandise />} />
            <Route path="/animefigures" element={<AnimeFigures />} />
            <Route path="/animesearch" element={<AnimeSearch />} />
            <Route path="/animemusic" element={<AnimeMusic />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/paymentform" element={<PaymentForm />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/addressform" element={<AddressForm />} />
            <Route path="/animecart" element={<AnimeCart />} />
          </Routes>
          <Footer />
        </ShopContextProvider>
      </div>
    </BrowserRouter>
  )
}
