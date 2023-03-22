import React from 'react';
import './SingUp.css'

const AddProduct = () => {

    const [name, setName]=React.useState('');
    const [price, setPrice]=React.useState('');
    const [category, setCategory]=React.useState('');
    const [company, setCompany]=React.useState('');
    const addProduct = async()=>{
        // console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userId);
        let result = await fetch("http://localhost:5000/addProduct", {
            method: "POST",
            body: JSON.stringify({name, price, category, company, userId}),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.log(result);

    }


  return (
    <div>
        <div className='register'>
            <h2>Add New Product</h2>
            <input className='inputBox' type="text"  placeholder=' Name'
            value={name} onChange={(e) => setName(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' Price'
            value={price} onChange={(e) => setPrice(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' category'
            value={category} onChange={(e) => setCategory(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' company name'
            value={company} onChange={(e) => setCompany(e.target.value)}
            />
            <button onClick={addProduct} className='signButton'>SUBMIT</button>
        </div>
    </div>

  )
}

export default AddProduct;