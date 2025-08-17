import { Col, Row, ListGroup, Image, Button } from "react-bootstrap";
import products from "../products";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductScreen() {
  const { id } = useParams();

  //   const [product, setProduct] = useState([]);

  //   useEffect(() => {
  //     async function fetchProduct() {
  //       const { data } = await axios.get(`/api/products/${id}`);
  //       setProduct(data);
  //     }
  //     fetchProduct();
  //   }, []);

  const product = products.find((p) => p._id === id);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price: </Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item style={{ alignSelf: "center" }}>
              <Button disabled={product.countInStock === 0}>Add to Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
