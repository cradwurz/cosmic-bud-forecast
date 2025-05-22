
import { getHoroscope } from '@/utils/horoscope';
import { format, isAfter, startOfDay, addDays } from 'date-fns';
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import { RefreshCw } from 'lucide-react';

interface HoroscopeDisplayProps {
  sign: string;
}

const HoroscopeDisplay = ({ sign }: HoroscopeDisplayProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [horoscope, setHoroscope] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [source, setSource] = useState<string>("horoscope.com");
  const { toast } = useToast();
  const formattedDate = format(date, 'MMMM d, yyyy');
  
  useEffect(() => {
    const fetchHoroscope = async () => {
      setLoading(true);
      try {
        const data = await getHoroscope(sign);
        setHoroscope(data);
        setLastUpdated(new Date());
        setSource("horoscope.com");
        
        // Store the last update time in localStorage with sign-specific key
        localStorage.setItem(`horoscope_${sign.toLowerCase()}_lastUpdated`, new Date().toISOString());
        
        // Also store the horoscope data to reduce unnecessary fetches
        localStorage.setItem(`horoscope_${sign.toLowerCase()}_data`, JSON.stringify(data));
      } catch (error) {
        console.error('Failed to load horoscope from horoscope.com:', error);
        toast({
          title: "Error loading horoscope",
          description: "We're using our backup cosmic data instead.",
          variant: "destructive",
        });
        setSource("backup data");
      } finally {
        setLoading(false);
      }
    };
    
    // Check if we need to fetch new data based on the last update date and sign
    const checkForUpdate = () => {
      const signKey = sign.toLowerCase();
      const lastUpdateStr = localStorage.getItem(`horoscope_${signKey}_lastUpdated`);
      const cachedDataStr = localStorage.getItem(`horoscope_${signKey}_data`);
      
      if (lastUpdateStr && cachedDataStr) {
        const lastUpdate = new Date(lastUpdateStr);
        const today = startOfDay(new Date());
        
        // Use cached data if it exists and is from today
        if (isAfter(lastUpdate, today) && cachedDataStr) {
          try {
            const cachedData = JSON.parse(cachedDataStr);
            setHoroscope(cachedData);
            setLastUpdated(lastUpdate);
            setLoading(false);
            return;
          } catch (e) {
            console.error("Error parsing cached horoscope data:", e);
            // Continue to fetch if parsing fails
          }
        }
      }
      
      // No valid cached data, fetch new data
      fetchHoroscope();
    };
    
    // Initial check when sign changes
    checkForUpdate();
    
    // Set up daily check at midnight
    const now = new Date();
    const tomorrow = addDays(startOfDay(now), 1); // Get tomorrow at midnight
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    
    // Schedule the first update for the next midnight
    const midnightTimer = setTimeout(() => {
      fetchHoroscope();
      
      // Then set up a daily interval
      const dailyInterval = setInterval(fetchHoroscope, 24 * 60 * 60 * 1000);
      
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);
    
    return () => clearTimeout(midnightTimer);
  }, [sign, toast]);
  
  // Function to manually refresh horoscope
  const handleRefresh = async () => {
    setLoading(true);
    try {
      // Clear cached data to force a fresh fetch
      localStorage.removeItem(`horoscope_${sign.toLowerCase()}_lastUpdated`);
      localStorage.removeItem(`horoscope_${sign.toLowerCase()}_data`);
      
      const data = await getHoroscope(sign);
      setHoroscope(data);
      setLastUpdated(new Date());
      setSource("horoscope.com");
      
      // Update localStorage
      localStorage.setItem(`horoscope_${sign.toLowerCase()}_lastUpdated`, new Date().toISOString());
      localStorage.setItem(`horoscope_${sign.toLowerCase()}_data`, JSON.stringify(data));
      
      toast({
        title: "Horoscope Updated",
        description: `Your ${sign} horoscope has been refreshed with today's cosmic insights.`,
      });
    } catch (error) {
      console.error('Failed to refresh horoscope:', error);
      toast({
        title: "Error refreshing horoscope",
        description: "We're using our backup cosmic data instead.",
        variant: "destructive",
      });
      setSource("backup data");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-display">Your {sign} Cosmic Forecast</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleRefresh}
            disabled={loading}
            title="Refresh horoscope"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start text-left font-normal">
                <span>{formattedDate}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="love">Love</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
          </TabsList>
          
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : (
            <>
              <TabsContent value="general" className="space-y-4">
                <div className="leading-relaxed">{horoscope?.general}</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Updated daily from {source}
                  <span className="ml-2 italic">
                    (Last refresh: {format(lastUpdated, 'MMM d, h:mm a')})
                  </span>
                </div>
              </TabsContent>
              
              <TabsContent value="love" className="space-y-4">
                <div className="leading-relaxed">{horoscope?.love}</div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Compatible with: </span>
                  <span className="font-medium">{horoscope?.compatibility}</span>
                </div>
              </TabsContent>
              
              <TabsContent value="career" className="space-y-4">
                <div className="leading-relaxed">{horoscope?.career}</div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Lucky Number: </span>
                  <span className="font-medium">{horoscope?.luckyNumber}</span>
                </div>
              </TabsContent>
              
              <TabsContent value="wellness" className="space-y-4">
                <div className="leading-relaxed">{horoscope?.wellness}</div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default HoroscopeDisplay;
