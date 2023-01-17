import { useState, useEffect} from 'react';
import axios from 'axios';


const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchProducts()
    },[url])

    const fetchProducts = async () => {
        const res = await axios.get(url)
        const { products } = await res.data
        setData(products)
        // console.log(products)
    }

  return data
}

export default useFetch;
