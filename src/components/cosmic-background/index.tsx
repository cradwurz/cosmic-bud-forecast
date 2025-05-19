
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const CosmicBackground: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        backgroundImage: 'url("/lovable-uploads/b54d79a4-436a-4259-8ae8-0c03e76371c8.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    />
  );
};

export default CosmicBackground;
