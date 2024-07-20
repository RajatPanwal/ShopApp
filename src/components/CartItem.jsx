import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {

  const dispatch =  useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed"); 
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-3 mb-2 md:mx-5
     shadow-[0px_0px_8px_0px_#a0aec0] scale-95 hover:scale-100 hover:shadow-2xl transition duration-300
      bg-white rounded-xl ">
      
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

        <div className="w-[30%]">
          <img src={item.image} alt="" />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>

          <h1 className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0 ,15).join(" ") + "..."}</h1>
          
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div
            className= " w-10 text-center text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-[50%] p-3 mr-3"
            onClick={removeFromCart}>
              <MdDelete className=""/>
            </div>
          </div>

        </div>

      </div>
      <hr className=" text-black" />

    </div>
  )
}

export default CartItem
