export default function ReelsViews({ views }) {

    /*********** Function for format views ****************/
    const viewFormatter = (n, d) => {
        let x = ('' + n).length;
        let p = Math.pow;
        d = p(10, d)
        x -= x % 3
        return Math.round(n * d / p(10, x)) / d + '' + " kMGTPE"[x / 3]
    }
    /*********** Function for format views ****************/

    return (
        <div className="reelup_reels_count_wrapper">
            <span className="reelup_count_icon">
                <svg id="f87d535f-6798-49b7-8929-a7c1dbe15bec" data-name="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 256"><path d="M256,128c-81.9,0-145.7,48.8-224,128,67.4,67.7,124,128,224,128s173.4-76.4,224-126.6C428.2,198.6,354.8,128,256,128Zm0,219.3c-49.4,0-89.6-41-89.6-91.3s40.2-91.3,89.6-91.3,89.6,41,89.6,91.3S305.4,347.3,256,347.3ZM311.48,256A55.48,55.48,0,1,1,256,200.52,55.48,55.48,0,0,1,311.48,256Z" transform="translate(-32 -128)" fill="#fff"></path>
                </svg>
            </span>
            <span className="reelup_reels_count">{viewFormatter(views, 1)}</span>
        </div>
    )
}
