import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
        <img src={props.imgsrc} alt="my_img" className="card_img" />
        <div className="card_info">
          <span clasname="card_category">{props.desc}</span>
          <h1 className="card_title">{props.titles}</h1>
          <br />
          <a href="google.com" target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
    </div>
  );
}

export default Card;
