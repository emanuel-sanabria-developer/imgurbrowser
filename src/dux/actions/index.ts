import { ImagesRequestParams, ImageId } from '../../types';

import {
  FETCH_IMAGES_REQUESTED,
  FETCH_IMAGE_REQUESTED
} from '../constants';
import { AppAction } from '../types';

export const fetchImages = (
  payload: ImagesRequestParams = {}
): AppAction<ImagesRequestParams> => ({
  type: FETCH_IMAGES_REQUESTED,
  payload
});

export const fetchImage = (
  payload: ImageId
): AppAction<ImageId> => ({
  type: FETCH_IMAGE_REQUESTED,
  payload
});
