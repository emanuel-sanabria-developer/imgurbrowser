import React from 'react';
import { Link } from 'react-router-dom';

import { createBem } from '../../../utils/createBem';
import { Image } from '../../../types';

import './List.scss';

interface ListProps {
  images: Image[];
}

export const bem = createBem('imgur-List');
const List: React.SFC<ListProps> = ({
  images
}: ListProps) => (
  <div className={bem()} data-testid="list">
    {images.length &&
      images.map(image => (
        <Link
          to={`/details/${image.id}`}
          className={bem('item')}
          key={image.id}>
          <div className={bem('imgWrapper')}>
            <div className={bem('imgContent')}>
              <img
                className={bem('img')}
                src={image.link}
                alt={image.title}
              />
            </div>
          </div>
          <div className={bem('details')}>
            <h2 className={bem('title')}>{image.title}</h2>
          </div>
        </Link>
      ))}
  </div>
);

export default List;
