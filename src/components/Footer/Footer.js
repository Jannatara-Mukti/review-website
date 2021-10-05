//Footer
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-green-600 text-center text-white py-6">
            <div className="grid grid-cols-3 justify-around mb-10">
                <div className="ml-20">
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                    <p><i className="fas fa-map-marker-alt"></i>   House#7, Road#4, Dhanmondi, Dhaka-1205</p>
                    <p><i className="fas fa-phone"></i>   <span>880 1624666000,</span>
                    <span>+880 1624888444,</span> 
                    <span>+880 1966177177</span></p>
                    <p><i className="fas fa-envelope"></i>   learn.english@gmail.com</p>
                </div>
                <div className="text-justify ml-28">
                    <h3 className="text-xl font-semibold">Our Course Catagory</h3>
                    <div className="ml-5">
                        <p>Improve Speaking</p>
                        <p>Improve Writing</p>
                        <p>Improve Lidtening</p>
                        <p>Improve Reading</p>
                    </div>
                </div>
                <div className="text-left ml-28">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <div className="ml-2">
                        <p>About Us</p>
                        <p>Gallery</p>
                        <p>Job Placement</p>
                        <p>Students Feedback</p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-green-200 pt-5 drop-shadow-lg filter">
                <p className="text-xl  font-semibold">Connect With Us</p>
                <span className="text-5xl"><i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-instagram-square"></i> <i className="fab fa-youtube-square"></i></span>
                <p className="text-xl pb-2  font-semibold"> &copy; Learn English. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;