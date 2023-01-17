import { Link } from 'react-router-dom'
import { Product } from '../context/ProductContext';

const FurnitureAdvert = () => {

    const { furnitureProducts } = Product()



  return (
    <div>
      <div className="flex flex-col    md:flex-row">
            <div className="w-1/2 mr-10 mt-32 flex items-center flex-col">
                <h2 className="text-5xl font-bold text-gray-600">Need Some Furniture?</h2>
                <h3 className="text-4xl font-bold text-gray-600 mt-3">We've got it here!</h3>
                <p className="text-3xl font-bold text-gray-600 mt-3">Available at a discounted rate</p>
                <button className="text-2xl font-bold mt-3 border-2 border-slate-300 px-20 py-1 pb-2 bg-yellow-500 rounded-md hover:scale-105 transition-all duration-200"><Link to='' className='no-underline text-white'>Shop Now</Link></button>
            </div>
            <div className="w-1/2 flex flex-col">
                {
                    furnitureProducts && furnitureProducts.map((item) => ( 
                            <img key={item.id} src={item.thumbnail} className='w-[28rem]' alt="" />
                     ))
                }
            </div>
        </div>
    </div>
  );
}

export default FurnitureAdvert;
