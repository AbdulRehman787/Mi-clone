import React from 'react'
const Info = ({info}) => {
  return (
    <>
    <div class="card-group n">
    {info.map((curelem,index)=>{
      return(
        <>
        <div class="card">
        <img class="card-img-top v" src={curelem.img} alt="Card image cap" />
      </div>    
        </>
      )
    })}
    
    </div>
  
    </>
  )
}

export default Info
