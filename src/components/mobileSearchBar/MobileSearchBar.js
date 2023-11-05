import { Product } from "../context/ProductContext";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const MobileSearchBar = () => {

    const [data, setData] = useState(false);
    const [search, setSearch] = useState('');

    const { allProduct } = Product();


    const searchLocation = (event) => {
        if (event.target.value !== '') {
        setData(true)
        // setSearch('')
        }
        else {
        setData(false)
        }
    }



  return (
    <div className="mt-6 md:hidden sticky top-0 z-10">
        <input 
            type="search" 
            value={search}
            onChange={event => setSearch(event.target.value)}
            onInput={searchLocation}
            // onReset={() => setData(!data)}
            className='w-[18rem] rounded-md focus:outline-none text placeholder:italic placeholder:text-slate-400 placeholder:text-sm bg-white border border-slate-300 px-2 shadow-sm focus:border-sky-500 text-black' 
            placeholder="Search for any product..." 
        />

        {
            data && (
            <div className='h-80 w-72 px-3 py-2 bg-[rgb(16,3,81)] absolute  z-50 scrollbar-thin scrollbar-thumb-rose-500'>
                {/* <div className='absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer' onClick={() => setData(!data)}></div> */}
                {/* <h2 className="text-bold text-2xl text-white">All Product</h2> */}
                <ul className='flex flex-col space-y-0 text-white -ml-8'>
                { 
                    allProduct && allProduct.filter((item) => {
                    return search === '' ? item : item.title.toLowerCase().includes(search.toLowerCase())
                    }).map((item) => (
                    <div key={item.id}>
                        {
                        item.length === 0 ? <p className='text-white'>No product match</p> : <li className='font-bold hover:bg-light-white rounded-md cursor-pointer pl-3 py-2 -mb-1'><Link to={`/product/${item.id}`} className='text-white no-underline block'> {item.title} </Link></li> 

                        }
                    </div>
                    ))
                }
                </ul>
            </div>
            )
        }
        
    </div>
  );
}

export default MobileSearchBar;
