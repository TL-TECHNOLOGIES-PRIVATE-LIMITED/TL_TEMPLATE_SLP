import React, { useState, useRef, useEffect } from 'react';
import Tool from './Tool'; // Import the Tooltip component

const Tooltip = ({ content }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top - 40, // Adjust as needed
      left: rect.left,
    });
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      ref={buttonRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-gray-200 border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-700 text-lg">
        !
      </div>
      <Tool isVisible={isTooltipVisible} position={tooltipPosition}>
        <div className="text-[10px] bg-stone-900  p-4 font-thin font-sans w-44">
          {content}
        </div>
      </Tool>
    </div>
  );
};

export default Tooltip;
