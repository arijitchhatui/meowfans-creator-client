'use client';

import { Button } from './ui/button';

interface Props {
  message?: string;
}

export const Footer: React.FC<Props> = ({ message }) => {
  return (
    <>
      <div className="shadow-md p-4 flex justify-center gap-3 rounded-2xl">
        <Button className="px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">Load more</Button>
      </div>
      {message && <p className="text-center text-sm text-gray-500 mt-2 mb-4">{message}</p>}
    </>
  );
};
