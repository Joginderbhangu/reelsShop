"use client"
import { useModal } from '@/store/ReelModalContext'
import React from 'react'
import Slider from 'react-slick'

type Props = {
    children: React.ReactNode
}



export default function CarouselWrapper({ children }: Props) {

  const { setIsDisabled } = useModal()

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    beforeChange: () => setIsDisabled(true),
    afterChange: () => setIsDisabled(false)
  }
    
  return (
    <Slider {...settings}>
        {
            children
        }
    </Slider>
  )
}