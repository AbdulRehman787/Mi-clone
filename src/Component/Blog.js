import React from 'react'

const Blog = ({data}) => {
    
  return (
    <>

    <h2 className="head2">
          {" "}
          <span>--------</span>Blog <span>--------</span>
        </h2>
    <div class="card-group t">
    {data.map((curelem,index)=>{
        return(

            <>
            <div class="card" key='index'>
            <img src={curelem.img}  class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{curelem.name}</h5>
              <p class="card-text">{curelem.description}</p>
             <button className='btn'>{curelem.btn}</button>
             </div>
             </div>
            
             </>
        )
    })}
    
  </div>
    </>
  )
}

export default Blog
