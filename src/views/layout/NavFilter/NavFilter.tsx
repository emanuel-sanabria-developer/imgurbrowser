import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  createBem,
  combineClassNames
} from '../../../utils/createBem';

import { fetchImages } from '../../../dux/actions/index';

import Select from '../../../components/Select/Select';
import {
  ImagesSorting,
  ImagesTimeWindow,
  ImagesSection
} from '../../../types';

import './NavFilter.scss';

export interface NavFilterProps {
  className?: string;
}

export const bem = createBem('imgur-NavFilter');
export const NavFilter = ({
  className
}: NavFilterProps) => {
  const dispatch = useDispatch();
  const [showViral, setShowViral] = useState(true);
  const [sort, setSort] = useState<ImagesSorting>('viral');
  const [section, setSection] = useState<ImagesSection>(
    'hot'
  );
  const [timeWindow, setTimeWindow] = useState<
    ImagesTimeWindow
  >('day');

  useEffect(() => {
    dispatch(
      fetchImages({
        sort,
        section,
        showViral,
        window: timeWindow,
        page: 1
      })
    );
  }, [sort, section, showViral, timeWindow, dispatch]);

  return (
    <div
      className={combineClassNames(bem(), className)}
      data-testid="navFilter">
      <Select<ImagesSorting>
        className={bem('select')}
        id="imgur-filter-Sort"
        dataTestId="sort"
        label="Sort by"
        value={sort}
        options={[
          { label: 'Viral', value: 'viral' },
          { label: 'Top', value: 'top' },
          { label: 'Time', value: 'time' }
        ]}
        onChange={setSort}
      />
      <Select<ImagesTimeWindow>
        className={bem('select')}
        id="imgur-filter-window"
        dataTestId="window"
        label="Published in"
        value={timeWindow}
        options={[
          { label: 'Day', value: 'day' },
          { label: 'Week', value: 'week' },
          { label: 'Month', value: 'month' },
          { label: 'Year', value: 'year' },
          { label: 'All', value: 'all' }
        ]}
        onChange={setTimeWindow}
      />
      <Select<ImagesSection>
        id="imgur-filter-Section"
        dataTestId="section"
        className={bem('select')}
        label="Section"
        value={section}
        options={[
          { label: 'Hot', value: 'hot' },
          { label: 'Top', value: 'top' },
          { label: 'User', value: 'user' }
        ]}
        onChange={setSection}
      />
      <div className={bem('checkbox')}>
        <label>
          <input
            id="imgur-viral-checkbox"
            type="checkbox"
            checked={showViral}
            onChange={(e: any) =>
              setShowViral(e.target.checked)
            }
          />
          Include viral
        </label>
      </div>
    </div>
  );
};
export default NavFilter;
