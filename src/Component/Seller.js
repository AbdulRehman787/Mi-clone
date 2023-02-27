import React from 'react'
import './style.css'
const Seller = () => {
  return (
    <>
      <div className="seller-cont">
      <h2 className='head2'><span>--------</span> Best Sellers <span>--------</span></h2>
      <div className="main-seller-cont">
    <div className="s-g01 j"><img src="/img/s1.webp" alt="" /></div>
    <div className="s-g02 ">
    <div className="s-g-g1 ">
    <div className="g-1 j"><img src="/img/s3.avif" className='s' alt="" /></div>
    <div className="g-1 j"><img src="/img/s2.avif" className='s' alt="" /></div>
    </div>
    <div className="s-g-g2 j"><img src="/img/s4.webp" className='q' alt="" /></div>
    </div>
      </div>
      </div>
    </>
  )
}

export default Seller
