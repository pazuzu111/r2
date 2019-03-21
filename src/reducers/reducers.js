import { GET_PHOTOS, RECEIVE_PHOTOS } from '../actions/actions'


const initialState = {
    photos: [],
    page: 1
}


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
        if(action.prevOrNext === 'next') {
            return { ...state, page: state.page+1, loading: true }
        }
        else if(action.prevOrNext === 'prev' && state.page !== 0) {
            return { ...state, page: state.page-1, loading: true }
        }

        case RECEIVE_PHOTOS:
        let data = action.photos
        return { ...state, photos: data, loading: false }

        default: return state
    }
}
