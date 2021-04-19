import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const StoreCard = ({ store }) => {
  const history = useHistory();

  return (
    <div className="col-lg-3 col-md-3 col-sm-12" key={store.id}>
      <Card
        className="w-100 store_card "
        onClick={() => history.push(`/store/${store.storeName}`, { vendorId: store.id })}
        key={store.id}
      >
        <Card.Img variant="top" src={store.storeImage} />

        <Card.Body>
          <h5>{store.storeName}</h5>
          <div className="mb-2">
            {Array.from({ length: 5 }, (x, i) => {
              return i + 1 > store.storeRating ? (
                <i className="far fa-star text-primary"></i>
              ) : (
                <i className="fas fa-star text-primary"></i>
              );
            })}
          </div>
          <small className="text-muted">{store.storeDescription}</small>
          <br />
          <small className="text-muted">Delivery Fee <i className="fas fa-rupee-sign text-muted ml-2"></i>{store.shippingCharges}</small>
          <div>
            <span className="offer_text">{store.offerText}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StoreCard;
