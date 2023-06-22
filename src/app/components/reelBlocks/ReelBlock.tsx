import * as React from 'react';
import { CommonLayout } from '../common/CommonLayout';
import ReelCarousel from './ReelCarousel';

export interface IReelBlockProps {
  block: ReelBlocks
}

export function ReelBlock({ block }: IReelBlockProps) {
  return (
    <div className='reelUp-block-wrapper'>
      <h4 className='reelUp-block-heading'>
        {
          block.heading
        }
      </h4>
      <ReelCarousel reels={block.reels} />
    </div>
  );
}
