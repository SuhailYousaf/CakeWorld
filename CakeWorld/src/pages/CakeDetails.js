import React from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../data/cakes";
import "../styles/CakeDetails.css"; // Import CSS file for styling
import Layout from "../components/Layout/Layout";

const CakeDetails = () => {
  const { cakeId } = useParams();
  const cake = MenuList.find((cake) => cake.id === parseInt(cakeId));

  if (!cake) {
    return <div>Cake not found</div>;
  }

  const handleOrderButtonClick = () => {
    // Replace 'your-company-number' with your company's WhatsApp number
    const whatsappNumber = '9544486876';
    // Get the URL of the selected product image
    const imageUrl = "cake.image";
    // Construct the message with product details, price, and photo
    const message = `Hi, I would like to order the ${cake.name}. Here are the details: ${cake.description}. Price: ${cake.price}.`;
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)} ${imageUrl}`;
    // Open WhatsApp chat window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="cake-details-container">
        <div className="cake-content">
          <div className="cake-image-container">
            <img
              src={cake.image}
              alt={cake.name}
              className="normal-image"
            />
          </div>
        </div>
        <div className="cake-details">
          <h2>{cake.name}</h2>
          <p>{cake.description}</p>
          <p>Price: {cake.price}</p>
          <p>contact : 8129941414</p>
          <button className="whatsapp-order-button" onClick={handleOrderButtonClick}>Order Now via WhatsApp</button>

        </div>
      </div>
      <div className="small-image-container">
        <img src={cake.image} alt={cake.name} className="small-image" />
      </div>
    </Layout>
  );
};

export default CakeDetails;
