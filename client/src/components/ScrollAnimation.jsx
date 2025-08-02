import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, delay = 0, direction = 'up', styleType = 'slide' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const getTransform = () => {
    let base = '';
    switch (direction) {
      case 'up':
        base = 'translateY(50px)';
        break;
      case 'down':
        base = 'translateY(-50px)';
        break;
      case 'left':
        base = 'translateX(50px)';
        break;
      case 'right':
        base = 'translateX(-50px)';
        break;
      default:
        base = 'translateY(50px)';
    }
    if (styleType === 'scale') {
      return `${base} scale(0.85)`;
    } else if (styleType === 'rotate') {
      return `${base} rotate(-8deg)`;
    }
    return base;
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 