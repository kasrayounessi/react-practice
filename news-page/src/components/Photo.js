import React from 'react';

const Photo = (props) => {
    return (
        <div class="col-sm-6">
            <div class="card">
                <img src={props.data.thumbnailUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.data.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default Photo;