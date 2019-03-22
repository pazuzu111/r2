import React from 'react';
import { Link } from 'react-router-dom';

export const Photo = props =>  {
    return (
        <Link to={{ pathname: `/${props.photo.id}`, state: { data: props.photo }}} >
          <img src={props.photo.thumbnailUrl} className="photoInfo" alt="photo"/>
          <h3 className="photoInfo">Title: {props.photo.title}</h3>
          <h4 className="photoInfo">Album ID: {props.photo.albumId}</h4>
        </Link>
    )
}
  
export default Photo