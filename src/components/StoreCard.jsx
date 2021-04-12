import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const StoreCard = ({ store }) => {
  const history = useHistory();

  return (
    <div className="col-lg-3 col-md-3 col-sm-12" key={store.id}>
      <Card className="w-100 store_card" key={store.id}>
        <div
          onClick={() => history.push(`/store/${store.storeName}`, { vendorId: store.id })}
          className="stretched-link"
        >
          <Card.Img variant="top" src={store.storeImage} />
        </div>
        <Card.Body>
          <h5>{store.storeName}</h5>
          <div className="mb-2">
            {Array.from({ length: 5 }, (x, i) => {
              return i + 1 > store.storeRating ? (
                <i class="far fa-star text-primary"></i>
              ) : (
                <i class="fas fa-star text-primary"></i>
              );
            })}
          </div>
          <small className="text-muted">Foods | Pet Products</small>
          <div>
            <span className="offer_text">50% Off</span>
            <small className="text-muted ml-2">on first 3 products</small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StoreCard;
