import { useState } from 'react';
import logo from '../../components/asset/logo.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";




const ReusableNavbar = () => {
    const [openNav, setOpenNav] = useState(false)


  return (
    <div>
        <div className="bg-yellow-500 h-12 " name='page-top'>
            <div className=" flex items-center justify-between container mx-auto">
                <div className='flex items-center '>
                    <img src={logo} className=' w-2/3 mt-1' alt="" />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex my-auto text-xl text-white font-bold text-center'>
                        <li className=' md:mr-10 cursor-pointer'><NavLink className="no-underline text-inherit hover:text-gray-200 " to="/">Home</NavLink></li>
                        <li className=' md:mr-10 cursor-pointer'><Link className="no-underline text-inherit hover:text-gray-200"  to="version" smooth={true}  duration={200}>Product Images</Link></li>
                        <li className=' md:mr-10 cursor-pointer'><Link className="no-underline text-inherit hover:text-gray-200"  to="related" smooth={true}  duration={300}>Related Products</Link></li>
                        <li className=' md:mr-10 cursor-pointer'><NavLink className="no-underline text-inherit hover:text-gray-200"  to="/cart" >Cart</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-yellow-500 px-3 pb-1  text-xl font-bold text-white rounded-sm border border-yellow-600 hover:bg-yellow-600 hover:text-yellow-600 md:mt-[.4rem] hidden md:block'>Login</button>
                </div>
                <div className='md:hidden'>
                    {
                        openNav ? (
                            <FaTimes className='text-4xl mt-1 cursor-pointer hover:text-yellow-700' onClick={() => setOpenNav(!openNav)}  />
                        ) : 
                        (
                            <GiHamburgerMenu className='text-4xl mt-1 cursor-pointer hover:text-yellow-700' onClick={() => setOpenNav(!openNav)} />
                        )
                    }
                </div>
            </div>
        </div>
      
        <div className={`bg-yellow-500 md:hidden   ${openNav ? "block " : "h-0 w-0 hidden "}  duration-200`}>
            {/* <BreadCrumb className='text-white'/> */}
            <ul className="flex flex-col container mx-auto py-8 space-y-2 text-sm font-bold text-white">
                <li className=' cursor-pointer   hover:text-gray-300'><NavLink className="no-underline text-inherit hover:text-gray-200 block" to="/" onClick={() => setOpenNav(!openNav)} >Home</NavLink></li>

                {/* <li className='cursor-pointer   hover:text-gray-300'>Home</li> */}
                <li className="w-full h-[.5px] bg-white"></li>

                <li className=' cursor-pointer   hover:text-gray-300'><Link className="no-underline text-inherit hover:text-gray-200 block" to="version" smooth={true} offset={-300}  duration={500} onClick={() => setOpenNav(!openNav)} >Product Images</Link></li>
                <li className="w-full h-[.5px] bg-white"></li>

                <li className=' cursor-pointer   hover:text-gray-300'><Link className="no-underline text-inherit hover:text-gray-200 block" to="related" smooth={true} offset={-300}  duration={500} onClick={() => setOpenNav(!openNav)} >Related Products</Link></li>
                <li className="w-full h-[.5px] bg-white"></li>

                <li className=' cursor-pointer   hover:text-gray-300'><NavLink className="no-underline text-inherit hover:text-gray-200 block" to="/" onClick={() => setOpenNav(!openNav)} >Cart</NavLink></li>
                <li className="w-full h-[.5px] mb-2 bg-white"></li>


                {/* <label class="block"> */}
                        {/* <span class="sr-only">Search</span> */}
                        {/* <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                        </span> */}
                        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500  sm:text-sm text-black" placeholder="Search for anything..." type="text" name="search"/>
                {/* </label> */}
                {/* <input type="text" className='text-blue-400' /> */}
                
            </ul>
        </div>
    </div>
  );
}

export default ReusableNavbar;
