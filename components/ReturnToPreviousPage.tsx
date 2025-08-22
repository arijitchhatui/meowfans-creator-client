import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

export const ReturnToPreviousPage = () => {
  const router = useRouter();
  return (
    <Button variant={'outline'} size={'lg'} onClick={() => router.back()}>
      <ArrowBigLeftDash />
    </Button>
  );
};
