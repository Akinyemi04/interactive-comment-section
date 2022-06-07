import flip from './images/avatars/image-juliusomo.png'
const AddComent = (props) => {
    function Sub(){
        props.cull(true)
    }
    function Convert(e){
        props.make(e.target.value)      
    }
  return (
    <div id='like'>
        <div  style={{height:'17vh'}}> 
            <article style={{display:'flex',marginTop:'1vh'}} className='article' id='like'>
                <img src={flip} id='img1' alt=''></img>
                <textarea placeholder='Add a Comment...' id='area' onChange={Convert}></textarea>
                <button type='submit' id='bull' onClick={Sub}>Send</button>
            </article>
        </div>
    </div>
  )
}

export default AddComent