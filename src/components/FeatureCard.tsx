
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

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
        "rounded-xl p-6 transition-all duration-300 img-reveal hover:shadow-lg",
        orangeBackground ? "bg-storehub-orange text-white" : "bg-white",
        className
      )}
    >
      {icon && <div className="mb-4">{icon}</div>}
      
      {imageSrc && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-auto object-cover transition-scale"
            loading="lazy"
          />
        </div>
      )}
      
      <h3 className={cn(
        "text-xl font-semibold mb-2",
        orangeBackground ? "text-white" : "text-storehub-dark-gray"
      )}>
        {title}
      </h3>
      
      <p className={cn(
        "text-sm",
        orangeBackground ? "text-white/90" : "text-gray-600"
      )}>
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
