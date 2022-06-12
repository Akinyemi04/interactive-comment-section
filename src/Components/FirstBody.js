import rick from './images/icon-plus.svg'
import morty from './images/icon-minus.svg'
import tin from './images/avatars/image-amyrobson.png'
import rig from './images/icon-reply.svg'
import React,{useState} from 'react'
import lip from './images/avatars/image-juliusomo.png'
import Comment from './Comment'
const FirstBody = (props) => {
  const ride=(props.data)
  const[score,setScore]=useState(ride.score)
  const[trip,setTrip]=useState()
  const[rode,setRide]=useState()
  const[reel,setReel]=useState()
  function Up(){
    
    setScore(score +1)
  }
  function Down(){
    setScore(score- 1)
  
  }
  function Tip(){
    setTrip('flex')
    setReel('none')
  }
  function Change(e){
    
    setRide(e.target.value)
  }
  function Submit(){
    setReel('block')
    setTrip('none')
  }
  
  
  return (
    
    <div id='like'>
        <header id='tim'>
          <div className='edit'>
            <button className='button' onClick={Up} value={score}><img style={{height:'2vh'}} src={rick} id='born' alt=''></img></button>
            <h1>{score}</h1>
            <button className='button' onClick={Down} value={score}><img src={morty} id='born' alt='' ></img></button>
          </div>
          <aside className='side'>
            <img src={tin} alt='' id='bay'></img>
            <h2>{ride.user.username}</h2>
            <p id ='till'> {ride.createdAt}</p>
            <button style={{width:'7vw'}} className='button src'><img src={rig} alt='' onClick={Tip}></img><span>reply</span></button>
          </aside>
          <blockquote id='con'>{ride.content}</blockquote>
        </header>
        <article style={{display:trip}} className='article'>
          <img src={lip} id='img1' alt=''></img>
          <textarea id='area' onChange={Change}></textarea>
          <button type='submit' id='bull' onClick={Submit}>Reply</button>
        </article>    
        {
          rode &&
          <>
            <Comment data={rode} code={reel}/> 
          </> 
        }
        
    </div>
  
  )
}

export default FirstBody 