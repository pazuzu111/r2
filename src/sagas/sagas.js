import {call, put, takeLatest} from "redux-saga/effects";
import { fetchData } from "../services/fetchService";
import { GET_PHOTOS, receivePhotos } from '../actions/actions'

function* fetchPhotos(action) {
    try {
        const data = yield call(() => fetchData(action.page));
        if(data) {         
            yield put(receivePhotos(data))
        }
    } catch (e) {
        // TODO
        console.log(e)
    }
}

export default function* mySaga() {
    yield takeLatest(GET_PHOTOS, fetchPhotos)
}

