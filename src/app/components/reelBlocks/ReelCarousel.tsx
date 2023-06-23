import React, { Suspense } from 'react';
import CarouselWrapper from '../common/CarouselWrapper';
import VideoPlayer from '../common/VideoPlayer';
import ReelsViews from '../common/ReelsViews';
import SaleBadge from '../common/SaleBadge';
import ProductCard from '../common/ProductCard';
import CustomSlider from '../common/CustomSlider';


type Props = {
  reels: Reel[]
}

export default function ReelCarousel({ reels }: Props) {
  return (
    // <CarouselWrapper>
    <CustomSlider>
      {
        reels.map(reel => (
          <div className='reelUp_card' key={reel.id}>
            <Suspense fallback={<h2 className='text-lg'>Loading</h2>}>
              <div className='reelUp_card_video_wrapper'>
                <ReelsViews views={reel.reel_views} />
                <SaleBadge />
                <div className="reelUp_card_video">
                  <VideoPlayer
                    src={reel.short_video}
                    className='reelUp_video_player'
                  />
                </div>
              </div>
              {/* <div style={{ margin: "1px" }}></div> */}
              <ProductCard />
            </Suspense >
          </div>
        ))
      }
    </CustomSlider>
    // </CarouselWrapper >
  )
}