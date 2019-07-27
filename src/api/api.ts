import axios, { AxiosResponse } from 'axios';
import queryString from 'query-string';

import { ImagesRequestParams } from '../types';
import { envConfig } from './config';

const axiosInstance = axios.create(envConfig);

export const getAllImages = async (
  params: ImagesRequestParams = {}
): Promise<AxiosResponse<any>> => {
  const queryParams = queryString.stringify(params);

  return await axiosInstance({
    url: `/images?${queryParams}`
  });
};

export const getImage = async (
  id: string
): Promise<AxiosResponse<any>> =>
  await axiosInstance({
    url: `/images/${id}`
  });
