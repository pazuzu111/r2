import { GET_PHOTOS, RECEIVE_PHOTOS, GET_PREV_PHOTOS } from '../actions/actions'

const initialState = {
    photos: [],
    page: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
        console.log(action.page)
        console.log(state.type)

        return { ...state, page: state.page+1, loading: true }

        case RECEIVE_PHOTOS:
        let data = action.photos
        console.log('received',data)
        return { ...state, photos: data, loading: false }

        case GET_PREV_PHOTOS:
        console.log(action.type)

        return { ...state, page: state.page-1, loading: true }

        default: return state
    }
}
