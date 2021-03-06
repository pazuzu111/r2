import React from "react";
import Photo from "./Photo";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";

const Photos = props => {
  return (
    <div className="photos">
      {props.loading === false || undefined ? (
        props.photos.map(photo => {
          return (
            <div className="photo" key={photo.id}>
              <Link to={{ pathname: `/${photo.id}`, state: { data: photo } }}>
                <Photo photo={photo} />
              </Link>

              <div>
                <LikeButton info={photo} id={photo.id} title={photo.title} />
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <div className="loader">
          <i className="fas fa-spinner fa-4x"></i>
          <h3 className="photoInfo">loading...</h3>
        </div>
      )}
    </div>
  );
};

export default Photos;
