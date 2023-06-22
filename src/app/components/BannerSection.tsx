'use client'
import * as React from 'react';
import { CommonLayout } from './common/CommonLayout';

interface IBannerSectionProps {
}

const BannerSection: React.FunctionComponent<IBannerSectionProps> = (props) => {
  const [hasBanner, setHasBanner] = React.useState(false);
  return (

    <div className={`reelUp-shop-banner ${hasBanner ? 'reelUp-shop-cover' : 'reelUp-shop-cover-dummy'}`}>
      <div className='reelUp-shop-banner-content'>
        <div className='reelUp-shop-profile'>
          <div className='reelUp-shop-profile-pic'>
            <img src='/profile.svg' alt="" />
          </div>
          <div className='reelUp-shop-name'>
            <span>
              Dot & Key Skincare
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BannerSection;
