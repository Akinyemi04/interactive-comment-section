import React, {useState} from 'react'
import up from './images/icon-plus.svg'
import down from './images/icon-minus.svg'
import corn  from './images/avatars/image-juliusomo.webp'
import torn from './images/icon-delete.svg'
import forn from './images/icon-edit.svg'
import Delete from './Delete'

const Comment = (props) => {
    const[hope,setHope]=useState(0)
    const[big,setBig]=useState(false)
    const[fig,setFig]=useState(props.code)
    
    const d = new Date();
    let hour = d.getMinutes();
    function Force(){
      setBig(true)
    }
    function Click(){
      setHope(hope +1)
    }
    function Dip(){
      setHope(hope -1)
    }
  
  return (
    <>
      <div style={{display:fig}} className='alien fall' id='lil'>
        <article className='cool'>
            <button className='tin' onClick={Click}><img src={up} alt=''  ></img></button>
            <p id='pin' style={{fontSize:'small', paddingLeft:'5px'}}>{hope}</p>
            <button className='tin' onClick={Dip}><img src={down} alt=''></img></button>
        </article>
        <aside id='bail'>
          <img src={corn} alt ='' id='bay'></img>
          <p id='din'> juliusomo</p>
          <h6>you</h6>
          <p className='min'>{hour} Minutes ago</p>
          <div className='div'>
            <button className='ton' onClick={Force}><img src={torn} alt =''></img><h5>Delete</h5></button>
            <button className='ton'><img src={forn} alt=''></img><h5 style={{color:'hsl(238, 40%, 52%)'}}>Edit</h5></button>
          </div>
          <blockquote id='pon'><em>{props.tip}</em> {props.data}</blockquote>
        </aside>
      </div>
      {big? <Delete data={setBig} big={setFig}/>:''}
      
    </>
    
  )
}

export default Comment