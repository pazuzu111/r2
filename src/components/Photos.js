import React from 'react';
import Photo  from './Photo'
import LikeButton from './LikeButton';

const Photos = props =>  {
    return(
        <div className="photo-container">
        {
            props.loading === false || undefined? 
            (
                props.photos.map(photo => {
                return (
                    <div className="photo" key={photo.id}>
                        <Photo photo={photo} />
                        <LikeButton info={photo} id={photo.id} title={photo.title} />
                    </div>
                )
                })
            ) 
            : 
            (
                <div className="loader">
                    {/* <img src={loader} alt="loader"/> */}
                    loading....
                </div>
            )
        }
        </div>
    )
}
  
export default Photos