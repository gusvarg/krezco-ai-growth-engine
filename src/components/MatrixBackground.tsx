import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01AIגכ{}[]()@#$%^&*';
    const columns = Math.floor(window.innerWidth / 20);

    // Create matrix effect
    const createMatrixChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char animate-matrix';
      char.textContent = characters[Math.floor(Math.random() * characters.length)];
      char.style.left = `${Math.random() * 100}%`;
      char.style.animationDuration = `${Math.random() * 3 + 2}s`;
      char.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(char);

      // Remove after animation
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      }, 5000);
    };

    // Create characters periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        createMatrixChar();
      }
    }, 200);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;