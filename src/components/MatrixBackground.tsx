import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01AIגכ{}[]()@#$%^&*';
    let intervalId: NodeJS.Timeout;
    const activeChars: HTMLDivElement[] = [];

    // Create matrix effect with better cleanup
    const createMatrixChar = () => {
      if (activeChars.length > 30) {
        // Limit number of active characters to prevent memory issues
        const oldChar = activeChars.shift();
        if (oldChar && oldChar.parentNode) {
          oldChar.parentNode.removeChild(oldChar);
        }
      }

      const char = document.createElement('div');
      char.className = 'fixed matrix-char animate-matrix pointer-events-none z-0';
      char.textContent = characters[Math.floor(Math.random() * characters.length)];
      char.style.left = `${Math.random() * 100}%`;
      char.style.top = '0px';
      char.style.color = '#e1f5ff';
      char.style.fontSize = '14px';
      char.style.opacity = '0.3';
      char.style.animationDuration = `${Math.random() * 3 + 2}s`;
      char.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(char);
      activeChars.push(char);

      // Remove after animation with better cleanup
      setTimeout(() => {
        if (char.parentNode === container) {
          container.removeChild(char);
          const index = activeChars.indexOf(char);
          if (index > -1) {
            activeChars.splice(index, 1);
          }
        }
      }, 5000);
    };

    // Create characters with reduced frequency
    intervalId = setInterval(() => {
      if (Math.random() > 0.8 && document.visibilityState === 'visible') {
        createMatrixChar();
      }
    }, 300);

    // Cleanup on visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        activeChars.forEach(char => {
          if (char.parentNode === container) {
            container.removeChild(char);
          }
        });
        activeChars.length = 0;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (container) {
        // Clean up all remaining characters
        activeChars.forEach(char => {
          if (char.parentNode === container) {
            container.removeChild(char);
          }
        });
        activeChars.length = 0;
      }
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg" />;
};

export default MatrixBackground;