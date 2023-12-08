import React from "react";
import "./descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce, short for electronic commerce, refers to the buying and
          selling of goods and services over the internet. It involves online
          transactions between businesses and consumers, businesses and other
          businesses, or consumers and consumers. E-commerce has transformed the
          way people shop and conduct business, providing a platform for online
          retail stores, digital payments, and various electronic transactions.
          This model eliminates the need for physical presence, allowing people
          to engage in commercial activities from virtually anywhere with an
          internet connection.
        </p>
        <p>
          E-commerce encompasses a wide range of activities, from online
          shopping and digital payments to online auctions and electronic
          banking.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
