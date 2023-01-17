import { Product } from '../context/ProductContext';
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const FixedCartBox = () => {

    const { cart } = Product()

  return (
    <div>
        <div className="fixed z-40 py-1 pb-2 px-1 right-0 top-50 w-32 h-[8.8rem] bg-yellow-500">
            <div className="flex flex-col ">
                <div className="flex  justify-center text-xl font-bold text-yellow-900">
                    <p className="mr-1">Your Cart</p>
                    <BsFillCartCheckFill className="mt-1 text-xl"/>
                </div>

                <div className="flex justify-center text-lg font-bold text-white">
                    <p className="mr-3">Items:</p>
                    <p className="bg-yellow-700 -mt-1 py-1 text-center px-2 rounded-full">{cart.length}</p>
                </div>

                <div className="flex justify-center">
                    <Link to={`/cart`} className='no-underline text-white'>
                        <button className="bg-yellow-700 pt-1 pb-2 px-3 rounded-sm text-md font-bold">View Cart</button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  );
}

export default FixedCartBox;
