
import { zodiacSigns, getElementColor } from '@/utils/zodiacData';
import { cn } from '@/lib/utils';
import { Star, Sun, Moon } from 'lucide-react';

interface CosmicElementsProps {
  sign: string;
}

const CosmicElements = ({ sign }: CosmicElementsProps) => {
  const zodiacData = zodiacSigns.find((zodiac) => zodiac.name === sign);
  
  if (!zodiacData) {
    return null;
  }

  const elementColorClass = getElementColor(zodiacData.element);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
      <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg relative overflow-hidden">
        <div className="absolute -bottom-2 -right-2 opacity-10">
          {zodiacData.element === 'Fire' && <Sun className="h-12 w-12" />}
          {zodiacData.element === 'Water' && <div className="h-12 w-12 bg-blue-500/20 rounded-full blur-md" />}
          {zodiacData.element === 'Air' && <div className="h-12 w-12 bg-white/10 rounded-full blur-md" />}
          {zodiacData.element === 'Earth' && <div className="h-12 w-12 bg-green-500/20 rounded-full blur-md" />}
        </div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Element</div>
        <div className={cn("px-3 py-1 rounded-full text-sm border", elementColorClass)}>
          {zodiacData.element}
        </div>
      </div>
      
      <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg relative overflow-hidden">
        <div className="absolute -bottom-2 -right-2 opacity-10">
          {zodiacData.planet === 'Sun' && <Sun className="h-12 w-12" />}
          {zodiacData.planet === 'Moon' && <Moon className="h-12 w-12" />}
          {zodiacData.planet !== 'Sun' && zodiacData.planet !== 'Moon' && <Star className="h-12 w-12" />}
        </div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Ruling Planet</div>
        <div className="text-sm font-medium">{zodiacData.planet}</div>
      </div>
      
      <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg relative cosmic-element">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Symbol</div>
        <div className="text-2xl">{zodiacData.symbol}</div>
      </div>
    </div>
  );
};

export default CosmicElements;
