import { GetCalender } from '@/components/GetCalender';
import { Div, H3, Typography } from '@/wrappers/HTMLWrappers';
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
    <Div className="flex flex-row md:flex-row w-full justify-between rounded-2xl bg-white dark:bg-black">
      <Div className="flex flex-col justify-between m-1">
        <Typography className="font-extrabold text-xl md:text-2xl ml-3 flex flex-row items-center gap-1">
          <GalleryVerticalEnd />
          Assets
        </Typography>
        <H3 className="font-bold md:flex text-xs md:text-xl ml-3.5">This is your personal Gallery</H3>
      </Div>
      <Div className="flex flex-row space-x-1">
        <GetCalender isOpen={fromDate} titleName={'From'} dateRange={dateRange} setDateRange={setDateRange} />
      </Div>
    </Div>
  );
};
