
import { zodiacSigns } from '@/utils/zodiacData';

interface CosmicBackgroundProps {
  sign: string;
}

const CosmicBackground = ({ sign }: CosmicBackgroundProps) => {
  const zodiacData = zodiacSigns.find((zodiac) => zodiac.name === sign);
  const constellationClass = zodiacData ? `constellation-${zodiacData.name.toLowerCase()}` : '';

  return (
    <div className="cosmic-background-container">
      <div className={`cosmic-stars ${constellationClass}`}></div>
      <div className="cosmic-overlay"></div>
    </div>
  );
};

export default CosmicBackground;
