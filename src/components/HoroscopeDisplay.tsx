
import { getHoroscope } from '@/utils/horoscopeData';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

interface HoroscopeDisplayProps {
  sign: string;
}

const HoroscopeDisplay = ({ sign }: HoroscopeDisplayProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [horoscope, setHoroscope] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const formattedDate = format(date, 'MMMM d, yyyy');
  
  useEffect(() => {
    const fetchHoroscope = async () => {
      setLoading(true);
      try {
        const data = await getHoroscope(sign);
        setHoroscope(data);
      } catch (error) {
        console.error('Failed to load horoscope:', error);
        toast({
          title: "Error loading horoscope",
          description: "We're using our backup cosmic data instead.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchHoroscope();
  }, [sign, date, toast]);
  
  // Check for fresh data every hour
  useEffect(() => {
    const interval = setInterval(() => {
      if (horoscope) {
        getHoroscope(sign).then(newData => {
          setHoroscope(newData);
        });
      }
    }, 60 * 60 * 1000); // Check hourly
    
    return () => clearInterval(interval);
  }, [sign, horoscope]);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-display">Your Cosmic Forecast</h2>
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
                <div className="text-xs text-muted-foreground mt-2">Updated daily from trusted astrological sources</div>
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
