import React from "react";
import "./style.css";

const ShimmerPulseModal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box shimmer-pulse"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>

        <div className="modal-content">
          {children}
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ShimmerPulseModal;