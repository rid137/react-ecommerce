import { useState } from "react";
import { Link } from 'react-router-dom'
import { FcFlashOn } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { Product } from "../context/ProductContext";


const FlashDeal = () => {
    const { flashDealProduct, handleClick} = Product()

    const sliceDetails = (words) => {
        const word = words.slice(0, 15) + '...'
        return word
    }

    
    const addItem = (e) => {
        const eachItem = flashDealProduct.find((item) => item.id === +e.target.id)
        const id = e.target.id
        handleClick(eachItem, id)
    }

    const a = 'dvdsdghvhsdgdvvgdsgvdgv'



    return (
        <div className=" mb-32 mt-[2rem]  text-6xl">
            <div className="flex text-5xl font-bold">
                <FcFlashOn className="text-red-500" />
                <p className="border-b-4 border-red-500 pb-2">Flashdeal</p>
            </div>
            {/* {console.log(dat)} */}
            <div className="flex flex-wrap gap-x-4 gap-y-6  mt-6">
                {
                    flashDealProduct && 
                        flashDealProduct.map((item) => (
                            <div key={item.id} className="relative flex flex-col box-border w-72 h-[30rem] bg-white border border-gray-300 p-2 drop-shadow-lg hover:scale-105 transition-all duration-300">
                                <button className="absolute top-0 left-0 text-xl text-white rounded-sm bg-red-600 px-2 pb-1 " >20% off</button>
                                <img src={item.thumbnail} alt="" className="h-1/2 object-cover"/>
                                <div className="h-1/2 text-center pt-3">
                                    <p className="text-2xl font-bold">{sliceDetails(item.title)}</p>
                                    <div className="flex items-center justify-center mb-3">
                                        <AiFillStar className="text-2xl text-yellow-500" />
                                        <AiFillStar className="text-2xl text-yellow-500" />
                                        <AiFillStar className="text-2xl text-yellow-500" />
                                        <AiFillStar className="text-2xl text-yellow-500" />
                                        <AiFillStar className="text-2xl text-gray-400" />
                                    </div>
                                    <p className="text-2xl font-bold"><span className="line-through pr-2 text-gray-500 text-xl">$1300</span>${item.price}</p>
                                    <div className="flex justify-center">
                                        <button id={item.id} onClick={addItem} className="text-2xl text-white border-2 border-slate-300 px-3 mr-2 py-1 pb-2 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md">Add to cart</button>
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

export default FlashDeal;
