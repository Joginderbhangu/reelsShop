import * as React from 'react';

export interface ICommonLayoutProps {
    children: React.ReactNode
}

export function CommonLayout ({ children }: ICommonLayoutProps) {
  return (
    <div className='md:w-4/5 m-auto relative'>
        {
            children
        }
    </div>
  );
}
