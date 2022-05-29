import rick from './images/icon-plus.svg'
import morty from './images/icon-minus.svg'
import React,{useState} from 'react'
import lip from './images/avatars/image-juliusomo.webp'
import edit from './images/icon-edit.svg'
const Response = (props) => {
    const ride = props.val
    const[score,setScore]=useState(0)
    const d = new Date();
    let hour = d.getMinutes();
    function Tip(){
        setScore(score +1)
    }
    function Cit(){
        setScore(score -1)
    }
  return (
    <div id="like">
        <div id="tim">
            <div className="edit">
                <button className='button' onClick={Tip} ><img src={rick} id='born' alt=''></img></button>
                <h1>{score}</h1>
                <button className='button' onClick={Cit} value={score}><img style={{height:'1vh'}} src={morty} id='born' alt='' ></img></button>
            </div>
            <aside className='side'>
                <img src={lip} alt='' id='bay'></img>
                <h2>{ride.username}</h2>
                <p id ='till'> {hour} Mins ago</p>
                <button style={{width:'7vh'}} className='button src'><img src={edit} alt='' ></img><span>  Edit</span></button>
            </aside>
            <blockquote id='con'>{props.data}</blockquote>
        </div>
    </div>
  )
}

export default Response