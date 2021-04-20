import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { view_cart,remove_card_item } from "../ApiService";
import { useHistory } from "react-router-dom";

const CartSide = () => {
  const history = useHistory();
  
  const category_page=(product_category)=>{
 
    
    history.push(`/Products?category=${product_category}`);
  }

  const productCategory = [
    {
      name: "Food",
    },
    {
      name: "Treats",
    },
    {
      name: "Toys",
    },
    {
      name: "Leashes, Collars & Harness",
    },
    {
      name: "Clothing & Accessories",
    },
    {
      name: "Bowls & Feeders",
    },
    {
      name: "Beds",
    },
    {
      name: "Grooming & Hygiene",
    },
    {
      name: "Health & Wellness",
    },
    {
      name: "Carriers & Travel",
    },
    {
      name: "Crates, Pens & Gates",
    },
    {
      name: "Trees, Condos & Scratchers",
    },
    {
      name: "Aquarium",
    },
  ];
  const [cartDate, setCartDate] = useState([]);

  useEffect(() => {
    view_cart().then(({ data }) => {
      setCartDate(data.cart);
    });
  }, []);
  const remove_item=(id)=>{
    let item=[];
    item.push(id);
    console.log("id=========",id)
    remove_card_item(item).then(()=>{
      view_cart().then(({ data }) => {
        setCartDate(data.cart);
      });
    }).catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div className="col-lg-4 product-menu">
      <Card>
        <Card.Header>
          <div className="d-flex">
          <h5>Cart</h5>
          </div>
        </Card.Header>
        <Card.Body>
          {useState.length ? (
            cartDate.map((products) => {
             return  products['products'].map((product,i)=>{
              const { productImage, productName, gstInclusivePrice } = product;
              return (
                <div className="d-flex w-100 justify-content-between align-items-center mb-3 mini_cart">
                  <div>
                    <img src={productImage[0]} />
                  </div>
                  <div className="w-80">
                    <span className="product_name ml-3">{productName}</span>
                    <div className="ml-3">
                      <span className="mr-2">{products.quantities[i]}</span>
                      <i className="fas fa-times mr-2"></i>
                      <i className="fas fa-rupee-sign  f-14"></i>
                      {gstInclusivePrice}
                    </div>
                  </div>
                  <div>
                    <i className="far fa-times-circle text-danger " onClick={() => remove_item(products['id'])}></i>
                  </div>
                </div>
              );
            })
            })
          ) : (
            <Card.Text>No Products in the Cart</Card.Text>
          )}
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Header>
          <h5>Product Category</h5>
        </Card.Header>
        <Card.Body>
          {productCategory.map((product_category) => (
            <label className="d-block mb-3" onClick={()=>category_page(product_category.name)}>- {product_category.name}</label>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartSide;
