import React, { useState } from 'react'
import rick from './images/icon-plus.svg'
import morty from './images/icon-minus.svg'
import tin from './images/avatars/image-maxblagun.png'
import rig from './images/icon-reply.svg'
import lip from './images/avatars/image-juliusomo.png'
import corn from './images/avatars/image-ramsesmiron.png'
import Comment from './Comment'
const SecondBody = (props) => {
    const fill=(props.data)
    const[one,setOne]=useState(fill.score)
    const[trip,setTrip]=useState()
    const[eve,setEve]=useState()
    const[cut,setCut]=useState(false)
    const[reel,setReel]=useState()
    const[hope,setHope]=useState(fill.replies[0].score)
    const[kid,setKid]=useState()
    const[adam,setAdam]=useState()
    const[top,setTop]=useState(false)
    let con='@'+(fill.replies[1].replyingTo)
    function Cut(){
        setTrip('flex')
        setCut(false)
    }
    function Change(e){
        setEve(e.target.value)
    }
    function Convert(e){
        setAdam(e.target.value)
    }
    function Submit(){
        setReel('block')
        setTrip('none')
        setCut(true)
    }
    function Tip(){
        setKid('flex')
    }
    function Sub(){
        setReel('block')
        setTop(true)
        setKid('none')
    }
    function King(){
        setOne(one + 1)
    }
    function Queen(){
        setOne(one-1)
    }
    function Pain(){
        setHope(hope +1)
    }
    function Gain(){
        setHope(hope -1)
    }

  return (
    <>
        <div id='like'>
            <div id='tim'>
                <article className='edit'>
                    <button className='button' onClick={King} value={one}><img style={{height:'2vh'}} src={rick} id='long' alt=''></img></button>
                    <h1 id='sip' >{one}</h1>
                    <button className='button' onClick={Queen} value={one}><img style={{height:'1vh'}} src={morty} id='long' className='might' alt='' ></img></button>
                </article>
                <aside className='side'>
                    <img src={tin} alt='' id='bay'></img>
                    <h2>{fill.user.username}</h2>
                    <p id ='till'> {fill.createdAt}</p>
                    <button style={{width:'7vw'}} onClick={Cut} className='button src'><img src={rig} alt=''></img><span>reply</span></button>
                </aside>
                <blockquote id='con'>{fill.content}</blockquote>
            </div>
            <article style={{display:trip}} className='article'>
                    <img src={lip} id='img1' alt=''></img>
                    <textarea id='area' onChange={Change}></textarea>
                    <button type='submit' id='bull' onClick={Submit}>Reply</button>
            </article> 
            { eve &&
            (cut? <Comment data={eve} code={reel}/>:'')
            }
        </div>
        <>
            <div style={{display:'block'}} className='alien lil'>
                <article className='cool'>
                    <button className='tin' onClick={Pain}><img  style={{height:'2vh'}} id='long' src={rick} alt=''  ></img></button>
                    <p style={{fontSize:'smaller',padding:'0 4px',paddingTop:'2px'}} id='pin'>{hope}</p>
                    <button className='tin' onClick={Gain}><img id='long' src={morty} alt=''></img></button>
                 </article>
                 <aside id='bail'>
                    <img src={corn} alt ='' id='bay'></img>
                    <p id='din'>{fill.replies[0].user.username}</p>
                    <p className='min'>{fill.replies[0].createdAt}</p>
                    <blockquote id='pon'><em>@{fill.replies[0].replyingTo}</em> {fill.replies[0].content}</blockquote>
                    <button onClick={Tip}  className='button dep' ><img src={rig} alt='' ></img><span style={{paddingLeft:'9px'}}>reply</span></button>
                </aside> 
             </div>
             <article style={{display:kid,marginTop:'1vh'}} className='article rate' id='like'>
                <img src={lip} id='img1' alt=''></img>
                <textarea id='area' onChange={Convert}></textarea>
                <button type='submit'  className='fulz' onClick={Sub}>Reply</button>
            </article> 
            {adam &&
            (top? <Comment data={adam} code={reel} />:'')
            }
        </>
        <>
        <Comment data={fill.replies[1].content} code='block' tip={con}/>
        </>
    </>
  )
}

export default SecondBody