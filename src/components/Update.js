import React, { useEffect } from 'react';
import './SingUp.css'
import {  toast } from 'react-toastify';
import { useParams, useNavigate} from 'react-router-dom';

const Update= () => {

    const [name, setName]=React.useState('');
    const [price, setPrice]=React.useState('');
    const [category, setCategory]=React.useState('');
    const [company, setCompany]=React.useState('');
    const [ac, setAc]=React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    
    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async()=>{
        // console.log(params)
        let result = await fetch(`http://localhost:5000/products/${params.id}`)
        result = await result.json();
        // console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setAc(result.ac);
        setCompany(result.company)
    }


    const updateProduct = async()=>{
        // console.log(name, price, category, ac, company)
        let result = await fetch(`http://localhost:5000/products/${params.id}`,{
            method: "PUT",
            body:JSON.stringify({name, price, category, ac, company}),
            headers:{
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        // console.log(result);
        toast("Product Update Successfully");
        if(result){
            navigate("/")
        }
        

    }


  return (
    <div>
        <div className='register'>
            <h2>Update Product</h2>
            <input className='inputBox' type="text"  placeholder=' Name'
            value={name} onChange={(e) => setName(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' Price'
            value={price} onChange={(e) => setPrice(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' category'
            value={category} onChange={(e) => setCategory(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' AC'
            value={ac} onChange={(e) => setAc(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' company name'
            value={company} onChange={(e) => setCompany(e.target.value)}
            />
            <button  onClick={updateProduct } className='signButton'>UPDATE</button>
        </div>
    </div>

  )
}

export default Update;