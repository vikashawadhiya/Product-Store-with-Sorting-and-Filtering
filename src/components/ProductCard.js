import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      width: "200px",
      textAlign: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "120px",
          objectFit: "cover",
          borderRadius: "6px"
        }}
      />
      <h4 style={{ margin: "10px 0" }}>{product.title}</h4>
      <p>₹ {product.price}</p>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "#007bff" }}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
