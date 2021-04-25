import React from 'react';
import { Card } from 'react-bootstrap';

const TrackCard2 = ({ trackActiveDot, title, date }) => {
  return (
    <div className="track_order_page">
      <div className="track_card " style={{ marginBottom: '4rem' }}>
        <div className="mr-2 track_text">{trackActiveDot ? date : '----------'}</div>
        <i
          className={
            `fas fa-circle mr-2 ` +
            `${trackActiveDot ? 'text-green' : 'text-gray'}`
          }
        ></i>
        <div className="status">{title}</div>
        &nbsp;&nbsp;
      </div>
    </div>
  );
};

export default TrackCard2;
