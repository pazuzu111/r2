import React from 'react';
import LikeButton from './LikeButton'
import Photo  from './Photo'
import { Link } from 'react-router-dom';

const Favorites = props => {
    let wrap = {
      "display": "flex",
      "flexWrap": "wrap"
    }

    let f = JSON.parse(localStorage.getItem('favorites'))

    return (
        <div className="photo-container">
            {
                f?
                f.map(photo => {
                    return ( 
                        <div>
                            <Photo photo={photo} />
                            <LikeButton info={photo} id={photo.id} title={photo.title} />
                        </div>
                    )
                })
                :
                <p>no favorites</p>
            }
            
            <Link to="/">
                Home
            </Link>
        </div>
    )
}

export default Favorites