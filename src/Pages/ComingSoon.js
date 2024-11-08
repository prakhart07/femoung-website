import React from 'react';
// import img from '../img.png';
import img from '../assets/images/coming-femoungg.webp';
import '../assets/css/ComingSoon.css';

export default function ComingSoon() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={img} alt="Coming Soon" />
      </div>
    </div>
  );
}
