import { GET_PHOTOS, RECEIVE_PHOTOS, GET_PREV_PHOTOS } from '../actions/actions'

const initialState = {
	photos: [],
	page: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PHOTOS:
		console.log('state',state.page)

		return { ...state, page: state.page+1, loading: true }

		case RECEIVE_PHOTOS:
		let data = action.photos
		console.log('received',data)
		console.log('state',state.page)

		return { ...state, photos: data, loading: false }

		case GET_PREV_PHOTOS:
		return { ...state, page: state.page-1, loading: true }

		default: return state
	}
}
