import React, { useState } from 'react'
import './Xle.css'
import Data from './Data'
import * as XLSX from 'xlsx'


const Xle = () => {

    const [excelFile, setExcelFile] = useState(null);
    const [excelFileErr, setExcelFileErr] = useState(null);

console.log(excelFile);

    const [excelData, setExcelData] = useState(null)



const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
const handleFile = (e) =>{
    let selectedFile = e.target.files[0];
    if(selectedFile){
        // console.log(selectedFile.type)
        if(selectedFile && fileType.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload=(e)=>{
                setExcelFileErr(null);
                setExcelFile(e.target.result);

            }

        }else{
            setExcelFileErr("Please select excel file")
            setExcelFile(null);
        }
    }else{
        setExcelFileErr("Please select file")
    }

}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile !== null){
        const workbook = XLSX.read(excelFile, {type:"buffer"});
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(data);
        localStorage.setItem("xle", data);

    }else{
        setExcelData(null)
    }

}
const searchHandleData = async (event)=>{
    let key = event.target.value;
    console.log( event.target.value)
        
        // console.log(result)
}
  return (
    <div className='container'>
        <div className="form">
            <form onSubmit={handleSubmit} className="form-group" autoComplete="off">
                <label> <h5>Upload Exlcel file</h5></label>
                <br></br>
                <input onChange={handleFile} type='file' className='form-control' required/>
                {excelFileErr && <div className='text-danger'>{excelFileErr}</div>}
                <button type='submit' className='btn btn-success' style={{marginTop: 5+'px'}}>Submit</button>
            </form>
        </div>
        <br/>
        <hr/>
        <input onChange={searchHandleData} type="text" className='searchBox' placeholder='Input CMO NO'/>
        <h5>View Exlcel file</h5>
        <div className="viewer">
            {excelData == null && <>No file selected</>}{
                excelData !== null && (
                    <table className='table-responsive'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>F-Name</th>
                                <th scope='col'>Address</th>
                                <th scope='col'>Tracking</th>                            
                                <th scope='col'>MOBILE</th>
                                <th scope='col'>CMO_NO</th>
                                <th scope='col'>DATE</th>
                                <th scope='col'>TARIFF</th>
                                <th scope='col'>MEMBERSHIP</th>
                            </tr>
                        </thead>
                        <tbody>
                                <Data excelData={excelData}/>
                        
                        </tbody>
                    </table>
                )
            }

        </div>
    </div>
  )
}

export default Xle;