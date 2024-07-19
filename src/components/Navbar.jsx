import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state) => state);

  return (
    <div className="fixed w-full top-0 left-0 bg-slate-900 z-20">

      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

          <NavLink to="/">
            <div className="ml-6">
              <img src="../logo2.jpeg" 
              alt="" width="80px" height="80px" />
            </div>
          </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">

          <NavLink to="/">  
              <p className="text-xl hover:text-green-600 transition-all duration-[0.5s]">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
            <FaShoppingCart className="text-2xl hover:text-green-600 transition-all duration-[0.5s]"/>
            {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
            </div>
          </NavLink>
          
        </div>

      </nav>
    </div>
  )
}

export default Navbar
