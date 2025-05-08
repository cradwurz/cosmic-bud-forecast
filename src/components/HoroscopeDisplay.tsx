
import { getHoroscope } from '@/utils/horoscopeData';
import { format } from 'date-fns';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface HoroscopeDisplayProps {
  sign: string;
}

const HoroscopeDisplay = ({ sign }: HoroscopeDisplayProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const horoscope = getHoroscope(sign);
  const formattedDate = format(date, 'MMMM d, yyyy');
  
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
          
          <TabsContent value="general" className="space-y-4">
            <div className="leading-relaxed">{horoscope.general}</div>
          </TabsContent>
          
          <TabsContent value="love" className="space-y-4">
            <div className="leading-relaxed">{horoscope.love}</div>
            <div className="mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Compatible with: </span>
              <span className="font-medium">{horoscope.compatibility}</span>
            </div>
          </TabsContent>
          
          <TabsContent value="career" className="space-y-4">
            <div className="leading-relaxed">{horoscope.career}</div>
            <div className="mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Lucky Number: </span>
              <span className="font-medium">{horoscope.luckyNumber}</span>
            </div>
          </TabsContent>
          
          <TabsContent value="wellness" className="space-y-4">
            <div className="leading-relaxed">{horoscope.wellness}</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HoroscopeDisplay;
