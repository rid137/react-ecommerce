import { Link } from 'react-router-dom';
import { BiCategoryAlt } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Product } from "../context/ProductContext";


const TopCategory = () => {


    const { topCategoryJewelleryProduct, handleClick,  topCategoryFemaleProduct, topCategoryMaleProduct } = Product()

    const addFemaleItem = (e) => {
        const eachItem = topCategoryFemaleProduct.find((item) => item.id === +e.target.id)
        const id = e.target.id
        handleClick(eachItem, id)
    }

    const addMaleItem = (e) => {
        const eachItem = topCategoryMaleProduct.find((item) => item.id === +e.target.id)
        const id = e.target.id
        handleClick(eachItem, id)
    }

    const addtopCategoryJewelleryProduct = (e) => {
        const eachItem = topCategoryJewelleryProduct.find((item) => item.id === +e.target.id)
        const id = e.target.id
        handleClick(eachItem, id)
    }


    const clipWords = (words) => {
        const word = words.slice(0, 15) + '...'
        return word
    }



  return (
    <div className=" mb-12  text-6xl ">
        <div className="flex items-center gap-x-2 text-3xl md:text-5xl font-bold">
            <BiCategoryAlt className="text-red-500 mb-3 md:pb-0" />
            <p className="border-b-4 border-red-500 pb-1 md:pb-6">Top Category</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-6 ">

        {
                topCategoryMaleProduct && 
                    topCategoryMaleProduct.map((item) => (
                        <div key={item.id} className="relative flex flex-col box-border w-72 h-[30rem] mt-6 md:mt-4 bg-white border border-gray-300 p-2 drop-shadow-lg hover:scale-105 transition-all duration-300">
                            {/* <button className="absolute top-0 left-0 text-xl text-white rounded-sm bg-red-600 px-2 pb-1 ">20% off</button> */}
                            <img src={item.thumbnail} alt="" className="h-1/2 object-cover"/>
                            <div className="h-1/2 text-center pt-3">
                                <p className="text-2xl font-bold">{clipWords(item.title)}</p>
                                <div className="flex items-center justify-center mb-3">
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-gray-400" />
                                </div>
                                <p className="text-2xl font-bold"><span className="line-through pr-2 text-gray-500 text-xl">$1500</span>${item.price}</p>
                                <div className="flex justify-center">
                                    <button id={item.id} onClick={addMaleItem} className="text-2xl text-white border-2 border-slate-300 px-3 mr-2 py-1 pb-2 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md">Add to cart</button>
                                    <button className="text-2xl border-2 border-slate-300 px-3 pb-1 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md"><Link to={`/product/${item.id}`} className='no-underline text-white'><IoEyeSharp className="text-3xl" /></Link></button>
                                </div>                                  
                            </div>
                        </div>
                    ))
            }

            {
                topCategoryFemaleProduct && 
                    topCategoryFemaleProduct.map((item) => (
                        <div key={item.id} className="relative flex flex-col box-border w-72 h-[30rem] mt-6 md:mt-4 bg-white border border-gray-300 p-2 drop-shadow-lg hover:scale-105 transition-all duration-300">
                            {/* <button className="absolute top-0 left-0 text-xl text-white rounded-sm bg-red-600 px-2 pb-1 ">20% off</button> */}
                            <img src={item.thumbnail} alt="" className="h-1/2 object-cover"/>
                            <div className="h-1/2 text-center pt-3">
                                <p className="text-2xl font-bold">{clipWords(item.title)}</p>
                                <div className="flex items-center justify-center mb-3">
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-gray-400" />
                                </div>
                                <p className="text-2xl font-bold"><span className="line-through pr-2 text-gray-500 text-xl">$1500</span>${item.price}</p>
                                <div className="flex justify-center">
                                    <button id={item.id} onClick={addFemaleItem} className="text-2xl text-white border-2 border-slate-300 px-3 mr-2 py-1 pb-2 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md">Add to cart</button>
                                    <button className="text-2xl border-2 border-slate-300 px-3 pb-1 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md"><Link to={`/product/${item.id}`} className='no-underline text-white'><IoEyeSharp className="text-3xl" /></Link></button>
                                </div>                           
                            </div>
                        </div>
                    ))
            }

            {
                topCategoryJewelleryProduct && 
                    topCategoryJewelleryProduct.map((item) => (
                        <div key={item.id} className="relative flex flex-col box-border w-72 h-[30rem] mt-6 md:mt-4 bg-white border border-gray-300 p-2 drop-shadow-lg hover:scale-105 transition-all duration-300">
                            {/* <button className="absolute top-0 left-0 text-xl text-white rounded-sm bg-red-600 px-2 pb-1 ">20% off</button> */}
                            <img src={item.thumbnail} alt="" className="h-1/2 object-cover"/>
                            <div className="h-1/2 text-center pt-3">
                                <p className="text-2xl font-bold">{clipWords(item.title)}</p>
                                <div className="flex items-center justify-center mb-3">
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-yellow-500" />
                                    <AiFillStar className="text-2xl text-gray-400" />
                                </div>
                                <p className="text-2xl font-bold"><span className="line-through pr-2 text-gray-500 text-xl">$1500</span>${item.price}</p>
                                <div className="flex justify-center">
                                    <button id={item.id} onClick={addtopCategoryJewelleryProduct} className="text-2xl text-white border-2 border-slate-300 px-3 mr-2 py-1 pb-2 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md">Add to cart</button>
                                    <button className="text-2xl border-2 border-slate-300 px-3 pb-1 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md"><Link to={`/product/${item.id}`} className='no-underline text-white'><IoEyeSharp className="text-3xl" /></Link></button>
                                </div>                                  
                            </div>
                        </div>
                    ))
            }

            
        </div>
    </div>
  );
}

export default TopCategory;
