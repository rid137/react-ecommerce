import { useState, useEffect } from 'react';
import { AiOutlineArrowUp, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Product } from '../context/ProductContext';
import axios from 'axios';

const Navbar = () => {
  const [data, setData] = useState(false)
  const [search, setSearch] = useState('')
  const [main, setMain] = useState(false)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
  const [category, setCategory] = useState([])



  // useEffect(() => {
  //   const getProductCat = async () => {
  //     const response = await axios.get('https://dummyjson.com/products/categories')

  //     const id = Math.floor(Math.random() * 10000) + 1

  //     // const newTask = [id, response.data]

  //     // seTtasks([...tasks, newTask])
  //       // setCategory(newTask)
  //       setCategory(response.data)
  //   }
  //   getProductCat()
  // }, []);

  const { allProduct } = Product()

  const goToCategory = (e) => {
    console.log(e.target.id)
  }

  

  const topsCat = 'tops'


  const searchLocation = (event) => {
    if (event.target.value !== '') {
      setData(true)
      // setSearch('')
    }
    else {
      setData(false)
    }
  }

  // if (event.key === 'Enter') {
  //   setData(true)
  //   setSearch('')
  // }

  // {
  //   category && category.filter((item, index) => {
  //     return index === 10 || index === 11 || index === 12 ? item : ''
  //   }).map((item, index) => (
  //     <>
  //       <li>
  //         <Link to={`/category/${item}`}>{item}</Link>
  //       </li>
  //     </>
  //   ))
  // }

 
  return (
    <>
      {/* First section */}
      <div className=" h-10 bg-dark-purple text-white sticky top-0 z-10" >
            <div className="flex justify-between items-center h-full mx-[4.3rem]">
              <ul className='flex  space-x-1  font-bold text-[0.9rem] h-full'>
                <li className=' bg-light-white cursor-pointer h-full px-3 pt-[.36rem] mt-2'>Home</li>
                <li className=' hover:bg-light-white cursor-pointer h-full px-3 pt-[.36rem] mt-2'>Contact</li>
                <li className=' hover:bg-light-white cursor-pointer h-full px-3 pt-[.36rem] mt-2'>About</li>

              </ul>
              <div className="mx-5">
                {/* <input 
                  type="search" 
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  onInput={searchLocation}
                  // onReset={() => setData(!data)}
                  className='w-[20rem] rounded-md focus:outline-none text placeholder:italic placeholder:text-slate-400 placeholder:text-sm bg-white border border-slate-300 px-2 shadow-sm focus:border-sky-500 text-black' 
                  placeholder="Search for any product..." 
                 /> */}
              </div>
              <div className="-mr-[1.2rem]">
                <button className='bg-black px-4 pb-1 font-bold text-[0.9rem] rounded-full border-2 border-light-white hover:scale-x-110 duration-200'>Login</button>
                
              </div>
            </div>
      </div>

      {/* Second Section */}
      <div className="bg-[rgb(16,3,81)] h-10 mb-2">
        <div className="flex justify-center items-center h-full mx-[4.3rem]">
          {/* <ul className='flex space-x-6 mt-3 h-full text-[.9rem] font-bold text-white'>
            <li className='flex items-center space-x-2 hover:bg-light-white px-2' onMouseOver={() => {setMain(true); setFirst(true); setSecond(false); setThird(false); setFourth(false)}}  >
              <span>First</span>
              <AiOutlineDown className={`text-md duration-200 ${first && "rotate-180"}`} />
            </li>

            <li className='flex items-center space-x-2 hover:bg-light-white px-2' onMouseOver={() => {setMain(true); setSecond(true); setFirst(false); setThird(false); setFourth(false) }}>
              <span>Second</span>
              <AiOutlineDown className={`text-md duration-200 ${second && "rotate-180"}`} />
            </li>

            <li className='flex items-center space-x-2 hover:bg-light-white px-2' onMouseOver={() => {setMain(true); setThird(true); setFirst(false); setSecond(false); setFourth(false) }}>
              <span>Third</span>
              <AiOutlineDown className={`text-md duration-200 ${third && "rotate-180"}`} />
            </li>

            <li className='flex items-center space-x-2 hover:bg-light-white px-2' onMouseOver={() => {setMain(true); setFourth(true); setFirst(false);setSecond(false); setThird(false) }}>
              <span>Fourth</span>
              <AiOutlineDown className={`text-md duration-200 ${fourth && "rotate-180"}`} />
            </li>
          </ul> */}

          <div className="-ml-64">
            <input 
              type="search" 
              value={search}
              onChange={event => setSearch(event.target.value)}
              onInput={searchLocation}
              // onReset={() => setData(!data)}
              className='w-[20rem] rounded-md focus:outline-none text placeholder:italic placeholder:text-slate-400 placeholder:text-sm bg-white border border-slate-300 px-2 shadow-sm focus:border-sky-500 text-black' 
              placeholder="Search for any product..." 
              />
          </div>

          {/* <div className="">
            <button>Cart</button>
            <span>
              <BsFillCartCheckFill />
              <p>5</p>
            </span>
          </div> */}

        </div>
        
      </div>

      {
        data && (
          <div className='h-80 w-72 px-3 py-2 bg-[rgb(16,3,81)] absolute inset-x-[44.5%] z-50 scrollbar-thin scrollbar-thumb-rose-500'>
            {/* <div className='absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer' onClick={() => setData(!data)}></div> */}
            <h2 className="text-bold text-2xl text-white">All Product</h2>
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
      
      <div className={`${main ? 'scale-100 absolute bg-yellow-300 w-32 h-32 z-10 inset-x-[10rem] duration-200' : 'scale-0'}`}>
        {/* <div className={`${first ? 'scale-100 h-64 w-64 bg-yellow-500 absolute inset-x-[5rem] z-10 duration-700' : 'scale-0'} `}>
          <div className="absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer" onClick={() => setFirst(false)}>

          </div>
        </div> */}

        <div className={`${first ? 'scale-100 bg-red-800 w-16 h-16': 'scale-0'} `}>
          <div className="absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer" onClick={() => {setMain(false); setFirst(false)}}>

          </div>
        </div>

        <div className={`${second ? 'scale-100 bg-blue-800 w-16 h-16': 'scale-0'} `}>
          <div className="absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer" onClick={() => {setMain(false); setSecond(false)}}>

          </div>
        </div>

        <div className={`${third ? 'scale-100 bg-black w-16 h-16': 'scale-0'} `}>
          <div className="absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer" onClick={() => {setMain(false); setThird(false)}}>

          </div>
        </div>

        <div className={`${fourth ? 'scale-100 bg-green-800 w-16 h-16': 'scale-0'} `}>
          <div className="absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer" onClick={() => {setMain(false); setFourth(false)}}>

          </div>
        </div>

        {/* <div className={`${second ? 'scale-100 h-64 w-64 bg-yellow-500 absolute inset-x-[10rem] z-10 duration-700' : 'scale-0'} `}>
          <div className="absolute w-4 h-4 top-0 right-0 bg-blue-300 cursor-pointer" onClick={() => setSecond(false)}>

          </div>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
