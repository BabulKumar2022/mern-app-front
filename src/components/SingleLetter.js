import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';


const SingleLetter = ({item, index}) => {
    const { name, price, category, ac}= item;


    const ref = useRef();



const deleteProduct2 = async(id)=>{
    console.log(id)
    let result = await fetch(`http://localhost:5000/products2/${id}`,{
      method: "DELETE"
    });
    result = await result.json();
    if(result){
      alert("Are You sure? want One product delete");
    
    }
};

  return (
    <div className='print' >
        <ul key={item._id}>
            <div ref={ref} className='letter-area'>
                <li>{index+1}</li> 
                <li>{name}</li>
                <li>{price}</li>
                <li>{category}</li>
                <li>{ac}</li>
            </div>
                <li><ReactToPrint trigger={()=> <button>Print</button>} 
                content={()=> ref.current}
                /></li> 
                <li><button onClick={()=> deleteProduct2(item._id)}>Delete</button></li>
        </ul>
    </div>
  )
}

export default SingleLetter