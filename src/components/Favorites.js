import React from 'react';
import LikeButton from './LikeButton'

const Favorites = props => {
    let wrap = {
      "display": "flex",
      "flexWrap": "wrap"
    }

    let f = JSON.parse(localStorage.getItem('favorites'))

    return (
        <div style={wrap}>
            {
                f?
                f.map(x => {
                    return ( <p>title: {x.title}</p> )
                })
                :
                <p>no favorites</p>
            }
        </div>
    )
}

export default Favorites