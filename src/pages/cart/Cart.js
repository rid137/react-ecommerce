import { useContext, useState, useEffect, useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import logo from '../../components/asset/logo.svg';
import { toast } from 'react-toastify';
import { Product } from '../../components/context/ProductContext';
import { loadStripe } from '@stripe/stripe-js';


const Cart = () => {
    const { flashDealProduct, topCategoryFemaleProduct, topCategoryMaleProduct, furnitureProducts, handleClick, cart, setCart } = Product()
    const [price, setPrice] = useState([])
    const [discount, setDiscount] = useState([])

    const [stripeError, setStripeError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate= useNavigate()

    // const [inputValue, setInputValue] = useState ('')
    // const count = useRef(1)
    // <input type="number" onChange={(e) => setInputValue(e.target.value)} className='border-2 border-yellow-500 w-12' />


    useEffect(() => {
        handlePrice()
        handleDiscount()
    });

    const estimatedShipping = 10

    const totalPayment =  Math.round(price + estimatedShipping - discount)

    const handleAmount = (item, am) => {
        const index = cart.indexOf(item);
        cart[index].amount += am;

        if(cart[index].amount === 0) cart[index].amount = 1;
        setCart([...cart])
    }

    const handlePrice = () => {
        let result = 0
        cart.map((item) => result += item.amount * item.price)
        setPrice(result)
    }

    const handleDiscount = () => {
        let discountPercentage = 0
        cart.map((item) => discountPercentage += item.discountPercentage)
        setDiscount(Math.round(discountPercentage))
    }

    const handleRemove = (item) => {
       if(window.confirm('Are you sure you want to remove this item from your cart?')) {
           const product = cart.filter((items) => items.id !== item.id)
           setCart(product)
           toast.success('Item removed successfully')
       }
    }

    // const checkout = async () => {
    //     await fetch('http://localhost:4000/checkout', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({items: cart})
    //     }).then((response) => {
    //         return response.json();
    //     }).then((response) => {
    //         if(response.url) {
    //             window.location.assign(response.url);  // Forwarding User To Stripe
    //         }
    //     })
    // }

    // GET STRIPE PROMISE
    let stripePromise

    const getStripe = () => {
        if(!stripePromise) {
            stripePromise = loadStripe("pk_test_51Mk2RoL1nuvFn8UHm1SNCbPLX21s5CuWCgm2V0z7hvoUbf4ClhCZaGCPojqQtUrq0LLMcRdGkp18IQ5ThvIT1Zqw00piCSgJMG");
        }

        return stripePromise;
    }


    // GET INFO OF THE PRODUCT FOR THE STRIPE
    let stripeFeature = []

    const getStripeFeatures = () => {
        cart.forEach((item) => {
            stripeFeature.push(
                {
                    price: item.priceKey,
                    quantity: item.amount
                }
            )
            console.log(item)
            console.log(stripeFeature)
        })
        return stripeFeature
    }

    getStripeFeatures()
    
    // INFO THAT IS SENT TO STRIPE
    const checkoutOptions = {
        lineItems: stripeFeature,
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
    }
    
    let x = true
    // REDIRECT TO STRIPE CHECKOUT
    const redirectToCheckout = async () => {
        // if(x === false) 
        // navigate('/')  
        // return
        // else {
        if(x) {
            setIsLoading(true)
        // }
         //WHEN THE FUNCTION IS BEING CALLED, LOADING IS TRUE
        console.log('redirectToStripe')

        const stripe = await getStripe()
        // GET ERROR MESSAGE IF ANY
        const { error } = await stripe.redirectToCheckout(checkoutOptions)
        console.log("stripe checkout error", error)

        if(error) {
            setStripeError(error.message);
        }
        setIsLoading(false)
        }

        else {
            navigate('/')  
        }
    }

    // DISPLAY ERROR MESSAGE IF ANY
    if(stripeError !== null) {
        alert(stripeError);
    };


  return (
    <div className='bg-slate-200 md:w-screen   md:h-screen' >
        <div className="bg-yellow-500 h-12">
            <div className=" flex items-center justify-between container mx-auto">
                <div className='flex items-center cursor-pointer'>
                    <img src={logo} className=' w-2/3 mt-1' alt="" />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex my-auto text-xl text-white font-bold text-center'>
                        <li className='cursor-pointer hover:text-gray-200 md:mr-10'> <Link to='/' className='no-underline hover:text-inherit text-inherit' >Continue Shopping</Link> </li>
                    </ul>
                </div>
                <div>
                    <Link className='no-underline text-white hover:text-yellow-600' ><button className='bg-yellow-500 px-3  pb-1 text-xl font-bold text-white rounded-sm border border-yellow-600 mt-[.4rem] hover:bg-yellow-600 '> Login </button></Link>
                </div>
            </div>
        </div> 

        <div className="flex flex-col md:flex-row mx-auto mt-10 w-[90vw] h-[80vh] bg-white md:shadow-xl">
            <div className='md:w-9/12 p-7 overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-slate-700'>
                <div className="flex items-center justify-between border-b-2 border-gray-400">
                    <p className='text-2xl font-bold'>Shopping Cart</p>
                    <p className='text-2xl font-bold'>{cart.length} Items</p>
                </div>
                
                <div className='mt-3'>
                    
                    <Table responsive>
                        <thead>
                            <tr>
                            <th className='font-bold text-gray-500'>Product Details</th>
                            <th className='font-bold text-gray-500'>Quantity</th>
                            <th className='font-bold text-gray-500'>Price</th>
                            <th className='font-bold text-gray-500'>Total</th>
                            </tr>
                        </thead>
                        {   
                            cart && 
                                cart.map((item, index) => (
                                    <tbody key={index}>
                                        <tr >
                                        <td className='flex items-center ' >
                                            <div>
                                                <img src={item.thumbnail} className='w-32 h-24 object-cover' alt="" />
                                            </div>
                                            <div className='flex flex-col items-start ml-4 md:mb-6'>
                                                <p className='text-lg font-bold'>{item.title}</p>
                                                <p className='bg-yellow-500 font-bold text-white px-2'>{item.brand}</p>
                                            </div>
                                        </td>
                                        <td className='mt-4'>
                                            <span className='cursor-pointer' onClick={() => handleAmount(item, -1)}> <AiOutlineMinus className='inline text-xl'/> </span>
                                            <span className='border-2 border-gray-300 font-bold text-gray-600 sm:px-1 md:px-3 md:mx-1'>{item.amount}</span>
                                            <span className='cursor-pointer' onClick={() => handleAmount(item, 1)}> <AiOutlinePlus className='inline text-xl'/> </span>
                                        </td>
                                        <td className='mt-4 font-bold'>${item.price}</td>
                                        <td className='mt-4 font-bold'>${item.amount * item.price} <span className='ml-10 cursor-pointer' onClick={() => (handleRemove(item))}><MdDelete className='inline text-xl text-red-700'/></span></td>
                                        </tr>
                                        
                                    </tbody>
                                ))
                        }
                    </Table>
                   
                </div>

            </div>

            <div className='hidden md:block md:w-3/12 p-4 w-full h-[50vh] md:h-full -mr-10 bg-gray-200'>
                <div className="flex flex-col space-y-6">
                    <div className="text-2xl pt-1 font-bold border-b-2 border-gray-400">
                        <p>Order Summary</p>
                    </div>
                    <div className="flex items-center justify-between font-bold">
                        <p>Subtotal</p>
                        <p>${price}</p>
                    </div>

                    <div className="flex items-center justify-between font-bold">
                        <p>Estimated Shipping</p>
                        <p>${estimatedShipping}</p>
                    </div>

                    <div className="flex items-center justify-between font-bold">
                        <p>Discount Percentage</p>
                        <p>${discount}</p>
                    </div>

                    <div className="flex items-center justify-between text-xl font-bold">
                        <p>Total</p>
                        <p>${totalPayment}</p>
                    </div>

                    <button onClick={redirectToCheckout} disabled={isLoading} className="text-xl text-white border-2 border-slate-300 w-full font-bold px-3 py-1 pb-2 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md">{isLoading? 'PROCESSING...' : 'CHECKOUT NOW'}</button>
                </div>
            </div>

        </div>   

        <div className=" md:hidden mt-6">
            <div className="w-[85vw] mx-auto flex flex-col space-y-6 pb-8">
                <div className="text-2xl pt-1 font-bold border-b-2 border-gray-400">
                    <p>Order Summary</p>
                </div>
                <div className="flex items-center justify-between font-bold">
                    <p>Subtotal</p>
                    <p>${price}</p>
                </div>

                <div className="flex items-center justify-between font-bold">
                    <p>Estimated Shipping</p>
                    <p>${estimatedShipping}</p>
                </div>

                <div className="flex items-center justify-between font-bold">
                    <p>Discount Percentage</p>
                    <p>${discount}</p>
                </div>

                <div className="flex items-center justify-between text-xl font-bold">
                    <p>Total</p>
                    <p>${totalPayment}</p>
                </div>

                <button onClick={redirectToCheckout} disabled={isLoading} className=" text-lg text-center text-white border-2 border-slate-300 w-[50%] font-bold py-1 bg-yellow-500 hover:scale-105 transition-all duration-200 rounded-md">{isLoading? 'PROCESSING...' : 'CHECKOUT NOW'}</button>
            </div>
        </div>
    </div>
  );
}

export default Cart;
