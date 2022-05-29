import React from 'react'

const Delete = (props) => {
  function Tin(){
      props.data(false)
  }
  function Line(){
    props.big('none')
    props.data(false)
  }
  return (
    <div className='new'>
        <div className='ranger'>
          <h3>Delete Comment</h3>
          <blockquote className='blockquot'>Are you sure you want to remove this comment?This will remove this content and cant be undone</blockquote>
          <aside id='ass'>
            <button id='tin' onClick={Tin} style={{backgroundColor:'Grey',border:'1px solid Grey'}}> No,Cancel</button>
            <button onClick={Line} id='tin'style={{backgroundColor:'Red',border:'1px solid Red'}}>Yes,Delete</button>
          </aside>
        </div>
    </div>
  )
}

export default Delete