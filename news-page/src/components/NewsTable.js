import React from 'react';

const NewsTable = (props) => {
    return(
        <div>
            <img src={props.data.urlToImage} />
            <h4>{props.data.title}</h4>
        </div>
    )
}

export default NewsTable;