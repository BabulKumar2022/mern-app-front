import React, { useEffect, useState} from 'react';


import './NewLeter.css'
import SingleLetter from './SingleLetter';



const NewLetter= () => {
 
  const [products2, setProducts2] = useState([]);

  useEffect(()=>{
      getProducts();
  },[]);
    
// get all product API
const getProducts = async (id)=>{
  let result = await fetch("http://localhost:5000/products2");
  result = await result.json();
  setProducts2(result);
};
// console.log(products);

  return (
        <div className='product-all'>
          <h2>Products2 Collection </h2> 
          <h2>Number Of Product : ( {products2.length} )</h2> 
              {
                  products2.map((item, index)=>
                  <SingleLetter key={item}  item={item} index={index}></SingleLetter>
                  )
              } 
        </div>
  )
}

export default NewLetter;