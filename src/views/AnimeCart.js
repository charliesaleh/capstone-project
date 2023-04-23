import React, { useContext } from "react"
import { ShopContext } from "../components/ShopContext"
import { CartItem } from "../components/CartItem"
import { PRODUCTS as DataBooks } from "../components/DataBooks"
import { PRODUCTS as DataVideos } from "../components/DataVideos"
import { PRODUCTS as DataMerchandise } from "../components/DataMerchandise"
import { PRODUCTS as DataAlbums } from "../components/DataAlbums"
import { PRODUCTS as DataGames } from "../components/DataGames"
import { PRODUCTS as DataFigures } from "../components/DataFigures"
import { Link } from "react-router-dom"

const AllProducts = [
  ...DataBooks,
  ...DataVideos,
  ...DataMerchandise,
  ...DataAlbums,
  ...DataGames,
  ...DataFigures,
]

const AnimeCart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  return (
    <div className="cartItem">
      <br />
      <br />
      <div className="cart">
        <h1 className="recent-text2">Cart</h1>
      </div>
      <br />
      <div className="container">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>Product</th>
              <th className="price-center">Price</th>
              <th className="quantity-right">Quantity</th>
            </tr>
          </thead>
          {AllProducts.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
          })}
          {totalAmount > 0 ? (
            <tfoot>
              <tr>
                <td>
                  <Link to="/" className="btn btn-warning">
                    <i className="fa fa-angle-left" /> Continue Shopping
                  </Link>
                </td>
                <td>
                  <strong>Total ${totalAmount.toFixed(2)}</strong>
                </td>
                <td>
                  <Link to="/checkout" className="btn btn-success btn-block">
                    Checkout <i className="fa fa-angle-right" />
                  </Link>
                </td>
              </tr>
            </tfoot>
          ) : (
            <h1></h1>
          )}
        </table>
      </div>
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default AnimeCart
