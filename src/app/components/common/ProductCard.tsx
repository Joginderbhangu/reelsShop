import React from 'react'

export default function ProductCard() {
    return (
        <div className="reelUp_product_card">
            <div className="reelUp_slider_featured_image">
                <img src="/product-dummy.png" alt="product-dummy" />
            </div>
            <div className="reelUp_product_info">
                <p className="reelUp_slider_title">Dummy Product title
                </p>
                <div className="reelUp_slider_rating"><div className="reelUp-reviews-wrapper">
                </div>
                </div>
                <div className="reelUp_slider_price">
                    <span className="reelUp_slider_sale_price">$XX.XX</span>
                    <span className="reelUp_slider_regular_price">$XX.XX</span>
                </div>
            </div>
        </div>
    )
}
