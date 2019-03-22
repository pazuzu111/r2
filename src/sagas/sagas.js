import {call, put, takeLatest} from "redux-saga/effects";
import { fetchData } from "../services/fetchService";
import { GET_PHOTOS, receivePhotos, GET_PREV_PHOTOS } from '../actions/actions'

export function* fetchPhotos(action) {
    try {
        const data = yield call(() => fetchData(action.page));
        yield put(receivePhotos(data))
    } catch (e) {
        // TODO
        console.log(e)
    }
}

//watcher
export function* mySaga() {
    yield takeLatest(GET_PREV_PHOTOS, fetchPhotos)
    yield takeLatest(GET_PHOTOS, fetchPhotos)
}

