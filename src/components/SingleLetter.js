import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import './SingleLetter.css'


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
                <div className='header-area'>
                    <div className='letter-logo'>
                       <h1>LOGO</h1>
                    </div>
                    <div className='header-text'>
                      <h1>মাদারীপুর পল্লী বিদ্যুৎ সমিতি</h1>
                      <h3>শিবচর জোনাল অফিস</h3>
                      <h4>শিবচর, মাদারীপুর।</h4>
                    </div>

 
                </div>
                <hr/>
 <p>স্মারক নং - ----------------------------------------------------------------------------------------তারিখঃ <span>{name}</span></p> 
                <div className='name-address'>
                  <p>নামঃ {name}</p>
                  <p>পিতার নামঃ {}</p>
                  <p>গ্রামঃ {} <span>ডাকঘরঃ {}</span></p>
                  <p>উপজেলাঃ {} <span>জেলাঃ {}</span></p>
                  <p>মোবাইল নম্বরঃ {}</p>
                </div>
                
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