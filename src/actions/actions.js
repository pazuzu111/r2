
export const GET_PHOTOS = 'GET_PHOTOS'
export const getPhotos = (page, prevOrNext) => ({
    type: 'GET_PHOTOS',
    page: page,
    prevOrNext: prevOrNext
})

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS"
export const receivePhotos = data => ({
    type: 'RECEIVE_PHOTOS',
    photos: data
})

