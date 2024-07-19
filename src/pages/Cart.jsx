import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem';
import { useEffect, useState } from "react";

const Cart = () => {

  // useSelector allows access to the state stored in a Redux store
  // all items come from cart which is in cartSlice so we use useSelector
  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  // when something is added in cart then only totalAmount value will change
  // reduce function - executes a reducer function for array element
  // acc -> accumulator -> initial value
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  // useEffect(() => {
  //   setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  // }, [cart]);

  return (
    <div className="mt-[100px] relative">
      {
        cart.length > 0 ?
        (
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={item} />
                })
              }
            </div>

            <div className="w-[100%] md:w-[40%] mt-5 flex flex-col h-full">
              <div className="flex flex-col p-5 gap-5 my-14 h-[100%]">
                <div className="font-semibold text-xl text-green-800 uppercase ">Your Cart</div>
                <div className="font-semibold text-5xl text-green-700 uppercase -mt-5">Summary</div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="flex flex-col ml-5">
                <p className="text-xl font-bold"><span className="text-gray-700 font-semibold"> Total Amount: ${totalAmount}</span></p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300
                ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  Checkout Now
                </button>
              </div>
            </div>

          </div>
        ) :
        (
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
            <Link to={'/'}>
              <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 
              ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart
