import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createBem } from '../../utils/createBem';
import { fetchImages } from '../../dux/actions/index';
import { AppState } from '../../dux/types';

import Placeholder from '../../components/Placeholder';
import List from '../layout/List';
import NavFilter from '../layout/NavFilter';

import './Home.scss';

export interface HomeProps {}

export const bem = createBem('imgur-Home');
const Home = () => {
  const { images, error, loading } = useSelector(
    ({ images, error, loading }: AppState) => ({
      images,
      error,
      loading
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!images) {
      dispatch(fetchImages());
    }
  }, [images, dispatch]);

  return (
    <div className={bem()}>
      <aside className={bem('sidebar')}>
        <NavFilter className={bem('navFilter')} />
      </aside>

      <main className={bem('results')}>
        {error ? <div>Error</div> : null}
        {loading ? (
          <Placeholder />
        ) : (
          <List images={images} />
        )}
      </main>
    </div>
  );
};

export default Home;
