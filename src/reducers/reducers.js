import { GET_PHOTOS, RECEIVE_PHOTOS } from '../actions/actions'


const initialState = {
    photos: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
        console.log('getch')
        return { ...state, loading: true }

        case RECEIVE_PHOTOS:
        let data = action.data
        console.log(data)
        return { ...state, photos: data, loading: false }

        default: return state
    }
}
