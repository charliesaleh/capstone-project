import React, { useContext } from "react"
import { ShopContext } from "../components/ShopContext"
import { Button } from "@mui/material"
import { PRODUCTS as DataGames } from "../components/DataGames"
import { Link } from "react-router-dom"

export default function AnimeGames() {
  const { id } = DataGames
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active carousel-shop">
            <img src="https://a-static.besthdwallpaper.com/sword-art-online-blue-and-red-wallpaper-2560x768-85812_69.jpg" />

            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Games</h1>
                <p>
                  Nothings more important than spending hours immersed in your
                  favorite anime world!
                </p>
                <p>
                  <Link class="btn btn-lg btn-primary" to="/">
                    Anime Home
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-shop">
            <img src="https://a-static.besthdwallpaper.com/anime-girl-food-shopping-inside-basket-wallpaper-1920x540-107062_70.jpg" />
            <div class="container">
              <div class="carousel-caption">
                <h1>Already decided?</h1>
                <p>Head to cart to purchase your books.</p>
                <p>
                  <Link class="btn btn-lg btn-primary" to="/animecart">
                    Anime Cart
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-shop">
            <img src="https://dw9to29mmj727.cloudfront.net/promo/2016/6389-Header_BleachTYBW_2000x800.jpg" />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Don't know what series to Buy?</h1>
                <p>Search an Anime or view from your watchlist to decide.</p>
                <p>
                  <Link class="btn btn-lg btn-primary" to="/animesearch">
                    Anime Search
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="wrap-products py-5">
        {DataGames.map((product) => (
          <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5">
                <div className="col mb-5">
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt="..."
                    />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="recent-text2">{product.name}</h5>
                        ${product.price}
                      </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Button
                          className="btn btn-outline-dark mt-auto add-cart carts"
                          onClick={() => addToCart(product.id)}
                          href="#"
                        >
                          Add to cart{" "}
                          {cartItemAmount > 0 && <>({cartItemAmount})</>}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
