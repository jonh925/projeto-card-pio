// CartIcon.js
import React from "react";

const CartIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
    >
      {/* SVG path for your cart icon */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 3h2l3.293 6.293A1 1 0 0 0 9 10h6a1 1 0 0 0 .707-1.707L19 3h2a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H7.414A2 2 0 0 0 6 9.414l-1.707 1.707A1 1 0 0 0 4 12v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
      />
    </svg>
  );
};

export default CartIcon;
