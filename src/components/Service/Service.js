// Service Page data are coming from here 
import React from 'react';

const Service = (props) => {
    const {name, img, price, rating, totalLecture, courseDuration} = props.service;

    return (
        <div>
            <div className="w-auto rounded overflow-hidden shadow-lg">
                <img className="w-full"  src={img} alt="Sunset in the mountains" />
                <div className="px-2">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
                <div className="px-2 py-8">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {price}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {rating}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total-Lecture: {totalLecture}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Course-Duration: {courseDuration}</span>
                    <br/>
                    <button onClick={() => props.handleClick(props.service)} className="bg-green-600 py-2 px-5 my-3 rounded-md text-white font-semibold">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Service;