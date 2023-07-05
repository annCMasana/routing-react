import React from 'react'
import "./BasicInfo.css"

const BasicInfo = (props) => {
  return (
    <div>
      <h1 style={{fontFamily:"calibri",fontSize:50,color:"rgb(29, 26, 26)"}}>{props.fullName}</h1>
      <p style={{fontFamily:"arial",fontSize:27, color:"rgb(53, 44, 44)", marginTop:10}}>{props.position}</p>
    </div>
  )
}

export default BasicInfo