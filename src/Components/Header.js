import React, { useState } from 'react';
import Modal from 'react-modal';

//code for top right header section of the main page.
Modal.setAppElement('#root')
export default function () {
    const [modalIsOpen, setModaiIsOpen] = useState(false);  {/*modal state defining of the top right option svg*/}
    return (

        <div className="RightSection">
            <div className="Main">
                <div className="Header">
                    <div className="LeftContainer">
                        <div className="ProfilePic">
                            <img src="https://wallpapers.com/images/high/instagram-profile-pictures-ut4t3clnp7r84i2x.webp" alt="ProfilePicture"></img>
                        </div>

                    </div>
                    <div className="RightContainer">

                        <div className="ProfileName">
                            <a>
                                <h2>kamal_shivji_bhadra</h2>
                            </a>
                            <div className="RightSymbol">
                                <svg aria-label="Verified" className="x1lliihq x1n2onr6" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>
                            </div>

                            <div className="FollowingButton">

                                <button>Following<span> <svg aria-label="Down chevron icon" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Down chevron icon</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg></span></button>

                            </div>
                            <div className="MessageButton">
                                <button>Message</button>
                            </div>
                            <div className="ProfileButton">
                                <button><svg aria-label="Similar accounts" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Similar accounts</title><path d="M19.006 8.252a3.5 3.5 0 1 1-3.499-3.5 3.5 3.5 0 0 1 3.5 3.5Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></path><path d="M22 19.5v-.447a4.05 4.05 0 0 0-4.05-4.049h-4.906a4.05 4.05 0 0 0-4.049 4.049v.447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" x1="5.001" x2="5.001" y1="7.998" y2="14.003"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" x1="8.004" x2="2.003" y1="11" y2="11"></line></svg></button>
                            </div>
                            <div className="SvgThread">
                                <svg aria-label="Threads" height="27" role="img" viewBox="0 0 192 192" width="27" xmlns="http://www.w3.org/2000/svg"><path className="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
                            </div>
                            <div className="SvgOptions">  {/*modal functionality added here for openig and closing modal.*/}
                                <svg onClick={() => setModaiIsOpen(true)} aria-label="Options" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="32" role="img" viewBox="0 0 24 24" width="32"><title>Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                <Modal className="Dialog" isOpen={modalIsOpen}>

                                    <button className="topButton">Block</button>
                                    <button className="middleButtons">Restrict</button>
                                    <button className="middleButtons">Report</button>
                                    <button className="secondLastButton">About This Account</button>
                                    <button class="bottomButton" onClick={() => setModaiIsOpen(false)}>Cancel</button>

                                </Modal>
                            </div>

                        </div>
                        <div className="PostFollowers">
                            <span> <b>624</b>posts</span>
                            <span><b>14.7K</b>followers</span>
                            <span><b>2,300</b>following</span>

                        </div>
                        <div className="SmallName">

                            <span>Kamal Bhanushali</span>

                        </div>
                        <div className="JobTitle">
                            Full Stack Developer
                        </div>
                        <div className="Description">
                            <h1>
                                💥| Full Stack Developer<br></br>
                                💲| I Develope Websites using React.js Technology<br></br>
                                📥| DM “GROW” to know more<br></br>
                                Visit 👇👇<br></br>
                                <svg aria-label="Link icon" className="x1lliihq x1n2onr6" color="rgb(0, 55, 107)" fill="rgb(0, 55, 107)" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Link icon</title><path d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="8.471" x2="15.529" y1="15.529" y2="8.471"></line></svg>
                                <span id="Url">www.kamalbhadra.com + 1</span>
                            </h1>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
