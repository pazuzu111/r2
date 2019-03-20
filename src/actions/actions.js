
export const GET_PHOTOS = 'GET_PHOTOS'
export const getPhotos = (page) => ({
    type: 'GET_PHOTOS',
    page: page
})

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS"
export const receivePhotos = data => ({
    type: 'RECEIVE_PHOTOS',
    photos: data
})

