import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imageList from '../imageList';

//post section of the image gallery.
export default function Posts() {
    {/*code for preview slider while clicking on image*/ }
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openGallery = (index) => {
        setSelectedImageIndex(index);
        setIsGalleryOpen(true);
    };

    const closeGallery = () => {
        setSelectedImageIndex(0);
        setIsGalleryOpen(false);
    };
    {/*functionality and html ans css style of slider starts here.*/ }
    const customSlideRenderer = (item) => (

        //left side of the image of the slider code starts here.     
        <div className="custom-slide">
            <div className="image-slider-container">
                <img src={item.original} alt={item.originalAlt} className="image" />
            </div>

            {/*closing the preview code starts here*/}
            <button className="close-button" onClick={closeGallery}>
                <svg aria-label="Close" class="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
            </button>

            {/*custom content right side of image when opening in slider starts here*/}
            <div className="custom-content">

                <div className="top">
                    <div className="top-header-section">
                        <div className="profile-pic-icon">
                            <img src="https://wallpapers.com/images/high/instagram-profile-pictures-ut4t3clnp7r84i2x.webp" alt="ProfilePicture"></img>
                        </div>
                        <div className="ProfileName">
                            <span id="uname">Kamal_Shivji_Bhadra</span>
                            <span id="city">Navi Mumbai, Maharashtra</span>
                        </div>
                        <div className="options">
                            <svg aria-label="Options" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>

                        </div>
                    </div>
                </div>
                <div className="centred-content">
                    <div className="profile-pic-icon">
                        <img src="https://wallpapers.com/images/high/instagram-profile-pictures-ut4t3clnp7r84i2x.webp" alt="ProfilePicture"></img>
                    </div>
                    <div className="ProfileName">
                        <span id="uname">Kamal_Shivji_Bhadra<span className="tips"> Hello How Are you doing ?</span></span>

                        <span class="Tagged">@kamalbhanushali🔥</span>

                        <span className="tips" style={{ paddingTop: 15 }}>Had a encounter with the guy in <span className="Tagged"> @1billionsummit</span> and no a</span>
                        <span className="tips">doubt why people call him the xyz.</span>
                        <span className="tips" style={{ paddingTop: 15 }}>Such a humble personality.❤️</span>
                        <span className="Tagged" style={{ paddingTop: 15 }}>#kamalbhanushali #people #developer#People#Developer</span>
                        <span className="Tagged">#python #Fullstackdeveloper #programmer #react</span>
                        <span className="time">22w</span>
                    </div>
                </div>
                <div className="comment-section">
                    <div className="profile-pic-icon">
                        <img src="https://funylife.in/wp-content/uploads/2023/01/28_Instagram-DP-images-www.funylife.in_-1024x1024.jpg"></img>
                    </div>
                    <div className="ProfileName">
                        <span id="uname">Kamal Bhanushali<svg aria-label="Verified" class="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>🙌</span>
                        <span id="like-reply"><span className="time">22w</span>1like    Reply</span>
                        <span id="like-reply"><span id="linehorizontal">____</span>View Replies(1)</span>
                    </div>
                    <div className="Like">
                        <svg aria-label="Like" class="x1lliihq x1n2onr6" color="rgb(142, 142, 142)" fill="rgb(0,0,0)" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    </div>
                </div>
                <div className="svg-icons">
                    <svg aria-label="Like" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                    <svg aria-label="Comment" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    <svg aria-label="Share Post" class="x1lliihq x1n2onr6" color="rgb(0,0,0)" fill="rgb(115, 115, 115)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    <svg id="right-svg" aria-label="Save" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
                <div className="Likes-and-Date">
                    <span className="likes">581 likes</span>
                    <span className="dates">APRIL 3</span>
                </div>
                <div className="comment-textbox">
                    <svg aria-label="Emoji" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                    <input type="text" placeholder="Add a comment"></input>
                    <span class="post">Post</span>
                </div>
            </div>
            {/*custom content style and functonality ends here*/}
        </div>
    );

    return (
        <div class="PostGallary">                 {/*mapping the images from imagelist.js*/}
            <div class="GallaryRow">
                {imageList.map((imageUrl, index) => (
                    <div class="PostContainer" key={index}>
                        <a href="#">
                            <img
                                src={imageUrl}
                                onClick={() => openGallery(index)}
                                alt={`image-${index}`} />

                            <div className="pinIcon">
                                <svg aria-label="Pinned post icon" class="x1lliihq x1n2onr6" color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="22" role="img" viewBox="0 0 24 24" width="22"><title>Pinned post icon</title><path d="m22.707 7.583-6.29-6.29a1 1 0 0 0-1.414 0 5.183 5.183 0 0 0-1.543 3.593L8.172 8.79a5.161 5.161 0 0 0-4.768 1.42 1 1 0 0 0 0 1.414l3.779 3.778-5.89 5.89a1 1 0 1 0 1.414 1.414l5.89-5.89 3.778 3.779a1 1 0 0 0 1.414 0 5.174 5.174 0 0 0 1.42-4.769l3.905-5.287a5.183 5.183 0 0 0 3.593-1.543 1 1 0 0 0 0-1.414Z"></path></svg>

                            </div>
                            <div className="centredIcon">  {/*iconnd while visible only while hovering on images*/}

                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                                </svg>
                                <span>559</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-chat-fill" viewBox="0 0 16 16">
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                </svg>
                                <span>14</span>

                            </div>

                        </a>

                    </div>

                ))}

                {/*code for opening and closing preview starts here*/}
                {isGalleryOpen && (
                    <div className="gallery-overlay">
                        <Gallery                       //imported from the react-gallery
                            items={imageList.map((imageUrl, index) => ({
                                original: imageUrl,
                                originalAlt: `Image ${index + 1}`,
                            }))}
                            startIndex={selectedImageIndex}
                            onRequestClose={closeGallery}
                            renderItem={customSlideRenderer}
                        />
                    </div>
                )}

            </div>

        </div>


    )
}
