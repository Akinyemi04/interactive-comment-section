import React,{useEffect, useState} from 'react'
import FirstBody from './FirstBody'
import SecondBody from './SecondBody'
import AddComent from './AddComent'
import Response from './Response'
const Body = () => {
    const[val,setVal]=useState({})
    const[arr,setArr]=useState([])
    const[lake,setLake]=useState(false)
    const[face,setFace]=useState()

    useEffect(()=>{
        fetch('data.json')
        .then(res=>(res.json()))
        .then(data=>{setVal(data.currentUser);setArr(data.comments);})
        .catch(err=> console.log(err.message))},[])
    
  
  return (
    <div className='int'>
      {
        arr.length !==0 && 
        <>
          <FirstBody data={arr[0]} val={val}/>
          <SecondBody data={arr[1]}/>
         {  face &&
         (lake? <Response data={face} val={val}/>:'')
         }
          <AddComent cull={setLake} make={setFace}/>
        </>
        
      }
      
    </div>
  )
}

export default Body