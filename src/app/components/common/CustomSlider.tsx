'use client'

export default function CustomSlider({ children }) {
  return (
    <div className='reelUp_custom_slider_wrapper'>
      <div className="reelUp_custom_slider">
        {children}
      </div>
      <div className='reelUp_slider_navigators'>
        <button className='reelUp_slider_arrow reelUp_slider_prev'>
          <svg id="a72e8a2d-7e88-404e-9ddd-56cdcf6badb9" data-name="e5c9034c-ece7-4d27-b0d2-d1785ab5c7f7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><rect width="50" height="50" fill="#fff" opacity="0"></rect><path d="M32.61,42.5A2.27,2.27,0,0,1,31,41.83L15.78,26.61a2.28,2.28,0,0,1,0-3.22L31,8.17a2.28,2.28,0,0,1,3.23,3.23L20.62,25l13.6,13.6a2.29,2.29,0,0,1,0,3.23A2.25,2.25,0,0,1,32.61,42.5Z"></path></svg>
        </button>
        <button className='reelUp_slider_arrow reelUp_slider_next'>
          <svg id="bc8650ba-2035-4743-8c29-721456410106" data-name="e5c9034c-ece7-4d27-b0d2-d1785ab5c7f7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><rect width="50" height="50" fill="#fff" opacity="0"></rect><path d="M17.39,7.5A2.27,2.27,0,0,1,19,8.17L34.22,23.39a2.28,2.28,0,0,1,0,3.22L19,41.83a2.28,2.28,0,1,1-3.23-3.23L29.38,25,15.78,11.4a2.29,2.29,0,0,1,0-3.23A2.25,2.25,0,0,1,17.39,7.5Z"></path></svg>
        </button>
      </div>
    </div>
  )
}
