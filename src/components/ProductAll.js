import React, { useEffect, useState } from 'react';
import './ProductAll.css'

const ProductAll = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);
    const getProducts = async ()=>{
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    };
    console.log(products);
  return (
    <div className='product-all'>
        ProductAll: {products.length}
        <ul>
            <li>S. no</li>
            <li>Name: </li>
            <li>Price: </li>
            <li>Category: </li>
        </ul>
        {
            products.map((item, index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
            </ul>
            
            )
        }
    </div>
  )
}

export default ProductAll