import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded" style={{border: 'solid 1px', minHeight: '430px'}}>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </a>
        <Card.Text>
            <div className="my-3">
                {/* {product.rating} fr+om {product.numReviews} reviews */}
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
            </div>
        </Card.Text>
        <Card.Text as={"h3"}>
            ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
