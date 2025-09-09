import React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const TemplateWrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <div className="w-full pt-17 pb-17 md:pb-0 bg-[var(--background)]" {...props}>
      {children}
    </div>
  );
};
