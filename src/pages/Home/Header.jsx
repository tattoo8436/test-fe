import { Badge, Col, Input, Popover, Row } from "antd";
import React from "react";
import {
  FiChevronDown,
  FiHeart,
  FiMenu,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import images from "../../constants/images/images";

const languages = ["English", "Vietnamese"];
const currencies = ["USD", "VND"];
const categories = ["All Categories", "Laptop", "Smartphone"];
const menuHome = [
  "Home 01",
  "Home 02",
  "Home 03",
  "Home 04",
  "Home 05",
  "Home 06",
];
const menuShop = [
  {
    label: "Layout",
    value: ["Grid", "Grid - Items Extended"],
  },
  {
    label: "Items Hover",
    value: ["Change Image", "Zoom Image"],
  },
  {
    label: "Other Page",
    value: ["Shopping Cart", "Checkout"],
  },
];

const menuProduct = [
  {
    label: "Layout",
    value: ["Grid", "Grid - Items Extended"],
  },
  {
    label: "Items Hover",
    value: ["Change Image", "Zoom Image"],
  },
  {
    label: "Other Page",
    value: ["Shopping Cart", "Checkout"],
  },
];

const menuBlog = [
  {
    label: "Layout",
    value: ["Grid", "Grid - Items Extended"],
  },
  {
    label: "Items Hover",
    value: ["Change Image", "Zoom Image"],
  },
  {
    label: "Other Page",
    value: ["Shopping Cart", "Checkout"],
  },
];

const menuPage = [
  {
    label: "Layout",
    value: ["Grid", "Grid - Items Extended"],
  },
  {
    label: "Items Hover",
    value: ["Change Image", "Zoom Image"],
  },
  {
    label: "Other Page",
    value: ["Shopping Cart", "Checkout"],
  },
];

const Header = () => {
  const popoverContent = (values) => {
    return (
      <div className="menu">
        {values.map((i, index) => (
          <div key={index} className="menu-item clickable">
            {i}
          </div>
        ))}
      </div>
    );
  };

  const searchFilter = () => {
    return (
      <div className="search-filter">
        {categories.map((i, index) => (
          <div key={index} className="clickable">
            {i}
          </div>
        ))}
      </div>
    );
  };

  const popoverParents = (values) => {
    return (
      <div className="menu-parents">
        <Row gutter={[24, 24]}>
          {values.map((i, index) => (
            <Col span={8} key={index} className="menu-parents__item">
              <div className="menu-parents__item__label">{i.label}</div>

              <div className="menu-parents__item__value">
                {i.value.map((j) => (
                  <div
                    key={j}
                    className="menu-parents__item__value__item clickable"
                  >
                    {j}
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__top__left">
            <span className="header__top__left__text">
              You are a student and students get 20% discount.&nbsp;
            </span>

            <a href="#" className="header__top__left__link clickable">
              Learn More
            </a>
          </div>

          <div className="header__top__right">
            <div className="header__top__right__item clickable">
              Store Locator
            </div>
            <div className="header__top__right__item clickable">
              Order Tracking
            </div>
            <div className="header__top__right__item clickable">FAQs</div>

            <div className="divider-vertical"></div>

            <Popover
              placement="bottomRight"
              content={popoverContent(languages)}
              trigger="hover"
              arrow={false}
            >
              <div className="header__top__right__item clickable">
                <span className="item__text">{languages[0]}</span>
                <FiChevronDown className="item__icon" />
              </div>
            </Popover>

            <Popover
              placement="bottomRight"
              content={popoverContent(currencies)}
              trigger="hover"
              arrow={false}
            >
              <div className="header__top__right__item clickable">
                <span className="item__text">{currencies[0]}</span>
                <FiChevronDown className="item__icon" />
              </div>
            </Popover>
          </div>
        </div>
      </div>

      <div className="divider-horizontal"></div>

      <div className="container">
        <div className="header__middle">
          <div className="header__middle__logo">
            <img
              src={images.Logo}
              alt="logo"
              className="header__middle__logo__image"
            />
          </div>

          <Input.Search
            className="header__middle__search"
            enterButton="Search"
            placeholder="Search in 200+ products..."
            prefix={
              <Popover
                placement="bottomLeft"
                content={searchFilter}
                trigger="click"
                arrow={false}
              >
                <div className="header__middle__search__text clickable">
                  <span className="item__text">{categories[0]}</span>

                  <FiChevronDown className="item__icon" />

                  <div className="divider-vertical"></div>
                </div>
              </Popover>
            }
          />

          <div className="header__middle__right">
            <div className="header__middle__right__account">
              <FiUser className="account__icon clickable" />

              <div className="account__text">
                <div className="account__text__label">Login</div>
                <div className="account__text__value">Account</div>
              </div>
            </div>

            <Badge
              count={2}
              className="header__middle__right__favorite"
              showZero
            >
              <FiHeart className="favorite__icon clickable" />
            </Badge>

            <div className="header__middle__right__cart">
              <Badge count={2} showZero>
                <FiShoppingCart className="cart__icon clickable" />
              </Badge>

              <div className="cart__text">
                <div className="cart__text__label">Your Cart</div>
                <div className="cart__text__value">$280.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-horizontal"></div>

      <div className="container">
        <div className="header__tool-bar">
          <div className="header__tool-bar__menu clickable">
            <FiMenu className="header__tool-bar__menu__icon" />

            <div className="header__tool-bar__menu__text">
              Browse All Categories
            </div>
          </div>

          <div className="divider-vertical"></div>

          <div className="header__tool-bar__right">
            <div className="list">
              <Popover
                placement="bottom"
                content={popoverContent(menuHome)}
                trigger="hover"
                arrow={false}
              >
                <div className="home clickable">
                  <span className="home__text">Home</span>
                  <FiChevronDown className="home__icon" />
                </div>
              </Popover>

              <Popover
                placement="bottom"
                content={popoverParents(menuShop)}
                trigger="hover"
                arrow={false}
              >
                <div className="shop clickable">
                  <span className="shop__text">Shop</span>
                  <FiChevronDown className="shop__icon" />
                </div>
              </Popover>

              <Popover
                placement="bottom"
                content={popoverParents(menuProduct)}
                trigger="hover"
                arrow={false}
              >
                <div className="product clickable">
                  <span className="product__text">Product</span>
                  <FiChevronDown className="product__icon" />
                </div>
              </Popover>

              <Popover
                placement="bottom"
                content={popoverParents(menuPage)}
                trigger="hover"
                arrow={false}
              >
                <div className="page clickable">
                  <span className="page__text">Page</span>
                  <FiChevronDown className="page__icon" />
                </div>
              </Popover>

              <Popover
                placement="bottom"
                content={popoverParents(menuBlog)}
                trigger="hover"
                arrow={false}
              >
                <div className="blog clickable">
                  <span className="blog__text">Blog</span>
                  <FiChevronDown className="blog__icon" />
                </div>
              </Popover>

              <div className="contact clickable">
                <span className="contact__text">Contact Us</span>
              </div>

              <div className="buy clickable">
                <span className="buy__text">Buy Uminex!</span>
              </div>
            </div>

            <div className="sale">
              <img
                src={images.IconSale}
                alt="icon-sale"
                className="sale__icon"
              />

              <div className="sale__text">Sale $20 Off Your First Order.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-horizontal"></div>
    </div>
  );
};

export default Header;
