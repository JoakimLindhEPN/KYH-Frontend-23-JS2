import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { removeOne } from "../store/features/shoppingCart/shoppingCartSlice"

export const CartItem = ({ item }) => {


  const dispatch = useDispatch()

  const removeOneFromCart = () => {
    dispatch(removeOne(item.product._id))
  }

  return (
    <div className="flex justify-between items-center p-2 border-b last-of-type:border-b-0">
      <div className="flex items-center">
        <img src={item.product.images[0]} alt="product-image" className="w-[100px]" />
        <div>
          <p className="font-semibold truncate">{item.product.name}</p>
          <p className="text-sm">{item.quantity} x {item.product.price}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div>
          <button onClick={removeOneFromCart} className="bg-slate-800 text-white px-2 py-3 rounded-s-md hover:bg-slate-900 transition-colors border-r border-r-slate-600"><FaMinus className="w-3 h-3" /></button>
          <button className="bg-slate-800 text-white px-2 py-3 rounded-e-md hover:bg-slate-900 transition-colors"><FaPlus className="w-3 h-3" /></button>
        </div>
        <button className="p-1 group"><FaTrash className="text-red-700 group-hover:text-red-800 transition-colors w-5 h-5" /></button>
      </div>
    </div>
  )
}