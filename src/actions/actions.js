
export const GET_PHOTOS = 'GET_PHOTOS'
export const getPhotos = () => ({
    type: 'GET_PHOTOS',
})

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS"
export const receivePhotos = data => ({
    type: 'RECEIVE_PHOTOS',
    photos: data
})

