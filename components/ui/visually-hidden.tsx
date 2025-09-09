import { VisuallyHidden } from 'radix-ui';
import React, { forwardRef } from 'react';

export const VisuallyHiddenInput = forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'>>((props, ref) => {
  return (
    <VisuallyHidden.Root>
      <input ref={ref} type="file" className="w-full h-60 border" {...props} />
    </VisuallyHidden.Root>
  );
});

VisuallyHiddenInput.displayName = 'VisuallyHiddenInput';
