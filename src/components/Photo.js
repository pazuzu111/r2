import React from 'react';
import { Link } from 'react-router-dom';

export const Photo = props =>  {
    return (
        <Link to={{ pathname: `/${props.photo.id}`, state: { data: props.photo }}} >
          <img src={props.photo.thumbnailUrl} alt="photo"/>
        </Link>
    )
}
  
export default Photo