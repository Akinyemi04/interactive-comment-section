import rick from './images/icon-plus.svg'
import morty from './images/icon-minus.svg'
import React,{useState} from 'react'
import lip from './images/avatars/image-juliusomo.png'
import edit from './images/icon-edit.svg'
import flip from './images/icon-delete.svg'
import Delete from './Delete'
const Response = (props) => {
    const ride = props.val
    const[score,setScore]=useState(0)
    const [big,setBig]=useState(false)
    const [fig,setFig]=useState()
    const d = new Date();
    let hour = d.getMinutes();
    function Tip(){
        setScore(score +1)
    }
    function Cit(){
        setScore(score -1)
    }
    function king(){
        setBig(true)
    }
  return (
      <>
        <div style={{display:fig}} id="like">
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
                    <div className='coner'>
                        <button onClick={king} className='ton'><img src={flip}></img><h5>Delete</h5></button> 
                        <button  className='button pop'><img src={edit} alt='' ></img><h5 style={{color:'rgb(84, 87, 182)'}}>  Edit</h5></button>   
                    </div>
                </aside>
                <blockquote id='con'>{props.data}</blockquote>
            </div>
        </div>
        {big? <Delete data={setBig} big={setFig}/>:''}
    </>
  )
}

export default Response