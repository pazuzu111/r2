import React from 'react';
import LikeButton from './LikeButton'

const Favorites = props => {

    let wrap = {
      "display": "flex",
      "flexWrap": "wrap"
    }
    return (
        <div style={wrap}>
            { props.location.state.data.map(x => {
                return(
                    <div key={x.id}>
                        <h2>Title: {x.title}</h2>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Favorites