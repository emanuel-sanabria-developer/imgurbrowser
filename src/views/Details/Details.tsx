import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createBem } from '../../utils/createBem';

import { fetchImage } from '../../dux/actions/index';
import { AppState } from '../../dux/types';

import NotFound from '../NotFound';
import Spinner from '../../components/Spinner';

import './Details.scss';

export interface DetailsProps {
  imageId?: string;
}

const bem = createBem('imgur-Details');
const Details = ({ imageId }: DetailsProps) => {
  const dispatch = useDispatch();
  const { image, error, loading } = useSelector(
    ({ image, error, loading }: AppState) => ({
      image,
      error,
      loading
    })
  );

  useEffect(() => {
    if (imageId) {
      dispatch(fetchImage(imageId));
    }
  }, [imageId, dispatch]);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={bem()}>
      {image ? (
        <div>
          <h1>{image.title}</h1>
          <div className={bem('detailsContainer')}>
            <p className={bem('description')}>
              {image.description}
            </p>
            <span>{`⬆ Upvotes: ${image.ups} `}</span>
            <span>{`⬇ Downvotes: ${image.downs} `}</span>
            <span>{`🔥 Score: ${image.score}`}</span>
          </div>
          <img
            className={bem('image')}
            src={image.link}
            alt={image.title}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Details;
