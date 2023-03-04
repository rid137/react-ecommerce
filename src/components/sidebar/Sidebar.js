import { useState, useEffect } from "react";
import logo from '../asset/logo.svg';
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { IoFlashSharp, IoSettings } from "react-icons/io5";
import { SiProgress } from "react-icons/si";
import { MdHelp } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineArrowUp, AiOutlineDown, AiOutlineMenu, AiFillCopyrightCircle } from "react-icons/ai";
import { Product } from "../context/ProductContext";
import { Link } from "react-router-dom";
import axios from "axios";



const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const [showProgramsSubmenu, setShowProgramsSubmenu] = useState(false)
    const [showCategorySubmenu, setShowCategorySubmenu] = useState(false)
    const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false)
    const [showHelpSubmenu, setShowHelpSubmenu] = useState(false)

    const [showMenFashionSubmenu, setShowMenFashionSubmenu] = useState(false)
    const [showWomenFashionSubmenu, setShowWomenFashionSubmenu] = useState(false)
    const [showSkinCareSubmenu, setShowSkinCareSubmenu] = useState(false)
    const [showElectronicDeviceSubmenu, setShowElectronicDeviceSubmenu] = useState(false)
    const [showEdiblesSubmenu, setShowEdiblesSubmenu] = useState(false)

    const [category, setCategory] = useState([])


    useEffect(() => {
        
        getProductCat()
    }, []);

    const getProductCat = async () => {
        const response = await axios.get('https://dummyjson.com/products/categories')
  
        const id = Math.floor(Math.random() * 10000) + 1
  
        // const newTask = [id, response.data]
  
        // seTtasks([...tasks, newTask])
          // setCategory(newTask)
          setCategory(response.data)
    }

    // const { category } = Product()

    // console.log('sidebar',category)

    // {
    //     category && category.filter((item, index) => {
    //       return index === 10 || index === 11 || index === 12 ? item : ''
    //     }).map((item, index) => (
    //       <>
    // key={index}         <li>
    //           <Link to={`/category/${item}`}>{item}</Link>
    //         </li>
    //       </>
    //     ))
    //   }


  return (
    <>
    {    console.log('sidebar',category)
}
    <div className={`bg-dark-purple z-10 h-[screen] fixed top-0 bottom-0  ${open ? "w-72 pt-8 pl-3 pr-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-rose-500" : "w-12"}  duration-300`}>

        <div className={`inline-flex -mt-2 items-center ${!open && " border-light-white -mt-3"}`}>
            <img src={logo} alt="" className={`${!open && "w-10 pl-2 mr-[.2rem]"} cursor-pointer block float-left mr-2`} />
            <h3 className={`${!open && "scale-0"} text-white text-xl font-bold duration-300 origin-left`}>E-sale</h3>
        </div>

        <div className="flex flex-col gap-y-2 mt-1">
            <div className={`flex items-center mt-6 ${!open ? "" : "px-[.6rem] pr-4 bg-light-white rounded-md py-2"}  `}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer  ${open ? "mr-2" : "text-3xl bg-light-white py-[.25rem] w-full"} `}  />
                <input type="search" placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none mr-2 ${!open && "hidden"}`} />
            </div>

            <ul className=" -ml-8">
                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 ": "px-[.6rem] py-[.3rem]"}  hover:bg-light-white`}>
                    <span className="text-2xl block float-left"><IoFlashSharp /></span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Flash Deal</span>
                </li>
                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 ": "px-[.6rem] py-[.3rem]"} mt-2 hover:bg-light-white`}>
                    <span className="text-2xl block float-left"><AiFillCopyrightCircle /></span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Top Category</span>
                </li>
                
            </ul>

            <ul className="-ml-8">
                
                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 ": "px-[.6rem] py-[.3rem]"} mt-2 hover:bg-light-white`} onClick={() => setShowProgramsSubmenu(!showProgramsSubmenu)}>
                    <span className="text-2xl block float-left"><SiProgress /></span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Programs & Features</span>
                    <AiOutlineDown className={`text-md duration-200 ${showProgramsSubmenu && "rotate-180"} ${!open && "hidden"}`} />
                </li>

                {/* Programs Submenu */}
                <div className={`text-left text-gray-300 flex flex-col  ml-12 duration-400 mt-1 -mb-4 ${!showProgramsSubmenu || !open ? "hidden" : ""}`}>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2 rounded-md  hover:bg-light-white">Gift Cards</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">E-Sale Live</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">E-Sale Second Chance</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2 rounded-md  hover:bg-light-white">International Shopping</h1>
                </div>

                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 ": "px-[.6rem] py-[.3rem]"} mt-2 hover:bg-light-white`} onClick={() => setShowCategorySubmenu(!showCategorySubmenu)}>
                    <span className="text-2xl block float-left"><BiCategoryAlt /></span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Product Category</span>
                    <AiOutlineDown className={`text-md duration-200 ${showCategorySubmenu && "rotate-180"} ${!open && "hidden"}`} />
                </li>
            
            </ul>

            

            {/* Category Submenu */}
            <div className={`text-left text-gray-300 flex flex-col  ml-12 duration-400 -mt-5 -mb-5 ${!showCategorySubmenu || !open ? "hidden" : ""}`}>
                <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowMenFashionSubmenu(!showMenFashionSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Men's Fashion</h1>
                    <AiOutlineDown className={`text-md duration-200 ${showMenFashionSubmenu && "rotate-180"}`} />
                </li>

                {/* Men's Fashion SubMenu */}
                <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showMenFashionSubmenu || !open ? "hidden" : ""}`}>
                    

                    {
                        category && category.filter((item, index) => {
                        return index === 10 || index === 11 || index === 12 || index === 7 ? item : ''
                        }).map((item, index) => (
                        <>
                            <h1 key={index} className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white hover:underline">
                                <Link to={`/category/${item}`} className='no-underline text-gray-300 block hover:text-gray-300 '>{item}</Link>
                            </h1>
                        </>
                        ))
                    }


                </div>

                <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowWomenFashionSubmenu(!showWomenFashionSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Women's Fashion</h1>
                    <AiOutlineDown className={`text-md duration-200 ${showWomenFashionSubmenu && "rotate-180"}`} />
                </li>

                {/* Women's Fashion SubMenu */}
                <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showWomenFashionSubmenu || !open ? "hidden" : ""}`}>
                    

                    {
                        category && category.filter((item, index) => {
                        return index === 8 || index === 9 || index === 13 || index === 14 || index === 15  ? item : ''
                        }).map((item, index) => (
                        <>
                            <h1 key={index} className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white hover:underline">
                                <Link to={`/category/${item}`} className='no-underline text-gray-300 block hover:text-gray-300'>{item}</Link>
                            </h1>
                        </>
                        ))
                    }

                </div>    

                <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowElectronicDeviceSubmenu(!showElectronicDeviceSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Electronic Devices</h1>
                    <AiOutlineDown className={`text-md duration-200 ${showElectronicDeviceSubmenu && "rotate-180"}`} />
                </li>

                {/* Electronic Devices SubMenu */}
                <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showElectronicDeviceSubmenu || !open ? "hidden" : ""}`}>
                    

                    {
                        category && category.filter((item, index) => {
                        return index === 0 || index === 1 || index === 17  ? item : ''
                        }).map((item, index) => (
                        <>
                            <h1 key={index} className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white hover:underline">
                                <Link to={`/category/${item}`} className='no-underline text-gray-300 block hover:text-gray-300'>{item}</Link>
                            </h1>
                        </>
                        ))
                    }

                </div>    

                
                <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowSkinCareSubmenu(!showSkinCareSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Skin Care</h1>
                    <AiOutlineDown className={`text-md duration-200 ${showSkinCareSubmenu && "rotate-180"}`} />
                </li>

                {/* Skin Care SubMenu */}
                <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showSkinCareSubmenu || !open ? "hidden" : ""}`}>
                    

                    {
                        category && category.filter((item, index) => {
                        return index === 3 || index === 2  ? item : ''
                        }).map((item, index) => (
                        <>
                            <h1 key={index} className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white hover:underline">
                                <Link to={`/category/${item}`} className='no-underline text-gray-300 block hover:text-gray-300'>{item}</Link>
                            </h1>
                        </>
                        ))
                    }

                </div>    

                <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowEdiblesSubmenu(!showEdiblesSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Edibles</h1>
                    <AiOutlineDown className={`text-md duration-200 ${showEdiblesSubmenu && "rotate-180"}`} />
                </li>

                {/* Edibles SubMenu */}
                <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showEdiblesSubmenu || !open ? "hidden" : ""}`}>
                    

                    {
                        category && category.filter((item, index) => {
                        return index === 4  ? item : ''
                        }).map((item, index) => (
                        <>
                            <h1 key={index} className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white hover:underline">
                                <Link to={`/category/${item}`} className='no-underline text-gray-300 block hover:text-gray-300'>{item}</Link>
                            </h1>
                        </>
                        ))
                    }

                </div>    
                

                {/* <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowSecondSubmenu(!showSecondSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Skin Care</h1>
                    <AiOutlineDown className={`text-md duration-200 ${!showSecondSubmenu && "rotate-180"}`} />
                </li>    */}

                {/* Skin Care SubMenu */}
                {/* <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showSecondSubmenu || !open ? "hidden" : ""}`}>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Submenu 1</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Submenu 1</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Submenu 1</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Submenu 1</h1>
                </div>    

                <li className=" flex items-center gap-x-4 cursor-pointer p-1 rounded-md mt-1 hover:bg-light-white" onClick={() => setShowSecondSubmenu(!showSecondSubmenu)}>
                    <h1 className="text-base font-medium flex-1  ">Edibles</h1>
                    <AiOutlineDown className={`text-md duration-200 ${!showSecondSubmenu && "rotate-180"}`} />
                </li>   */}

                {/* Edibles SubMenu */}
                {/* <div className={`text-left text-gray-300 flex flex-col   duration-400  ${!showSecondSubmenu || !open ? "hidden" : ""}`}>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Submenu 1</h1>
                </div>              */}
                
            </div>
            

            <ul className="-ml-8">
                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 ": "px-[.6rem] py-[.3rem]"} mt-2 hover:bg-light-white`} onClick={() => setShowSettingsSubmenu(!showSettingsSubmenu)}>
                    <span className="text-2xl block float-left"><IoSettings /></span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Settings</span>
                    <AiOutlineDown className={`text-md duration-200 ${showSettingsSubmenu && "rotate-180"} ${!open && "hidden"}`} />
                </li>

                {/* Settings Submenu */}
                <div className={`text-left text-gray-300 flex flex-col  ml-12 duration-400 mt-1 -mb-4 ${!showSettingsSubmenu || !open ? "hidden" : ""}`}>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2 rounded-md  hover:bg-light-white">Your Account</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Sign Out</h1>
                </div>

                <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 ": "px-[.6rem] py-[.3rem]"} mt-2 hover:bg-light-white`} onClick={() => setShowHelpSubmenu(!showHelpSubmenu)}>
                    <span className="text-2xl block float-left"><MdHelp /></span>
                    <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Help</span>
                    <AiOutlineDown className={`text-md duration-200 ${showHelpSubmenu && "rotate-180"} ${!open && "hidden"}`} />
                </li>

                {/* Help Submenu */}
                <div className={`text-left text-gray-300 flex flex-col  ml-12 duration-400 mt-1 -mb-4 ${!showHelpSubmenu || !open ? "hidden" : ""}`}>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2 rounded-md  hover:bg-light-white">Customer Service</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">Customer Platforms</h1>
                    <h1 className="text-base font-medium cursor-pointer py-2 px-1 -mt-2  rounded-md  hover:bg-light-white">FAQs</h1>
                </div>


                <div className={`${open && 'border-t-[.2px] border-gray-300 mt-[.7rem]'}`}>
                    <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  ${open ? " rounded-md p-2 justify-end": "px-[.5rem] py-[.3rem]"} mt-2 hover:bg-light-white`} onClick={() => setOpen(!open)}>
                        <RiArrowRightSLine className={`text-3xl block float-left ${open && 'rotate-180 -mr-2'}`} />
                        {/* <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>Dashboard</span> */}
                    </li>
                </div>
               
            </ul>
        </div>

    </div>

    {/* <div className="text-red-800">
        Hello
        Hello
        Hello
        Hello
        Hello
        Hello
    </div> */}
    </>
  );
}

export default Sidebar;
