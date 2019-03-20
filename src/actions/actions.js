
export const GET_PHOTOS = 'GET_PHOTOS'
export const getPhotos = () => dispatch => {
    dispatch({
        type: 'GET_PHOTOS',
    })
}

export const GET_PHOTO = 'GET_PHOTO'
export const getPhoto = () => dispatch => {
    dispatch({
        type: 'GET_PHOTO',
    })
}


export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS"
export const receivePhotos = data => dispatch => {
    dispatch({
        type: 'RECEIVE_PHOTOS',
        data: data
    })
}
