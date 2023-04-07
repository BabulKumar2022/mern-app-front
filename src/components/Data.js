import React from 'react'



const Data = ({excelData}) => {
  return (
   
        excelData.map((individualExcelData) =>(
            <tr key={individualExcelData.Id}>
                <td >{individualExcelData.ID}</td>
                <td >{individualExcelData.NAME}</td>
                <td>{individualExcelData.FNAME}</td>
                <td>{individualExcelData.ADDRESS.slice(0, 30)}</td>
                <td>{individualExcelData.TRACKING_ID}</td>
                <td>{individualExcelData.MOBILE_NO}</td>
                <td>{individualExcelData.CMO_NO}</td>
                <td>{(individualExcelData.CONEECTION_DATE)}</td>
                <td>{individualExcelData.TARIFF.slice(0, 8)}</td>
                <td>{individualExcelData.MEMBERSHIP}</td>
            </tr>
        ))
   
  )
}

export default Data