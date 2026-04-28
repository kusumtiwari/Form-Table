import { cn } from '@/lib/utils';
import React from 'react';

function FormGroup({
  children,
  horizontal,
  className,
}: {
  children: React.ReactNode;
  horizontal?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', horizontal && 'flex-row gap-2.5 items-center', className)}>
      {children}
    </div>
  );
}

export default FormGroup;
