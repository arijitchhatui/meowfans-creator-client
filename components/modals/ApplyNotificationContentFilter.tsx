import { Div, Typography } from '@/wrappers/HTMLWrappers';

export const ApplyNotificationContentFilter = () => {
  const filters = ['All', 'Purchases', 'Earnings', 'Followers'];

  return (
    <Div className="flex flex-col space-y-3">
      {filters.map((filter, idx) => (
        <Div key={idx} className="border rounded-2xl text-center shadow">
          <Typography className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text">{filter}</Typography>
        </Div>
      ))}
    </Div>
  );
};
