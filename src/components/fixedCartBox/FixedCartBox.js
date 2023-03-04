import { Product } from '../context/ProductContext';
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const FixedCartBox = () => {

    const { cart } = Product()

  return (
    <div>
        <div className="fixed z-40 py-1 pb-2 px-1 right-0 top-50 w-20 h-[6rem] md:w-32 md:h-[8.8rem] bg-yellow-500">
            <div className="flex flex-col ">
                <div className="flex  justify-center text-sm font-bold text-yellow-900">
                    <p className="text-[.69rem] md:text-xl mr-1">Your Cart</p>
                    <BsFillCartCheckFill className="mt-1 text-sm md:text-xl"/>
                </div>

                <div className="flex justify-center text-sm md:text-lg -mt-1 md:-mt-0 font-bold text-white">
                    <p className="mr-3">Items:</p>
                    <p className="bg-yellow-700 -mt-1 py-1 text-center px-2 rounded-full">{cart.length}</p>
                </div>

                <div className="flex justify-center -mt-4 md:-mt-0">
                    <Link to={`/cart`} className='no-underline text-white'>
                        <button className="bg-yellow-700 pt-1 pb-2 px-3 rounded-sm text-[.5rem] font-sm md:text-lg md:font-bold">View Cart</button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  );
}

export default FixedCartBox;
