import React from 'react';
import photo, { Photo } from './Photo'
const Photos = props =>  {
    return(
    <div>
        <div className="photo-container">
        {
            props.loading === false || undefined? 
            (
                props.photos.map(photo => {
                return (
                    <div className="photo" key={photo.id}>
                        <Photo photo={photo} />
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
    </div>
    )
}
  
export default Photos