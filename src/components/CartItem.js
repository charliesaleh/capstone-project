import React, { useContext } from "react"
import { ShopContext } from "../components/ShopContext"

export const CartItem = (props) => {
  const { id, name, price, image } = props.data
  const { cartItems, updateCartItem, getTotalCartAmount } =
    useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  return (
    <div className="cartItem">
      <div>
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container" style={{ width: "150%" }}>
          <table id="cart" className="table table-hover table-condensed">
            <tbody>
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img src={image} alt="..." className="img-responsive" />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">{name}</h4>
                    </div>
                  </div>
                </td>
                <td data-th="Price">${price}</td>
                <td className="quantity-right" data-th="Quantity">
                  <input
                    id="quantity"
                    className="form-control text-center form-text"
                    type="number"
                    value={cartItems[id]}
                    onChange={(event) =>
                      updateCartItem(Number(event.target.value), id)
                    }
                  />
                </td>
                <td className="actions" data-th></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
