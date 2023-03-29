import React, { useEffect } from 'react';
import './SingUp.css'
import {  toast } from 'react-toastify';
import { useParams, useNavigate} from 'react-router-dom';

const Update= () => {

    const [name, setName]=React.useState('');
    const [fatherName, setFatherName]=React.useState('');
    const [village, setVillage]=React.useState('');
    const [post, setPost]=React.useState('');
    const [upozila, setUpozila]=React.useState('');
    const [zila, setUZila]=React.useState('');
    const [isuDate, setIsuDate]=React.useState('');
    const [meserDate, setMeserDate]=React.useState('');
    const [lastDate, setLastDate]=React.useState('');
    const [pfValue, setPfValue]=React.useState('');
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
        setFatherName(result.fatherName);
        setVillage(result.village);
        setPost(result.post);
        setUpozila(result.upozila);
        setUZila(result.zila);
        setIsuDate(result.isuDate);
        setMeserDate(result.meserDate);
        setLastDate(result.lastDate);
        setPfValue(result.pfValue);
        setAc(result.ac);
        
    }

// send data UI to server API
    const updateProduct = async()=>{
        // console.log(name, price, category, ac, company)
        let result = await fetch("http://localhost:5000/addProduct2",{
            method: "POST",
            body:JSON.stringify({name, fatherName, village, post, upozila, zila, isuDate, meserDate, lastDate, ac, pfValue}),
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

<input className='inputBox' type="text"  placeholder=' Father Name'
            value={fatherName} onChange={(e) => setFatherName(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' Village Name'
            value={village} onChange={(e) => setVillage(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' Name of post'
            value={post} onChange={(e) => setPost(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' Upozila'
            value={upozila} onChange={(e) => setUpozila(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' Zila'
            value={zila} onChange={(e) => setUZila(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' Letter issue date'
            value={isuDate} onChange={(e) => setIsuDate(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' PF measurement date'
            value={meserDate} onChange={(e) => setMeserDate(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' Last date'
            value={lastDate} onChange={(e) => setLastDate(e.target.value)}
            />
            <input className='inputBox' type="text"  placeholder=' AC'
            value={ac} onChange={(e) => setAc(e.target.value)}
            />

            <input className='inputBox' type="text"  placeholder=' PF Value'
            value={pfValue} onChange={(e) => setPfValue(e.target.value)}
            />
            <button  onClick={updateProduct } className='signButton'>UPDATE</button>
        </div>
    </div>

  )
}

export default Update;