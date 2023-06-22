import * as React from 'react';
import { CommonLayout } from './common/CommonLayout';

interface IBannerSectionProps {
}

const BannerSection: React.FunctionComponent<IBannerSectionProps> = (props) => {
  return (
    <div className='h-2/4 relative'>
        <img src='/banner.png' alt='Banner image' className='w-full h-full max-h-96 mb-12' />
        <CommonLayout>
            <div className='absolute -bottom-0 flex gap-5 items-center'>
                <span className='border-2 border-gray-400 rounded-2xl h-48 w-48 overflow-hidden'>
                    <img src='/profile-image.png' alt='Profile image' className='w-full h-full' />
                </span>
                <h3 className='text-2xl text-white font-extrabold tracking-wide'>Name of Store goes Here</h3>
            </div>
        </CommonLayout>
    </div>
  )
};

export default BannerSection;
