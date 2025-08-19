import { GetCalender } from '@/components/GetCalender';
import { GalleryVerticalEnd } from 'lucide-react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const emptyDateRange: DateRange = {
  from: undefined,
  to: undefined
};

export const AssetsHeader = () => {
  const [fromDate] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(emptyDateRange);

  console.log('from', dateRange?.from);
  console.log('to', dateRange?.to);
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 w-full justify-between rounded-2xl">
      <div className="flex flex-col justify-between  m-1">
        <p className="font-extrabold md:text-4xl text-2xl ml-3 flex flex-row items-center gap-1">
          <GalleryVerticalEnd />
          Assets
        </p>
        <p className="font-bold md:text-xl hidden md:flex ml-3.5">This is your personal Gallery</p>
      </div>
      <div className="flex flex-row space-x-1">
        <GetCalender isOpen={fromDate} titleName={'From'} dateRange={dateRange} setDateRange={setDateRange} />
      </div>
    </div>
  );
};
