import { useEffect, useState } from 'react';

export const useAnimatedCounter = (end: number, duration = 2000, start = 0, isVisible = true) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start, isVisible]);

  return count;
};
