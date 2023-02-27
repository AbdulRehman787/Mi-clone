import React from 'react'
import './style.css'


const Header = () => {
  return (
    <>
    
      <div className="container1-head">
      <div className="lefthead">
      <p>mi pakistan</p>
      <p>mi comunity</p>
      <p>Support</p>
      <p>track myorder</p>
      <p>wholesale quality</p>
      <p>claim process</p>
      </div>
      <div className="righthead">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-user"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
      </div>
      </div>


      <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="/img/logo.png" className='logo' alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">New Arrival</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Smart Phones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Power Bank & Charging</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gear & Devices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Camera & Visual</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Audio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Life Style</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Deals</a>
            </li>
          </ul>
      
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
