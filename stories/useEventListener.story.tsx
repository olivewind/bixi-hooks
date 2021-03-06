import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { useEventListener } from '../src';

const Demo = () => {
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    setValue(value + 1);
  };

  const ref = useEventListener<HTMLButtonElement>('click', clickHandler);

  return <button style={{ margin: '30px' }} ref={ref}>You click {value} times</button>;
};
storiesOf('Dom', module)
  .add('useEventListener', Demo, {
    notes: require('../src/useEventListener/docs.md').default
  })
