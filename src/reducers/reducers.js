import { GET_PHOTOS, RECEIVE_PHOTOS } from '../actions/actions'


const initialState = {
    photos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
        return { ...state, loading: true }

        case RECEIVE_PHOTOS:
        let data = action.photos
        console.log('receive', data)
        return { ...state, photos: data, loading: false }

        default: return state
    }
}
