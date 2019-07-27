import { Image } from '../types';
import {
  FETCH_IMAGES_REQUESTED,
  FETCH_IMAGES_SUCCESS,
  FETCH_ERROR,
  FETCH_IMAGE_REQUESTED,
  FETCH_IMAGE_SUCCESS
} from './constants';

type AppActionTypes =
  | typeof FETCH_IMAGES_REQUESTED
  | typeof FETCH_IMAGES_SUCCESS
  | typeof FETCH_ERROR
  | typeof FETCH_IMAGE_REQUESTED
  | typeof FETCH_IMAGE_SUCCESS;

export interface AppState {
  readonly error: boolean;
  readonly loading: boolean;
  readonly images: Image[];
  readonly image?: Image;
}

export interface AppAction<P> {
  type: AppActionTypes;
  payload: P;
}
