
import { useState } from 'react';
import List from './componants/List';
import Form from './componants/form';
import context from './context/context';
import{Routes,Route} from 'react-router-dom'
import Display from './componants/Display';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const[form,setform]=useState([])
   
  const state={
    form:form,
    setform:setform
  }
   
  
  return (
  <context.Provider value={state}>
  <Routes>
  <Route path='/' element={<List/>}/>
  <Route path='/form' element={<Form/>}/>
  <Route path='/list/:id' element={<Display/>}/>

  </Routes>
  </context.Provider>
  );
}

export default App;
