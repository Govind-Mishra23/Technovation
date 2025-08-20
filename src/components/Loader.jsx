import React, { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Add CSS animation to document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes textAnimation {
        0% {
          stroke-dashoffset: 200;
          fill: transparent;
        }
        70% {
          stroke-dashoffset: 0;
          fill: transparent;
        }
        100% {
          stroke-dashoffset: 0;
          fill: #f97316;
          stroke: #f97316;
        }
      }
      .loader-text-animation {
        fill: transparent;
        stroke: #f97316;
        stroke-width: 0.5;
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: textAnimation 4s ease-in-out forwards;
      }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 4000); // Animation duration + small delay

    return () => {
      clearTimeout(timer);
      // Clean up style when component unmounts
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <svg
          width="800"
          height="250"
          viewBox="0 0 600 150"
          className="w-full max-w-4xl mx-auto"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="36"
            fontWeight="bold"
            fontFamily="Inter, system-ui, sans-serif"
            className="loader-text-animation"
          >
            TECHNOVATION
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
