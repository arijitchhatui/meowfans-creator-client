import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-sm flex flex-col items-center justify-center gap-4 break-normal px-4">
        <p className="text-center tracking-tight text-lg">Page Not Found</p>

        <Button className="max-w-48 w-full" asChild>
          <Link href="/home">Return to home</Link>
        </Button>
      </div>
    </div>
  );
}
