import {
  put,
  takeLatest,
  all,
  call
} from 'redux-saga/effects';

import { AppAction } from '../types';
import {
  ImagesRequestParams,
  Image,
  ImageId
} from '../../types';

import {
  FETCH_IMAGES_REQUESTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGE_REQUESTED,
  FETCH_IMAGE_SUCCESS,
  FETCH_ERROR
} from '../constants';

import { getAllImages, getImage } from '../../api';

function* fetchImages(
  action: AppAction<ImagesRequestParams>
) {
  try {
    const { data } = yield call(
      getAllImages,
      action.payload
    );

    yield put({
      type: FETCH_IMAGES_SUCCESS,
      payload: data.filter(
        (image: Image) => !image.is_album
      )
    });
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* fetchImage(action: AppAction<ImageId>) {
  try {
    const { data } = yield call(getImage, action.payload);

    yield put({
      type: FETCH_IMAGE_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({ type: FETCH_ERROR, error });
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_IMAGES_REQUESTED, fetchImages);
  yield takeLatest(FETCH_IMAGE_REQUESTED, fetchImage);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
