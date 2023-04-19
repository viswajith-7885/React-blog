import React, { useContext, useRef } from 'react'
import context from '../context/context'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function Form() {
    const myref=useRef(null) 
    const data = useContext(context)
    const nav =useNavigate();

    const {form,setform}=data

    const handle =()=>{
      const heading =myref.current.head.value;
      const blog =myref.current.blog.value;
      const id=Math.floor(Math.random()*1000)
      setform([...form,{heading,blog,id}]);

      nav('/')

    }
  return (
 <form  ref={myref} >
 <label htmlFor="">Enter the title of blog</label>
<input type="text"  name='head'/ ><br />
<label htmlFor="">Enter the body of the blog</label>
<input type="text" name='blog'/> 
<Button type='submit' variant="success"  onClick={handle}>Finish</Button>

 </form>
  )
}

export default Form