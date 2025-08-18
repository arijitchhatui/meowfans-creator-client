import { AppHeader } from '@/components/AppHeader';

export default function PageTemplate({ children }: { children: React.ReactNode }) {
  const buttonProps = [{ variant: 'outline' as const, title: 'Upload' }];
  return (
    <>
      <AppHeader buttonProps={buttonProps} />
      <div className="w-full pt-16">{children}</div>
    </>
  );
}
