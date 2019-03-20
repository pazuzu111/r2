import { GET_PHOTOS, RECEIVE_PHOTOS } from '../actions/actions'


const initialState = {
    photos: [],
    page: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
        return { ...state, page: state.page+1, loading: true }

        case RECEIVE_PHOTOS:
        let data = action.photos
        console.log('receive', data)
        return { ...state, photos: data, loading: false }
        
        default: return state
    }
}
