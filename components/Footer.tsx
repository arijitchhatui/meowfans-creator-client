'use client';

import { Button } from './ui/button';

interface Props {
  footerMessage?: string;
  buttonTitles: string[];
}

export const Footer: React.FC<Props> = ({ footerMessage, buttonTitles }) => {
  return (
    <>
      {buttonTitles.map((title, idx) => (
        <div key={idx} className="shadow-md p-4 flex justify-center gap-3 rounded-2xl">
          <Button className="px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">{title}</Button>
        </div>
      ))}
      {footerMessage && <p className="text-center text-sm text-gray-500 mt-2 mb-4">{footerMessage}</p>}
    </>
  );
};
