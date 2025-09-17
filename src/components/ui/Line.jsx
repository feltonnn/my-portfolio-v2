import React from 'react';

// This component will represent the gradient line
export default function Line({ height = '2px', width = '100%', margin = '0' }) {
  const gradientStyle = {
    width: width,
    height: height,
    margin: margin,
    backgroundImage:
      'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'top',
  };

  return <div style={gradientStyle}></div>;
}
