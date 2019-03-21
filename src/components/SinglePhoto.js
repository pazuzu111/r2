import React from 'react';

const SinglePhoto = props => {
    return(
        <div>
            id: {props.location.state.data.id}
            title: {props.location.state.data.title}

        </div>
    )
}

export default SinglePhoto;