

interface Reel {
        id: string,
        title: string,
        short_video: string,
        thumbnail: string,
        credit: string|null,
        creditor_link: string|null,
        cta: string,
        cta_external_link: string|null,
        custom_button_text: string|null,
        custom_button_link: string|null,
        reel_views: number,
        full_video: string,
        products: Product[]
}

interface Product {
    id: number,
    handle: string
}

interface ReelBlocks {
    id: number,
    heading: string,
    reels: Reel[]
}


interface Action<T, P> {
    type: T;
    payload?: any;
}

interface CarouselSettings {
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    initialSlide: number,
}

interface ResponsiveCarouselSetting {
    responsive: [
        {
            breakpoint: number,
            settings: CarouselSettings
        }
    ]
}

interface AllCarouselSettings extends CarouselSettings {
        responsive: ResponsiveCarouselSetting[]
}