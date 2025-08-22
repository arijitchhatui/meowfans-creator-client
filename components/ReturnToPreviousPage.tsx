import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ReturnToPreviousPage: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <Button variant={'outline'} size={'lg'} onClick={() => router.back()} className={className}>
      <ArrowBigLeftDash />
    </Button>
  );
};
