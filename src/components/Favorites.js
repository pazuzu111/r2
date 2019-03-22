import React from 'react';
import LikeButton from './LikeButton'
import Photo  from './Photo'
import Navbar  from './Navbar'

const Favorites = props => {
	let f = JSON.parse(localStorage.getItem('favorites'))

	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="photos">
					{
						f?
						f.map(photo => {
							return ( 
								<div className="photo">
									<Photo photo={photo} />
									<LikeButton info={photo} id={photo.id} title={photo.title} />
								</div>
							)
						})
						:
						<p>no favorites</p>
					}
				</div>
			</div>
		</div>
	)
}

export default Favorites