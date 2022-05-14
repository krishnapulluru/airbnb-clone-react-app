import React from "react";
import star from "../images/star.png";
function Card(props) {
  console.log(props);
  let badgeText;
  let colors ;
  if (props.items.openSpots === 0) {
    badgeText = "SOLD OUT"
    colors = "red";
  } else if (props.items.location.toLowerCase() === "online"){
    badgeText = "ONLINE"
    colors = "green";
  }
  
  return (
    <div class="card">
      <div className="card--img--wrapper">
        <img className="card--img" src={"images/" + props.items.coverImg} alt="katie zaferes" />
        { badgeText && <span className="card--tag" style={{backgroundColor:colors}}>{badgeText}</span>}
      </div>
      <div>
        <p className="rating--cont">
          <img src={star} alt="star" className="rating--icon" />
          <span className="rating--avg">{props.items.stats.rating}</span>
          <span className="rating--count"> ({props.items.stats.reviewCount}). {props.items.location}</span>
        </p>
        <p className="card--discription">{props.items.title}</p>
        <p className="card--price">
          <strong>From ${props.items.price} / </strong>Person
        </p>
      </div>
    </div>
  );
}

export default Card;
