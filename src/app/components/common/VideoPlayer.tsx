"use client"
import useObserver from '@/app/hooks/useObserver';
import * as React from 'react';
import Modal from './Modal';
import { useModal } from '@/store/ReelModalContext';

interface IVideoPlayerProps {
  src: string,
  autoPlay?: boolean,
  muted?: boolean,
  loop?: boolean,
  className?: string,
  id?: string
}

const VideoPlayer: React.FunctionComponent<IVideoPlayerProps> = ({ src, autoPlay= true, muted= true, loop= true, className='' }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [ isVisible ] = useObserver(videoRef)
  const { isOpen, setIsOpen, isDisabled } = useModal();


  React.useEffect(() => {
      if(isOpen){
        videoRef.current?.pause()
      } else if(isVisible){
        videoRef.current?.play()
      } else {
        videoRef.current?.pause()
      }
  }, [isVisible, isOpen, isDisabled])

  return (
    <>
      <video 
          onClick={() => !isDisabled && setIsOpen(true)}
          src={src}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          className={className}
          ref={videoRef}
      />
    </>
  )
};

export default VideoPlayer;
