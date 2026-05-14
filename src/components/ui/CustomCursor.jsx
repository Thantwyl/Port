import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      document.body.classList.add('hide-default-cursor');
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[var(--text-primary)] pointer-events-none z-[999999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1,
          opacity: 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Trailing subtle ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-[var(--text-primary)] pointer-events-none z-[999998]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'var(--text-primary)' : 'transparent',
          opacity: isHovering ? 0.2 : 0.5
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
