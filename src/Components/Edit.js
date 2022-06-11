import rick from './images/icon-plus.svg'
import morty from './images/icon-minus.svg'
import corn  from './images/avatars/image-juliusomo.png'
const Edit = (props) => {
    const hope= props.pin
    function Kit(e){

    }
  return (
    <div>
        <div style={{display:'block'}} className='alien'>
                <article className='cool'>
                    <button className='tin' onClick='{Pain}'><img src={rick} alt=''  ></img></button>
                    <p style={{fontSize:'smaller',padding:'0 4px',paddingTop:'2px'}} id='pin'>{hope}</p>
                    <button className='tin' onClick='{Gain}'><img src={morty} alt=''></img></button>
                 </article>
                 <aside id='bail'>
                    <img src={corn} alt ='' id='bay'></img>
                    <p id='din'>juliusomo</p>
                    <p className='min'>2 hours ago</p>
                    <textarea id='pon' onChange={Kit}></textarea>
                    <button style={{width:'2vw',marginLeft:'23vw'}} onClick='{Tip}' className='button src' ><span style={{paddingLeft:'9px'}}>Update</span></button>
                </aside> 
             </div>
    </div>
  )
}

export default Edit