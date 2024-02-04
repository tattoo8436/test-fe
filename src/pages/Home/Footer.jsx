import { Button, Col, Input, Row } from "antd";
import React from "react";
import images from "../../constants/images/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8} className="footer__about">
            <div className="footer__about__title">About The Store</div>
            <div className="footer__about__text">
              Got Question? Call us 24/7
            </div>
            <div className="footer__about__phone">+222-1800-2628</div>
            <div className="footer__about__text">
              268 St, South New York/NY 98944, United States
            </div>
            <div className="footer__about__text">
              Customersupport@example.com
            </div>
            <div className="footer__about__text">Info@example.com</div>
          </Col>

          <Col xs={24} md={6} lg={4} className="footer__information">
            <div className="footer__information__title">Information</div>
            <div className="footer__information__text clickable">Blog Us</div>
            <div className="footer__information__about clickable">About Us</div>
            <div className="footer__information__text clickable">
              Delivery Information
            </div>
            <div className="footer__information__text clickable">
              Privacy Policy
            </div>
            <div className="footer__information__text clickable">FeedBack</div>
          </Col>

          <Col xs={24} md={6} lg={4} className="footer__link">
            <div className="footer__link__title">Quick Links</div>
            <div className="footer__link__text clickable">Store Location</div>
            <div className="footer__link__text clickable">Orders Tracking</div>
            <div className="footer__link__text clickable">FAQs</div>
          </Col>

          <Col xs={24} md={12} lg={8} className="footer__subscribe">
            <div className="footer__subscribe__title">
              Sign up to Newsletter
            </div>
            <div className="footer__subscribe__text">
              Join 20.000+ subscribers and get a new discount coupon on every
              Saturday. Updates information on Sales and Offers.
            </div>
            <div className="footer__subscribe__input">
              <Input
                className="footer__subscribe__input__input"
                placeholder="Your email address..."
              />

              <Button type="primary" className="footer__subscribe__input__btn">
                SUBSCRIBE
              </Button>
            </div>
            <div className="footer__subscribe__text">
              Subscribe for Uminex and get 20% off your first purchase.
            </div>
          </Col>
        </Row>

        <div className="divider-horizontal"></div>

        <div className="footer__bottom">
          <div className="footer__bottom__copyright">
            Copyright © <span className="highlight">Uminex</span> all rights
            reserved. Powered by{" "}
            <span className="highlight">Blueskytechco</span>.
          </div>

          <div className="footer__bottom__payment-method">
            <span className="footer__bottom__payment-method__label">
              Payment Method:
            </span>

            <img
              src={images.Payment}
              alt="payment"
              className="footer__bottom__payment-method__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
