import React from 'react';

const SinglePhoto = props => {
    return(
        <div className="photo">
            id: {props.location.state.data.id}
            title: {props.location.state.data.title}
        </div>
    )
}

export default SinglePhoto;