import React, { useContext } from 'react'
import context from '../context/context'
import { useParams } from 'react-router-dom'

function Display() {
    const data =useContext(context)
    const {id}=useParams()

    const filteredData = data.form.filter((item) => item.id === parseInt(id));
  return (
    <div>
    {filteredData.map((item)=>(
        <div key={item.id}>
        <h1 >{item.heading}</h1>
        <p>{item.blog}</p>
        </div>
    ))}
    </div>
  )
}

export default Display