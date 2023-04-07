import React, { useEffect, useState,  useRef} from 'react';
import ReactToPrint from 'react-to-print';
import './NewLeter.css'
import SingleLetter from './SingleLetter';



const NewLetter= () => {
  const ref = useRef();

  const [products2, setProducts2] = useState([]);

  useEffect(()=>{
      getProducts2();
  },[]);
    
// get all product API
  const getProducts2 = async (id)=>{
    let result = await fetch("http://localhost:5000/products2");
    result = await result.json();
    setProducts2(result);
  };
// console.log(products);

  return (
        <div className='product-all'>
          {/* <h2>Products2 Collection </h2> 
          <h2>Number Of Product : ( {products2.length} )</h2>  */}
              <div ref={ref}>
              {
                        products2.map((item, index)=>
                        <SingleLetter key={item}  item={item} index={index}></SingleLetter>
                        )
                    } 

              </div > 
              <li><ReactToPrint trigger={()=> <button>Print</button>} 
                content={()=> ref.current}
                /></li> 
        </div>
  )
}

export default NewLetter;