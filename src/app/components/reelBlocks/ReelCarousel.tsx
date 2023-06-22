import React, { Suspense } from 'react';
import CarouselWrapper from '../common/CarouselWrapper';
import VideoPlayer from '../common/VideoPlayer';


type Props = {
  reels: Reel[]
}

export default function ReelCarousel({ reels }: Props) {


  return (
    <CarouselWrapper>
        {
          reels.map(reel => (
              <div className='gap-2' key={reel.id}>
                <Suspense fallback={<h2 className='text-lg'>Loading</h2>}>
                  <VideoPlayer
                    src={reel.short_video}
                    className='rounded-md'
                  />
                </Suspense>
              </div>
          ))
        }
    </CarouselWrapper>
  )
}