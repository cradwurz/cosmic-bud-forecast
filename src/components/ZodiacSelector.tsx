
import { useState } from 'react';
import { zodiacSigns } from '@/utils/zodiacData';
import { cn } from '@/lib/utils';

interface ZodiacSelectorProps {
  selectedSign: string;
  onSelectSign: (sign: string) => void;
}

const ZodiacSelector = ({ selectedSign, onSelectSign }: ZodiacSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelectSign = (sign: string) => {
    onSelectSign(sign);
    setIsOpen(false);
  };

  const currentSign = zodiacSigns.find((sign) => sign.name === selectedSign);

  return (
    <div className="relative w-full md:w-64">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full p-3 bg-card border border-border rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{currentSign?.symbol}</span>
          <div>
            <p className="text-lg font-display">{selectedSign}</p>
            <p className="text-xs text-muted-foreground">{currentSign?.dates}</p>
          </div>
        </div>
        <svg 
          className={cn("w-4 h-4 transition-transform", isOpen ? "rotate-180" : "")} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-card shadow-lg border border-border rounded-lg max-h-80 overflow-y-auto">
          <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => handleSelectSign(sign.name)}
                className={cn(
                  "flex items-center gap-3 p-2 w-full text-left hover:bg-muted rounded-md transition-colors",
                  sign.name === selectedSign && "bg-muted"
                )}
              >
                <span className="text-2xl">{sign.symbol}</span>
                <div>
                  <p className="text-sm font-medium">{sign.name}</p>
                  <p className="text-xs text-muted-foreground">{sign.dates}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ZodiacSelector;
