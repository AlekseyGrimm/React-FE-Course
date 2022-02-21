import React from 'react';
import Image from "../assets/119-845x321.jpg";
import './backgroundImage.css';

const BackgroundImage = () => (
  <div className="wraper-image">
    <img src={Image} alt="image" className="backgroundImage" />
  </div>
);


export default BackgroundImage;
