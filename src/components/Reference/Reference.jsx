import React from 'react'
import "./Reference.css"

const Reference = (props) => {
  return (
    <div style={{fontSize:'1.5em', padding:'1em'}}>
      <h1 style={{marginBottom:20}}>{props.name}</h1>
      <p>{props.relation}</p>
      <p>{props.address}</p>
      <p>{props.email}</p>
    </div>
  )
}

export default Reference