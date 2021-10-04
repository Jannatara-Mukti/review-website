//This is the single Article Design Page
import React from 'react';

const Article = (props) => {

    const {name, img, des} = props.article;

    return (
        <div className="flex flex-row justify-between p-10">
            <div className="w-1/2 mr-12" >
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className="w-1/2">
                <h2 className="text-5xl font-semibold m-3 text-green-600">{name}</h2>
                <p className="text-2xl ml-3 my-2">{des}</p>
            </div>
        </div>
    );
};

export default Article;