
import { getHoroscope } from '@/utils/horoscopeData';
import { Badge } from '@/components/ui/badge';

interface CannabisRecommendationsProps {
  sign: string;
}

const CannabisRecommendations = ({ sign }: CannabisRecommendationsProps) => {
  const horoscope = getHoroscope(sign);
  
  return (
    <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display">Cosmic Cannabis Strains</h3>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Today's Recommendations</div>
      </div>
      
      <p className="text-sm text-muted-foreground">
        The stars suggest these strains may align with your cosmic energy today:
      </p>
      
      <div className="flex flex-wrap gap-2">
        {horoscope.cannabisStrains.map((strain) => (
          <Badge 
            key={strain} 
            variant="outline" 
            className="bg-primary/10 hover:bg-primary/20 transition-colors py-1 px-3"
          >
            {strain}
          </Badge>
        ))}
      </div>
      
      <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
        <p>These recommendations are based on astrological alignments and are for informational purposes only.</p>
      </div>
    </div>
  );
};

export default CannabisRecommendations;
