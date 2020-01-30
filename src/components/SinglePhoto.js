import React from "react";
import Navbar from "./Navbar";

const SinglePhoto = props => {
  return (
    <div>
      <Navbar />
      <div className="singlePhoto">
        <img
          src={props.location.state.data.url}
          className="photoInfo"
          alt="foto"
        />
        <h2 className="photoInfo">Title: {props.location.state.data.title}</h2>
        <h4 className="photoInfo">
          Album ID: {props.location.state.data.albumId}
        </h4>
      </div>
    </div>
  );
};

export default SinglePhoto;
