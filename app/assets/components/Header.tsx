import { GetCalender } from '@/components/GetCalender';
import { Div, Typography } from '@/wrappers/HTMLWrappers';
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

  return (
    <Div className="flex flex-col md:flex-row w-full justify-between rounded-2xl">
      <Div className="flex flex-col justify-between  m-1">
        <Typography className="font-extrabold md:text-4xl text-2xl ml-3 flex flex-row items-center gap-1">
          <GalleryVerticalEnd />
          Assets
        </Typography>
        <Typography className="font-bold md:text-xl hidden md:flex ml-3.5">This is your personal Gallery</Typography>
      </Div>
      <Div className="flex flex-row space-x-1">
        <GetCalender isOpen={fromDate} titleName={'From'} dateRange={dateRange} setDateRange={setDateRange} />
      </Div>
    </Div>
  );
};
