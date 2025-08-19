import React from 'react';

export default function PageTemplate({ children }: { children: React.ReactNode }) {
  return <div className="w-full pt-17 pb-17 md:pb-0">{children}</div>;
}
