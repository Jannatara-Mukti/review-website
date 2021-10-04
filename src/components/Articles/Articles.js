//The Articles will be generated from here
import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Articles = () => {
    
    const [articles, setArticles] = useState([]);

    useEffect( () => {
        fetch('./articleData.JSON')
        .then(res => res.json())
        .then(data => setArticles(data))
    }, []);

    return (
        <div>
            <div className="bg-article-pattern bg-cover bg-no-repeat bg-center min-h-full py-44 text-white text-center">
                <h2 className="text-3xl">Read Our Free Articles</h2>
            </div>
            <div className="p-10">
                {
                    articles.map(article => <Article key={article.id} article={article}></Article>)
                }
            </div>
        </div>
    );
};

export default Articles;