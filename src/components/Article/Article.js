//This is the single Article Design Page
import React from 'react';
import { useState } from 'react/cjs/react.development';

const Article = (props) => {

    const {name, img, des} = props.article;

    const [post, setPost] = useState(props.article.des.slice(0,100) + "......");

    const handlePost = () => {
        setPost(props.article.des);
    }

    return (
        <div className="flex flex-row justify-between p-10">
            <div className="w-1/2 mr-12" >
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className="w-1/2">
                <h2 className="text-5xl font-semibold m-3 text-green-600">{name}</h2>
                <p className="text-2xl ml-3 my-2">{post}</p>
                <button onClick={handlePost} className="bg-gray-200 text-gray-600 rounded-md px-5 py-3 font-semibold ml-4 mt-2">Read More</button>
            </div>
        </div>
    );
};

export default Article;