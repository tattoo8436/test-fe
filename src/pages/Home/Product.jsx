import { Col, Row } from "antd";
import React from "react";
import images from "../../constants/images/images";

const productsFirst = ["product1", "product2", "product3"];

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <Row gutter={[5, 5]}>
          <Col xs={24} lg={8}>
            <Row gutter={[5, 5]}>
              <Col span={12} className="product__item">
                <img src={images.Product1} alt="product1" />
              </Col>

              <Col span={12} className="product__item">
                <img src={images.Product2} alt="product2" />
              </Col>

              <Col span={12} className="product__item">
                <img src={images.Product3} alt="product3" />
              </Col>

              <Col span={12} className="product__item">
                <img src={images.Product4} alt="product4" />
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={8}>
            <Row>
              <Col span={24} className="product__item">
                <img src={images.Product5} alt="product5" />
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={8}>
            <Row gutter={[5, 5]}>
              <Col span={12} className="product__item">
                <img src={images.Product6} alt="product6" />
              </Col>

              <Col span={12} className="product__item">
                <img src={images.Product7} alt="product7" />
              </Col>

              <Col span={12} className="product__item">
                <img src={images.Product8} alt="product8" />
              </Col>

              <Col span={12} className="product__item">
                <img src={images.Product9} alt="product9" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
