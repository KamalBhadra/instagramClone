import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//carousel for sliding the rounded posts on main page
export default function Carousal() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.     {/*slider setup*/}
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (


        <div className="Slider">      {/*slider setup on the main page with pre-next button */}

            <Carousel responsive={responsive}>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>Student Results</span>
                        </div>
                    </div>

                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>🔺</span>
                        </div>
                    </div>
                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>1BillionSummit</span>
                        </div>
                    </div>
                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>Dubai</span>
                        </div>
                    </div>
                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>🔺</span>
                        </div>
                    </div>
                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>🔺</span>
                        </div>
                    </div>
                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>🔺</span>
                        </div>
                    </div>
                </div>
                <div className="Card-Container">
                    <div className="image-container">
                        <img src="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/94ec8852-acce-429c-9347-20fdd26edcba.blob" alt="ProfilePicture"></img>
                        <div className="SpanClass">
                            <span>🔺</span>
                        </div>
                    </div>
                </div>

            </Carousel>

        </div>

    )
}
