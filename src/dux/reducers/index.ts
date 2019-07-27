import { combineReducers } from 'redux';

import { Image } from '../../types';
import { AppAction, AppState } from '../types';

import {
  FETCH_IMAGES_REQUESTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGE_REQUESTED,
  FETCH_IMAGE_SUCCESS,
  FETCH_ERROR
} from '../constants';

const loadingReducer = (
  state = false,
  action: AppAction<undefined>
) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUESTED:
    case FETCH_IMAGE_REQUESTED:
      return true;
    case FETCH_IMAGES_SUCCESS:
    case FETCH_IMAGE_SUCCESS:
    case FETCH_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (
  state: boolean = false,
  action: AppAction<undefined>
) => {
  switch (action.type) {
    case FETCH_ERROR:
      return true;
    default:
      return false;
  }
};

const imagesReducer = (
  state: Image[] = [],
  action: AppAction<Image[]>
) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUESTED:
    case FETCH_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const imageReducer = (
  state: Image = {},
  action: AppAction<Image>
) => {
  switch (action.type) {
    case FETCH_IMAGE_REQUESTED:
      return state;
    case FETCH_IMAGE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers<AppState>({
  error: errorReducer,
  loading: loadingReducer,
  images: imagesReducer,
  image: imageReducer
});

export default rootReducer;
