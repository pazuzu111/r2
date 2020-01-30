import React, { Fragment } from "react";
import "../App.css";

const Button = props => {
  return (
    <Fragment>
      {props.button === "prev" ? (
        props.page === 1 ? null : (
          <button
            className="button"
            onClick={() => props.prevPhotos(props.page)}
          >
            prev
          </button>
        )
      ) : (
        props.button === "next" && (
          <button
            className="button"
            onClick={() => props.nextPhotos(props.page)}
          >
            next
          </button>
        )
      )}
    </Fragment>
  );
};

export default Button;
