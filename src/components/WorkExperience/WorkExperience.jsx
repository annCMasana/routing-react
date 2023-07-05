import React from 'react'
import "./WorkExperience.css"

const WorkExperience = (props) => {
  return (
    <div style={{fontSize:'1.5em', padding:'1em'}}>
      <h1 style={{marginBottom:20}}>{props.year_descript}</h1>
      <p>Company: {props.company}</p>
      <p>Department: {props.dept}</p>
      <p>Job Description: {props.job}</p>
    </div>

  )
}

export default WorkExperience