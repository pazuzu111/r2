import {call, put, takeLatest} from "redux-saga/effects";
import { fetchData } from "./services/fetchService";
import { GET_PHOTOS, receivePhotos } from '../actions/actions'

function* fetchPhotos() {
    try {
        const data = yield call(fetchData);
        console.log(data)
        if(data) {         
            yield put({
                type: 'RECEIVE_PHOTOS',
                data: data
            });
        }
    } catch (e) {
        // TODO
        console.log(e)
    }
}

export default function* saga() {
    yield takeLatest(GET_PHOTOS, fetchPhotos)
}

