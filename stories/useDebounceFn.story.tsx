import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useDebounceFn } from '../src';
import { storiesOf } from '@storybook/react';

const Demo1 = () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(() => {
    setValue(value + 1);
  }, 500);

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <Button onClick={run}>Click fast!</Button>
    </div>
  );
};

const Demo2 = () => {
  const [value, setValue] = useState<string>();
  const [debouncedValue, setDebouncedValue] = useState<string>();

  const { cancel } = useDebounceFn(
    () => {
      setDebouncedValue(value);
    },
    [value],
    1000,
  );

  return (
    <div>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ margin: '16px 0' }}>
        <Button onClick={cancel}>Cancel Debounce</Button>
      </p>
      <p>DebouncedValue: {debouncedValue}</p>
    </div>
  );
};

storiesOf('SideEffect', module)
  .add('useEventListener', Demo1, {
    notes: require('../src/useDebounceFn/docs.md').default
  });

storiesOf('SideEffect', module)
  .add('useEventListener', Demo2, {
    notes: require('../src/useDebounceFn/docs.md').default
  })

