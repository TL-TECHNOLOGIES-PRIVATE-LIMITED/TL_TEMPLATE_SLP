import React from 'react';
import ReactDOM from 'react-dom';

const Tool = ({ children, isVisible, position }) => {
  if (!isVisible) return null;

  const tooltipStyles = {
    position: 'fixed',
    top: position.top,
    left: position.left,
    color: 'white',
    borderRadius: '0.375rem', // Using previous border radius
    fontSize: '0.875rem', // Using previous font size
    zIndex: 1000,
  };
  return ReactDOM.createPortal(
    <div style={tooltipStyles}>
      {children}
    </div>,
    document.body
  );
};

export default Tool;
