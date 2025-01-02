import React from 'react';

const CurvedDottedLine = ({ className = '' }) => {
  return (
    <svg 
      width="73" 
      height="614" 
      viewBox="0 0 73 614" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M9.03414 0.253655C-39.456 230.517 149.088 198.875 34.9726 613.773" 
        stroke="#525252" 
        strokeWidth="0.6" 
        strokeDasharray="7 7"
      />
    </svg>
  );
};

export default CurvedDottedLine;
