import React from 'react'
import Reference from '../components/Reference/Reference'

const Contacts = () => {
  return (
    <div>
        <h1 style={{fontFamily:"calibri",fontSize:50,color:"rgb(29, 26, 26)"}}>Reference</h1>
        <hr style={{marginBottom:40}}/>
        <Reference
          name = "Mrs. Lzel Cadiente"
          relation = "Senior High Instructor"
          address = "Brgy. Calingcaguing Barugo, Leyte"
          email = "******@gmail.com"
        />

        <Reference
          name = "Ms. Kristine Rosales"
          relation = "Former Classmate"
          address = "Brgy. Tutug-an Barugo, Leyte"
          email = "******@gmail.com"
        />
    </div>
  )
}

export default Contacts