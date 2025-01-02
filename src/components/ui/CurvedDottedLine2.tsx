import React from 'react';

const CurvedDottedLine2 = ({ className = '' }) => {
  return (
    <svg 
      width="75" 
      height="412" 
      viewBox="0 0 75 412" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M52.7289 0.502157C-19.3206 119.366 171.813 123.63 0.689479 411.553" 
        stroke="#525252" 
        strokeWidth="0.6" 
        strokeDasharray="7 7"
      />
    </svg>
  );
};

export default CurvedDottedLine2;
