import React from 'react';
import Photo  from './Photo'
import LikeButton from './LikeButton';
import { Link } from 'react-router-dom';

const Photos = props =>  {
    return(
        <div className="photos">
            {
                props.loading === false || undefined? 
                (
                    props.photos.map(photo => {
                    return (
                        <div className="photo" key={photo.id}>
                            <Link to={{ pathname: `/${props.id}`, state: { data: photo }}} >

                                <Photo photo={photo} />
                                </Link>

                                <div>
                                    <LikeButton info={photo} id={photo.id} title={photo.title} />
                                </div>
                            <hr/>
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