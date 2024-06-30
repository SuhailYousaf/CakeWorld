import React from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../data/foods"; // Assuming MenuList is defined similarly to FoodList
import "../styles/CakeDetails.css"; // Import CSS file for styling
import Layout from "../components/Layout/Layout";

const FoodDetails = () => {
  const { cakeId } = useParams();
  const cake = MenuList.find((cake) => cake.id === parseInt(cakeId));

  if (!cake) {
    return <div>Cake not found</div>;
  }

  const handleOrderButtonClick = () => {
    const whatsappNumber = '9544486876'; // Replace with your company's WhatsApp number
    const imageUrl = cake.image;
    const message = `Hi, I would like to order the ${cake.name}. Here are the details: ${cake.description}. Price: ${cake.price}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)} ${imageUrl}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="cake-details-container"> {/* Use the same class name as defined in CakeDetails.css */}
        <div className="cake-content"> {/* Use the same class name as defined in CakeDetails.css */}
          <div className="cake-image-container"> {/* Use the same class name as defined in CakeDetails.css */}
            <img
              src={cake.image}
              alt={cake.name}
              className="normal-image" 
            />
          </div>
        </div>
        <div className="cake-details"> {/* Use the same class name as defined in CakeDetails.css */}
          <h2>{cake.name}</h2>
          <p>{cake.description}</p>
          <p>Price: {cake.price}</p>
          <button className="whatsapp-order-button" onClick={handleOrderButtonClick}>Order Now via WhatsApp</button>
        </div>
      </div>
      <div className="small-image-container"> {/* Use the same class name as defined in CakeDetails.css */}
        <img src={cake.image} alt={cake.name} className="small-image" /> {/* Use the same class name as defined in CakeDetails.css */}
      </div>
    </Layout>
  );
};

export default FoodDetails;
