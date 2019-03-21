import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from './reducers/reducers'
import {fetchPhotos, mySaga} from './sagas/sagas'
import { GET_PHOTOS, RECEIVE_PHOTOS, GET_PREV_PHOTOS, receivePhotos} from './actions/actions';
import { fetchData } from './services/fetchService';
import {call, put, takeLatest} from "redux-saga/effects";
import sagaHelper from 'redux-saga-testing'
const api = jest.fn();

const photos = [
  {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
  albumId: 1,
  id: 2,
  title: "reprehenderit est deserunt velit ipsam",
  url: "https://via.placeholder.com/600/771796",
  thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
  albumId: 1,
  id: 3,
  title: "officia porro iure quia iusto qui ipsa ut modi",
  url: "https://via.placeholder.com/600/24f355",
  thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
  albumId: 1,
  id: 4,
  title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  url: "https://via.placeholder.com/600/d32776",
  thumbnailUrl: "https://via.placeholder.com/150/d32776"
  },
  {
  albumId: 1,
  id: 5,
  title: "natus nisi omnis corporis facere molestiae rerum in",
  url: "https://via.placeholder.com/600/f66b97",
  thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  },
  {
  albumId: 1,
  id: 6,
  title: "accusamus ea aliquid et amet sequi nemo",
  url: "https://via.placeholder.com/600/56a8c2",
  thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
  },
  {
  albumId: 1,
  id: 7,
  title: "officia delectus consequatur vero aut veniam explicabo molestias",
  url: "https://via.placeholder.com/600/b0f7cc",
  thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
  },
  {
  albumId: 1,
  id: 8,
  title: "aut porro officiis laborum odit ea laudantium corporis",
  url: "https://via.placeholder.com/600/54176f",
  thumbnailUrl: "https://via.placeholder.com/150/54176f"
  },
  {
  albumId: 1,
  id: 9,
  title: "qui eius qui autem sed",
  url: "https://via.placeholder.com/600/51aa97",
  thumbnailUrl: "https://via.placeholder.com/150/51aa97"
  },
  {
  albumId: 1,
  id: 10,
  title: "beatae et provident et ut vel",
  url: "https://via.placeholder.com/600/810b14",
  thumbnailUrl: "https://via.placeholder.com/150/810b14"
  }
  ]

describe('fetch reducer', () => {
  it('has a default state', () => {
    expect(reducers(undefined, {}))
    .toEqual({
      page: 0, 
      photos: [] 
    })
  })
  
  it('handles GET_CARDS request', () => {
    expect(reducers(undefined, {
      type:   GET_PHOTOS,
    })).toEqual({
      loading: true,
      page: 1,
      photos: []
    })
  })

  it('handles GET_PREV_PHOTOS request', () => {
    expect(reducers(undefined, {
      type:   GET_PREV_PHOTOS,
    })).toEqual({
      loading: true,
      page: -1,
      photos: []
    })
  })

  it('handles RECEIVE_PHOTOS request', () => {
    expect(reducers([], {
      type:   RECEIVE_PHOTOS,
      photos: photos
    })).toEqual({
      loading: false,
      photos: photos
    })
  })
})

describe('test sagas', () => {
  const it = sagaHelper(fetchPhotos(1));
  console.log(it)
  
  it('should have called the mock API first', result => {
    let expected = call(api)
    expect(result.type).toEqual(expected.type);
    expect(api).not.toHaveBeenCalled();
  })

  it('and then trigger an action with the transformed data we got from the API', result => {
    expect(result).toEqual(put(receivePhotos()));
  });

  it('and then nothing', result => {
    expect(result).toBeUndefined();
});

})
