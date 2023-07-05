import React from 'react'
import Education from '../components/Education/Education'
import WorkExperience from '../components/WorkExperience/WorkExperience'

const About = () => {
  return (
    <div>
        <h1 style={{fontFamily:"calibri",fontSize:50,color:"rgb(29, 26, 26)"}}>Educational Background</h1>
        <hr style={{marginBottom:40}}/>
        <Education
          educ = 'Primary'
          schoolName = 'Barugo I Central School'
          level = 'Grade 6'
          course = ''
          yearAttnd = '2012-2013'
        />
        <Education
          educ = 'Secondary'
          schoolName = 'Calingcaguing National High School'
          level = 'Grade 12'
          course = 'ICT-Technical Drafting and Computer Programming'
          yearAttnd = '2018-2019'
        />
        <Education
          educ = 'Tertiary'
          schoolName = 'Eastern Visayas State University - Carigara Campus'
          level = '3rd Year'
          course = 'Bachelor of Science in Information Technology'
          yearAttnd = '2023-2024'
        />

        <h1 style={{fontFamily:"calibri",fontSize:50,color:"rgb(29, 26, 26)"}}>Work Experience</h1>
        <hr style={{marginBottom:40}}/>
        <WorkExperience
            year_descript = "2018 - Work Immersion"
            company = "DPWH"  
            dept = "Planning and Design Department"
            job = "SketchUp and AutoCAD Operator"     
        />

        <WorkExperience
            year_descript = "2019 - DOLE(SPES-BARUGO"
            company = "Municipal Hall"  
            dept = "Engineering Department"
            job = "Made some layout in AutoCAD"     
        />

        <WorkExperience
            year_descript = "2022 - DOLE(SPES-BARUGO"
            company = "Municipal Hall"  
            dept = "Treasury Department"
            job = "Dealt with clients, actual office paper works and records"     
        />
        
    </div>
  )
}

export default About