import React, { useEffect, useState } from "react";
import { Container, Card, Button, Tab, Nav } from "react-bootstrap";
import { useLocation,useHistory } from "react-router-dom";
import { add_to_cart, GetVendorProduct } from "../ApiService";
import Header from "./../components/Header.jsx";
import Footer from "../components/footer.jsx";
import CartSide from "../components/CartSide";
import ProductCard from "../components/ProductCard";
import MyJumbotron from "../components/MyJumbotron";

const ProductDetail = () => {
  const history = useHistory();
  const location = useLocation();
  const productData = location.state.data;
  const vendorId = location.state.id;
  const vendor = location.state.vendor;
  
  const { productImage,
    productBrand,
    petType,
    productDescription,
    sellingPrice,
    productSubcategory,
    gstInclusivePrice,
    productName,
    rating,
    id,
    gst,
    productCategory } = productData;

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (vendorId) {
      GetVendorProduct(vendorId).then(({ data }) => {
        setProducts(data.products);
      });
    }
  }, [vendorId]);

  const addtoCart = () => {
    add_to_cart({
      productID: id,
      vendorID: vendorId,
      quantity: quantity,
    }).then(() => {
      window.location.reload();
    });
  };
  return (
    <div className="product_details">
      <Header />

      
      <Container>
        <div className="row mt-5 mb-5">
          <div className="col-lg-8">
            <Card className="w-100  ">
              <Card.Body className="d-flex">
                <div className="w-50">
                  <img src={productImage[0]} className="product_img" />
                  {/* <h6>Offers Available</h6>
                  <ul className="list pl-3">
                    <li className="list_item">
                      Special 50% Offer with ABC Bank Credit Card
                    </li>
                    <li className="list_item">
                      Cashback 20% on the payment of Paytm
                    </li>
                    <li className="list_item">
                      Free Coupon Voucher for purchase of 2 items
                    </li>
                  </ul> */}
                </div>
                <div className="product_info p-3 w-50">
                  <h6 className="text-primary">
                    {petType} {productSubcategory}
                  </h6>
                  <h5 className="text-dark font-weight-bold mt-2">
                    {productName}
                  </h5>
                  {Array.from({ length: 5 }, (x, i) => {
                    return i + 1 > rating ? (
                      <i className="far fa-star text-secondary"></i>
                    ) : (
                      <i className="fas fa-star text-secondary"></i>
                    );
                  })}
                  <h4 className="text-primary amount mt-3">
                    <i className="fas fa-rupee-sign "></i>
                    {gstInclusivePrice}
                  </h4>

                  <div className="quantity_contanier mt-3">
                    <label className="mr-5 mb-0">Quantity</label>
                    <i
                      className="fas fa-minus-circle cursor-pointer text-secondary mr-4"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    ></i>
                    <span className="quantity_text mr-4">{quantity}</span>
                    <i
                      className="fas fa-plus-circle cursor-pointer text-secondary "
                      onClick={() => setQuantity(quantity + 1)}
                    ></i>
                  </div>
                  <div className="total_contanier mt-4">
                    <label className="mr-5 mb-0">Total</label>
                    <h4 className="text-primary mb-0 total">
                      <i className="fas fa-rupee-sign "></i>
                      {gstInclusivePrice * quantity}
                    </h4>
                  </div>
                  <div className="d-flex w-100 mt-5">
                    <Button
                      className="w-50 mr-3"
                      onClick={addtoCart}
                      variant="outline-dark"
                    >
                      Add to Cart
                    </Button>

                    <Button
                      className="w-50"
                      variant="secondary"
                      onClick={() => {
                        history.push('/checkout');
                      }}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="description"
            >
              <Card className="mt-3">
                <Card.Header className="bg-transparent border-0">
                  <Nav variant="tab">
                    <Nav.Item>
                      <Nav.Link eventKey="description">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="description">
                      <h5>Product Information</h5>
                      <label className="f-12 mb-0">Brand :</label>
                      <label className="f-12 font-weight-bold ml-2 mb-0">
                        {productBrand}
                      </label>
                      <br />
                      <label className="f-12">Category :</label>
                      <label className="f-12 font-weight-bold ml-2  mb-0">
                        {petType} {productCategory}
                      </label>
                      <br />
                      <label className="f-12">{productCategory} Type :</label>
                      <label className="f-12 font-weight-bold ml-2  mb-0">
                        {productSubcategory}
                      </label>
                      <br/>
                      <label className="f-12">GST Applied :</label>
                      <label className="f-12 font-weight-bold ml-2  mb-0">
                        {gst}%
                      </label>
                      <p>{productDescription}</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="reviews">
                      <h6>No Reviews yet</h6>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
            <h2 className="my-3">You may also like</h2>
            <div className="row mb-4 mt-3">
              {products.map((product) => (
                <ProductCard product={product} vendor={vendor} id={vendorId} />
              ))}
            </div>
          </div>
          <CartSide />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetail;
