import * as React from 'react';
import { CommonLayout } from '../common/CommonLayout';
import ReelCarousel from './ReelCarousel';

export interface IReelBlockProps {
  block: ReelBlocks
}

export function ReelBlock ({ block }: IReelBlockProps) {
  return (
    <CommonLayout>
        <div className='my-10 mt-32'>
            <h4 className='text-gray-600 text-lg font-semibold'>
              {
                block.heading
              }
            </h4>
            <ReelCarousel reels={block.reels} />
        </div>
    </CommonLayout>
  );
}
