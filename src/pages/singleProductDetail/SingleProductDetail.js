import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { AiFillStar } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import {  Link, animateScroll as scroll } from 'react-scroll'
import logo from '../../components/asset/logo.svg';
import axios from 'axios'
import ReusableNavbar from '../../components/reusableNavbar/ReusableNavbar';

const SingleProductDetails = () => {
    const [product, setproduct] = useState([])
    const [relatedProduct, setrelatedProduct] = useState([])
    const [openNav, setOpenNav] = useState(false)
    const { id } = useParams()

    const { images } = product


  // For Getting product Based On ID
  useEffect(() => {
    if(id) {
      getSingleProduct()
    }
  }, [id])

    const getSingleProduct = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)

        const relatedProductData = await axios.get(`https://dummyjson.com/products/category/${response.data.category}`)
        setproduct(response.data)

        setrelatedProduct(relatedProductData.data.products)
    }
//   const image1 = images[0]
//   const image2 = images[1]
//   const image3 = images[2]
//   const image4 = images[3]
//   const image5 = images[4]

// const [image1, image2, image3, image4, image5] = images


  return (
    <div className='bg-slate-500 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-slate-700 '>
        <ReusableNavbar />
        <div className="container mx-auto md:mt-4">
        
            <div className="w-full flex flex-col md:space-x-0 items-center justify-center md:flex-row">
                <div className="w-[75vw] md:w-1/2 flex flex-col">
                    <img src={product.thumbnail} className='md:mt-4 mt-8 h-[21rem] md:max-w-[35vw]' alt='product image' />
                    {/* <div className='w-16 mt-4 hidden' > */}
                        {/* <img src={image1} className='mr-3' alt="" /> */}
                        {/* <img src={image2} className='mr-3' alt="" />
                        <img src={image3} className='mr-3' alt="" />
                        <img src={image4} className='mr-3' alt="" />
                        <img src={image5} className='mr-3' alt="" /> */}
                    {/* </div> */}
                </div>
                <div className="w-[75vw] my-10 text-white md:my-0 md:w-1/2 flex flex-col">
                    <p className='text-2xl font-mono tracking-tighter font-semibold'>{product.title}</p>
                    <p className='text-xl font-mono tracking-tighter  font-semibold'>{product.brand}</p>
                    <div className="flex items-center justify-start mb-3">
                        <AiFillStar className="text-2xl text-yellow-500" />
                        <AiFillStar className="text-2xl text-yellow-500" />
                        <AiFillStar className="text-2xl text-yellow-500" />
                        <AiFillStar className="text-2xl text-yellow-500" />
                        <AiFillStar className="text-2xl text-gray-400" />
                        <p className='ml-3 mb-0 text-xs font-semibold border-b-2 border-gray-300'>{product.rating} rating</p>
                    </div>
                    <p className='text-lg font-mono tracking-tighter uppercase  font-semibold'>{product.category}</p>
                    <p className=' font-semibold'>{product.description}</p>
                    
                    <p className='text-bold text-4xl'>${product.price}</p>
                    <button className='bg-yellow-500 py-1 text-xl font-bold text-white w-1/2 rounded-sm'>Add to cart</button>
                </div>
            </div>

            <div className='mt-4'>
                <h2 name='version' className='text-white font-bold mb-3 text-center md:mb-6 mx-8 md:text-left md:mx-0'>Product Images</h2>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap">
                        {/* <div className="overlay">
                        {console.log("item",item)}

                            <div className="overlay-content">
                                <button className='overlay-btn'> <Link to={`/note/${item.id}`} className='read-more'> Read more </Link> </button>
                                <div className="del-edit">
                                    <Link to={`/editNote/${item.id}`} style={{textDecoration: 'none'}}> <BiEdit className='del' />  </Link>
                                    <AiFillDelete className='edit' onClick={() => deleteNote(item.id)} />
                                </div>
                            </div>
                        </div> */}
                    
                    {
                        images && images.map((item, index) => <img key={index} src={item} className='w-[75vw] h-[55vh] mt-8 md:mt-5  md:w-[22rem] md:mr-4' alt='product image' />)
                    }

                    
                </div>
            </div>

            <div className="my-12">
                <h2 name='related' className='text-white font-bold mb-3 text-center mx-8 md:text-left md:mx-0'>Related Products</h2>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap">
                    {
                        relatedProduct && 
                            relatedProduct.map((item) => (
                                <div key={item.id} className="w-[75vw] h-[60vh] mt-8 md:mt-4 md:mr-6 md:w-[25vw] md:h-[50vh] bg-transparent shadow-md shadow-black cursor-pointer group perspective">
                                    <div className='relative preserve-3d hover:my-rotate-y-180 w-full h-full duration-1000'>
                                        <div className="absolute backface-hidden border-2 w-full h-full">
                                            <img src={item.thumbnail} className='w-full h-full' alt="" />
                                        </div>
                                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
                                            <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 md:pt-10 px-2 pb-24" >
                                                <h1 className='text-[1.3rem] font-bold'>{item.title}</h1>
                                                <p className="my-2 font-semibold text-[1rem]">{item.brand}</p>
                                                <p>{item.description}</p>
                                                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20  delay-500 duration-1000 hover:scale-105 transition-all group-hover:bottom-10 scale-0 group-hover:scale-125">
                                                    <Link to='page-top' > <NavLink to={`/product/${item.id}`} > View Details </NavLink> </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default SingleProductDetails;

{/* <Link to='page-top' > <NavLink to={`/product/${item.id}`} > <img src={item.thumbnail} className='w-[75vw] h-[60vh] mt-8 md:mt-4 md:mr-6 md:w-[25vw] md:h-[50vh]  border-blue-500 shadow-md shadow-black' alt="" /> </NavLink> </Link> */}


