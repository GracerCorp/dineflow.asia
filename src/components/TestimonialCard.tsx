
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  companyName?: string;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  companyName,
  imageSrc,
  className
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
        "bg-white rounded-xl p-6 shadow-md transition-all duration-300 img-reveal",
        className
      )}
    >
      <div className="flex flex-col h-full">
        {imageSrc && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={imageSrc} 
              alt={`${author} from ${companyName}`} 
              className="w-full h-auto object-cover transition-scale"
              loading="lazy"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <p className="text-gray-700 mb-4 text-sm md:text-base">"{quote}"</p>
        </div>
        
        <div>
          <p className="font-semibold text-storehub-dark-gray">{author}</p>
          {(position || companyName) && (
            <p className="text-gray-500 text-sm">
              {position}{position && companyName && ', '}{companyName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
