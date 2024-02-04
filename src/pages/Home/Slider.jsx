import { Button, Carousel } from "antd";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import images from "../../constants/images/images";

const menuItems = [
  {
    label: "Computer & Desktop",
    children: 1,
  },
  {
    label: "Laptop & Ipad",
    children: 1,
  },
  {
    label: "Cameras & Photos",
    children: 1,
  },
  {
    label: "Smart Phones & Tablets",
    children: 1,
  },
  {
    label: "Home & Kitchen",
    children: null,
  },
  {
    label: "TV & Audios",
    children: 1,
  },
  {
    label: "Health & Beauty",
    children: null,
  },
  {
    label: "Watches & Eyewear",
    children: 1,
  },
  {
    label: "Top Deals",
    children: null,
  },
  {
    label: "Top Selling Products",
    children: null,
  },
  {
    label: "Top Featured Products",
    children: null,
  },
];

const Slider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="container-wrapper">
          <div className="slider__menu">
            {menuItems.map((i, index) => (
              <div key={index}>
                <div className="slider__menu__item" key={index}>
                  <div className="slider__menu__item__content">
                    <div className="slider__menu__item__content__text">
                      {i.label}
                    </div>

                    {i.children && (
                      <FiChevronRight className="slider__menu__item__content__icon" />
                    )}
                  </div>
                </div>

                <div className="divider-horizontal"></div>
              </div>
            ))}
          </div>

          <div className="slider__content">
            <Carousel className="slider__content__top">
              <div className="slider__content__top__item">
                <img
                  src={images.Slider1}
                  alt="slider1"
                  className="item__image"
                />

                <div className="text">
                  <img
                    src={images.LogoText}
                    alt="logo-text"
                    className="logo-text"
                  />

                  <Button type="default" className="text__btn">
                    SHOP NOW
                  </Button>
                </div>
              </div>

              <div className="slider__content__top__item">
                <img
                  src={images.Slider1}
                  alt="slider1"
                  className="item__image"
                />

                <div className="text">
                  <img
                    src={images.LogoText}
                    alt="logo-text"
                    className="logo-text"
                  />

                  <Button type="default" className="text__btn">
                    SHOP NOW
                  </Button>
                </div>
              </div>

              <div className="slider__content__top__item">
                <img
                  src={images.Slider1}
                  alt="slider1"
                  className="item__image"
                />

                <div className="text">
                  <img
                    src={images.LogoText}
                    alt="logo-text"
                    className="logo-text"
                  />

                  <Button type="default" className="text__btn">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </Carousel>

            <div className="slider__content__banner">
              <div className="slider__content__banner__item">
                <img
                  src={images.Banner1}
                  alt="banner1"
                  className="slider__content__banner__item"
                />
              </div>

              <div className="slider__content__banner__item">
                <img
                  src={images.Banner2}
                  alt="banner2"
                  className="slider__content__banner__item"
                />
              </div>

              <div className="slider__content__banner__item">
                <img
                  src={images.Banner3}
                  alt="banner3"
                  className="slider__content__banner__item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
