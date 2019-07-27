import React from 'react';
import {
  createBem,
  combineClassNames
} from '../../utils/createBem';

import './Select.scss';

export interface SelectOption<T extends string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface SelectProps<T extends string> {
  id: string;
  value: T;
  label: React.ReactNode;
  options: SelectOption<T>[];
  className?: string;
  dataTestId?: string;
  onChange?(value: T): void;
}

const bem = createBem('imgur-Select');
const Select = <T extends string>({
  className,
  options,
  onChange,
  value,
  id,
  label,
  dataTestId
}: SelectProps<T>) => (
  <div className={combineClassNames(bem(), className)}>
    <label htmlFor={id} className={bem('label')}>
      {label}
    </label>
    <select
      id={id}
      value={value}
      className={bem('input')}
      data-testid={dataTestId}
      onChange={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) => {
        if (onChange) {
          onChange(e.target.value as T);
        }
      }}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
