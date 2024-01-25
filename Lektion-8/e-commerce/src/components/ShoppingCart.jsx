import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"


export const ShoppingCart = () => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)

  return (
    <div>
      <div>
        { cart.length < 1 && (
          <div className="p-2 text-center">
            <p>Your cart is empty</p>
          </div>
        )}
        { cart.map(item => (
          <CartItem item={item} />
        ))}
      </div>
      <hr className="border-gray-400" />
      <div className="flex justify-between items-center p-2">
        <div>
          <p>Total Price: 0</p>
          <small className="text-gray-600">Inkl. vat</small>
        </div>
        <div>
          <button className="bg-slate-800 text-white py-1.5 px-6 rounded-lg hover:bg-slate-900 transition-colors">Checkout</button>
        </div>
      </div>
    </div>
  )
}