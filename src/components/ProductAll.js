import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductAll.css'

const ProductAll = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[]);

// get all product API
    const getProducts = async ()=>{
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
    };
    // console.log(products);






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
// search function

    const searchHandle = async (event)=>{
      let key = event.target.value;
      console.log( event.target.value)
      let result = await fetch(`http://localhost:5000/search/${key}`)
          result = await result.json();
       
          if(result){
            setProducts(result);
          }
          // console.log(result)
  }


  return (
    <div className='product-all'>
      <h3>Search AC</h3>
     <input onChange={searchHandle} type="text" className='searchBox' placeholder='Input AC'/>
      <h2>Number Of Product : ( {products.length} )</h2>  
        <ul>
            <li>S. no</li>
            <li>Name: </li>
            <li>F-Name: </li>
            <li>Village: </li>
            <li>Post: </li>
            <li>Upozela: </li>
            <li>Zila: </li>
            <li>isuDate: </li>
            <li>meserDate: </li>
            <li>lastDate: </li>
            <li>pfValue: </li>
            <li>AC: </li>
            <li>Operation: </li>
        </ul>
        {
            products.map((item, index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.fatherName}</li>
                <li>{item.village}</li>
                <li>{item.post}</li>
                <li>{item.upozila}</li>
                <li>{item.zila}</li>
                <li>{item.isuDate}</li>
                <li>{item.meserDate}</li>
                <li>{item.lastDate}</li>
                <li>{item.pfValue}</li>
                <li>{item.ac}</li>
                <li><button onClick={()=>deleteProduct(item._id)}>Delete</button> <Link to={`/update/${item._id}`}>UPDATE</Link>  </li>
            </ul>
            
            )
        }
    </div>
  )
}

export default ProductAll