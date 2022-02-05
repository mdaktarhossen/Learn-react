import React from 'react';

const Resturent = (props) => {
  return <div>
    <div className="cards">
      <div className="card-1">
        <div className="title">
          <h1>{props.dataTitle}</h1>
        </div>
        <div className="card-des">
          <p >{props.dataDes}</p>
        </div>
        <div className="card-img">
        <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  </div>;
};

export default Resturent;
