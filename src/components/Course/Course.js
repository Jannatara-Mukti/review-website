//These data are for Home Page 
import React from 'react';

const Course = (props) => {
    
    const {name, img, price, rating, totalLecture, courseDuration} = props.course;

    return (
        <div>
            <div className="w-auto rounded overflow-hidden shadow-lg">
                <img className="w-full"  src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-5">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
                <div className="px-10 pt-4 pb-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {price}}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {rating}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Total-Lecture: {totalLecture}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Course-Duration: {courseDuration}</span>
                </div>
            </div>
        </div>
    );
};

export default Course;