import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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






// delete function
    const deleteProduct = async (id)=>{
      console.log(id)
      let result = await fetch(`http://localhost:5000/products/${id}`,{
        method: "DELETE"
      });
      result = await result.json();
      if(result){
        alert("Are You sure? want One product delete");
        getProducts();
      }
    }




  return (
    <div className='product-all'>
      <h2>Number Of Product : ( {products.length} )</h2>  
        <ul>
            <li>S. no</li>
            <li>Name: </li>
            <li>Price: </li>
            <li>Category: </li>
            <li>AC: </li>
            <li>Operation: </li>
        </ul>
        {
            products.map((item, index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.ac}</li>
                <li><button onClick={()=>deleteProduct(item.ac)}>Delete</button> <Link to={`/update/${item._id}`}>UPDATE</Link>  </li>
            </ul>
            
            )
        }
    </div>
  )
}

export default ProductAll