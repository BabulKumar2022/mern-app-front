import React from 'react';
import './SingUp.css'
import {  toast } from 'react-toastify';

const AddProduct = () => {

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
    const addProduct = async()=>{
        // console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userId);
        let result = await fetch("http://localhost:5000/addProduct", {
            method: "POST",
            body: JSON.stringify({name, fatherName, village, post, upozila, zila, isuDate, meserDate, lastDate, ac, pfValue, userId}),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.log(result);
        toast("Product Add Successfully");

    }


  return (
    <div>
        <div className='register'>
            <h2>Add New Product</h2>
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
            <button  onClick={addProduct } className='signButton'>SUBMIT</button>
        </div>
    </div>

  )
}

export default AddProduct;