import React from "react";
import "./style.css";
const Accessories = ({state}) => {

  return (
    <>
      <div className="acc-container">
        <h2 className="head2">
          {" "}
          <span>--------</span> HOT ACCESSORIES <span>--------</span>
        </h2>
        <div className="card-acc">
          <div className="accleft">
            <img src="/img/acc1.webp" alt="img" />
          </div>
          <div className="accright">
          <div className="cards">
          {state.map((curElem,index)=>{
            return(
                <div className="card">
                <img src={curElem.img} className="card__img" alt="" />
                <div className="card__info">
                <h6 className="card__title">{curElem.name}</h6>
                <p className="para">{curElem.price}</p>
                </div>
                </div>
            )
          })}
         
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessories;
