
import { zodiacSigns, getElementColor } from '@/utils/zodiacData';
import { cn } from '@/lib/utils';

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
      <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Element</div>
        <div className={cn("px-3 py-1 rounded-full text-sm border", elementColorClass)}>
          {zodiacData.element}
        </div>
      </div>
      
      <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Ruling Planet</div>
        <div className="text-sm font-medium">{zodiacData.planet}</div>
      </div>
      
      <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm border border-border rounded-lg">
        <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Symbol</div>
        <div className="text-2xl">{zodiacData.symbol}</div>
      </div>
    </div>
  );
};

export default CosmicElements;
