import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  className?: string;
  id?: string;
}

export default function LazySection({ 
  children, 
  fallback = <div className="h-32 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mx-4"></div>,
  rootMargin = '50px',
  className = '',
  id
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, hasLoaded]);

  return (
    <div ref={ref} className={className} id={id}>
      {isVisible ? children : fallback}
    </div>
  );
}