import { useState } from 'react'
import React from 'react'
import "./Education.css"


const Education = (props) => {
  return (
    <div style={{fontSize:'1.5em', padding:'1em'}}
           className="educDetails">
      <h1 style={{marginBottom:20}}>{props.educ}</h1>
      <p>Name of School: {props.schoolName}</p>
      <p>Level: {props.level}</p>
      <p>Course: {props.course}</p>
      <p>Year Attended: {props.yearAttnd}</p>
    </div>
  )
}

export default Education