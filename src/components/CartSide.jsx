import { Button, Card } from "react-bootstrap";

const CartSide = () => {
  const productCategory = [
    {
      name: "Dogs",
    },
    {
      name: "Cats",
    },
    {
      name: "Birds",
    },
    {
      name: "Rabbit",
    },
    {
      name: "Small Pets",
    },
    {
      name: "Kittens",
    },
  ];

  return (
    <div className="col-lg-4 product-menu">
      <Card>
        <Card.Header>
          <h5>Cart</h5>
        </Card.Header>
        <Card.Body>
          <Card.Text>No Products in the Cart</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header>
          <h5>Product Category</h5>
        </Card.Header>
        <Card.Body>
          {productCategory.map((category) => (
            <label className="d-block mb-3">- {category.name}</label>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartSide;
