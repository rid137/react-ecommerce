import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './category.css';
import ReusableNavbar from '../../components/reusableNavbar/ReusableNavbar';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import pexelpassport2 from '../../components/asset/pexelpassport2.jpg'
import pexelpassport from '../../components/asset/pexelpassport.jpg'
import { UserAuth } from '../../components/context/AuthContext';


const Category = () => {
    const [catProducts, setCatProducts] = useState([])

    const { user, logOut } = UserAuth();
    
    const { id } = useParams()

    useEffect(() => {
        // const catProducts = async () => {
        // const getProducts = await getProductCats()    

        // setCatProducts(getProducts)

        // } 

        // catProducts()
        getProductCats()
    }, []);

    const getProductCats = async () => {
        const response = await axios.get(`https://dummyjson.com/products/category/${id}`)

        const {products} = response.data

        setCatProducts(products)
    }

    const clipWords = (words) => {
        const word = words.slice(0, 150) + '...'
        return word
    }


    
  return (
    <div className='bg-[#fbe9e7]'>

        <ReusableNavbar itemOne='Home' itemTwo='Continue Shopping' itemThree='Login' itemFour='Cart' />

        <div className="h-[1.7rem] bg-[#fbe9e7] text-xl font-bold">
            <marquee behavior="" direction="">Hover over the products to see details</marquee>
        </div>
        <div className="h-[2.7rem] bg-[#fbe9e7] pt-2 container">
            <h2 className='font-bold ml-2 text-xl md:text-3xl'>Products Category: { id }</h2>
        </div>
        <div className="cards-container container bg-[#fbe9e7]">
            
        {
            catProducts && catProducts.map((item) => (
                <>
                    <div className="cards">
                        <div className="imgBox">
                            <img src={item.thumbnail} alt="" />
                            <img src={item.images[0]} alt="" />
                        </div>
                        <div className="details">
                            <div className="content">
                                <h2> {item.title} </h2>
                                <p>{item.description}</p>
                                <button className="text-2xl border-2 border-slate-300 px-3 pb-1 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md"><Link to={`/product/${item.id}`} className='no-underline text-white'>View Details</Link></button>
                                {/* <div className="social-icons">
                                    <a href='#'> <GiHamburgerMenu /> </a>
                                    <a href='#'> <FaTimes /> </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </>
            ))
        }

            

           

        </div>
      {console.log("tops:", id)}
      {console.log(catProducts)}
      {console.log(typeof id)}
    </div>
  );
}

export default Category;
