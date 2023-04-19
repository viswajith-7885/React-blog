import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import context from '../context/context'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function List() {

  const data=useContext(context)
  
    const nav = useNavigate()
  return (
    <div>
    <ListGroup as='ul'>
    {data.form.map((item,index)=>{
      return(
        <div key={index}>
        <ListGroup.Item as="li" active>
        <h1 onClick={()=>{nav(`/list/${item.id}`)}} >{item.heading}</h1>
        </ListGroup.Item>
        
        </div>
      )
    })}
    </ListGroup>
    <Button variant="primary" onClick={()=>{nav('/form')}}>Add new Blog</Button>
  
    </div>
    
  )
}

export default List