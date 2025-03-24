
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  className?: string;
  orangeBackground?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  imageSrc,
  className,
  orangeBackground = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "rounded-xl p-6 transition-all duration-500 img-reveal hover:shadow-xl transform hover:-translate-y-1",
        orangeBackground ? "bg-gserve-brown text-white" : "bg-white border border-gray-100",
        className
      )}
    >
      {icon && (
        <div className="mb-4 bg-gserve-purple/10 p-3 rounded-lg inline-block">
          {icon}
        </div>
      )}
      
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <h3 className={cn(
        "text-xl font-semibold mb-3",
        orangeBackground ? "text-white" : "text-gserve-dark-gray"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-sm leading-relaxed",
        orangeBackground ? "text-white/90" : "text-gray-600"
      )}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
