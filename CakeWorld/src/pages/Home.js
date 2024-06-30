import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../images/banner.jpeg";
import Banner2 from "../images/banner2.jpeg";
import Banner3 from "../images/banner3.jpeg";
import Banner4 from "../images/banner4.jpeg";
import "../styles/HomeStyles.css";
import Menu from "./Menu";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const banners = [
    { image: Banner1, text: "Cakes", description: "Fresh & Tasty", link: "/cakes" },
    { image: Banner2, text: "Biriyani", description: "Enjoy Delicious Food", link: "/special-offer" },
    { image: Banner3, text: "Fried Chicken", description: "Fresh & Tasty", link: "/delivery" },
    { image: Banner4, text: " Shawai", description: "Fresh & Tasty", link: "/delivery" },

  ];

  const renderBanners = () => {
    return banners.map((banner, index) => (
      <div key={index}>
        <div className="home" style={{ backgroundImage: `url(${banner.image})` }}>
          <div className="headerContainer">
            <h1>{banner.text}</h1>
            <p>{banner.description}</p>
            <Link to={banner.link}>
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <Header />
      <Slider {...settings}>{renderBanners()}</Slider>
      <Menu/>
      <Footer />
      </>
    
  );
};

export default Home;
