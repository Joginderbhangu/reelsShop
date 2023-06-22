import * as React from 'react';

export interface ICommonLayoutProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: ICommonLayoutProps) {
  return (
    <div className='reelUp_shop_container'>
      {
        children
      }
    </div>
  );
}
