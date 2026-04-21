/**
 * WHO: 提供滚动渐显上移动画包装组件
 * FROM: 依赖Intersection Observer API
 * TO: 被App.jsx中各区块使用
 * HERE: components/ScrollReveal - 滚动动画容器
 */

import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
  once = true
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial styles
    const getInitialTransform = () => {
      switch(direction) {
        case 'up': return `translateY(${distance}px)`;
        case 'down': return `translateY(-${distance}px)`;
        case 'left': return `translateX(${distance}px)`;
        case 'right': return `translateX(-${distance}px)`;
        default: return `translateY(${distance}px)`;
      }
    };

    element.style.opacity = '0';
    element.style.transform = getInitialTransform();
    element.style.transition = `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
    if (delay > 0) {
      element.style.transitionDelay = `${delay}s`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && observer) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [delay, direction, distance, duration, once]);

  useEffect(() => {
    if (!ref.current) return;

    if (isVisible) {
      ref.current.style.opacity = '1';
      ref.current.style.transform = 'translateY(0) translateX(0)';
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Global scroll reveal hook for automatic triggering
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false && observer) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

export default ScrollReveal;