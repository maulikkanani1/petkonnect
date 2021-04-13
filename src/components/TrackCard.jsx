import React from "react";
import { Card } from "react-bootstrap";

const TrackCard = ({ icon, title, description, date, time, isActive = false, trackActiveDot = true }) => {
  return (
    <div className="track_card">
      <img className="track_card_icon mr-5" src={icon} />
      <i
        className={
          `${isActive ? "fas" : "far"} ` + "fa-circle text-primary mr-5 " + `${trackActiveDot ? "track_dot" : ""}`
        }
      ></i>
      <Card className="w-100">
        <Card.Body className="d-flex pb-2 justify-content-between">
          <div>
            <h5>{title}</h5>
            <label>{description}</label>
          </div>
          <div className="text-right">
            <h6 className="text-gray">{date}</h6>
            <h6 className="text-gray">{time}</h6>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TrackCard;
