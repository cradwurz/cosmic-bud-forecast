
import { useState } from 'react';
import { getCombinedStrainRecommendations } from '@/utils/horoscope';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodiacSigns } from '@/utils/zodiacData';

interface CannabisRecommendationsProps {
  sign: string;
}

const CannabisRecommendations = ({ sign }: CannabisRecommendationsProps) => {
  const [moonSign, setMoonSign] = useState(sign);
  const [risingSign, setRisingSign] = useState(sign);
  
  const strainRecommendations = getCombinedStrainRecommendations(sign, moonSign, risingSign);
  
  return (
    <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display">Cosmic Cannabis Strains</h3>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Today's Recommendations</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">Moon Sign</label>
          <Select value={moonSign} onValueChange={setMoonSign}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your moon sign" />
            </SelectTrigger>
            <SelectContent>
              {zodiacSigns.map((zodiacSign) => (
                <SelectItem key={`moon-${zodiacSign.name}`} value={zodiacSign.name}>
                  <div className="flex items-center gap-2">
                    <span>{zodiacSign.symbol}</span>
                    <span>{zodiacSign.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Rising Sign</label>
          <Select value={risingSign} onValueChange={setRisingSign}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your rising sign" />
            </SelectTrigger>
            <SelectContent>
              {zodiacSigns.map((zodiacSign) => (
                <SelectItem key={`rising-${zodiacSign.name}`} value={zodiacSign.name}>
                  <div className="flex items-center gap-2">
                    <span>{zodiacSign.symbol}</span>
                    <span>{zodiacSign.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground mb-3">
          Based on your Sun ({sign}), Moon ({moonSign}), and Rising ({risingSign}) signs, the stars suggest these strains may align with your cosmic energy today:
        </p>
        
        <div className="flex flex-wrap gap-2">
          {strainRecommendations.map((strain) => (
            <Badge 
              key={strain} 
              variant="outline" 
              className="bg-primary/10 hover:bg-primary/20 transition-colors py-1 px-3"
            >
              {strain}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
        <p>These recommendations are based on the alignment of your sun, moon, and rising signs. For informational purposes only.</p>
      </div>
    </div>
  );
};

export default CannabisRecommendations;

