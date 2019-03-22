import React from 'react';
import { Link } from 'react-router-dom';

const Photo = props =>  {
    return (
        <div>
           <img src={props.photo.thumbnailUrl} className="photoInfo" alt="foto"/>
            <h3 className="photoInfo">Title: {props.photo.title}</h3>
            <h4 className="photoInfo">Album ID: {props.photo.albumId}</h4>
        </div>
    )
}
  
export default Photo