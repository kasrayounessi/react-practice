import React, { useState } from 'react';
import axios from 'axios';
import NewsTable from './NewsTable';

const News = () => {
    const [news, setNews] = useState([]);

    function onClickHandler() {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-10-23&sortBy=publishedAt&apiKey=7b18b29ba3c143b39c25ccb3c3f95b1a')
            .then(response => {
                setNews(response.data.articles);
            }
            )
            .catch(error => console.error(error));
    }

    
    return (<div><button onClick={onClickHandler}>click me</button>
        {
            news.map(n=> { <NewsTable data={n} />
                
            })
        }</div>);

}

export default News;