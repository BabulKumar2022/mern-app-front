import React from 'react'

const IndividualData = ({individualExcelData}) => {
  return (
    <div>
      <th scope="row">{individualExcelData.ID}</th>
      <td>{individualExcelData.NAME}</td>
      <td>{individualExcelData.FNAME}</td>
      <td>{individualExcelData.ADDRESS}</td>
      </div>
  )
}

export default IndividualData;