import React from 'react';

const Photo = (props) => {
    return(<div className="col-sm-3">
    <div className="card">
    <img src={ props.data.thumbnailUrl } className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{ props.data.title }</h5>       
      </div>
    </div>
  </div>)
}
export default Photo;