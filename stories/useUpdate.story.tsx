import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
import * as React from 'react';
import { useUpdate } from '../src';


const Demo = () => {
  const update = useUpdate();
  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </>
  );
};

storiesOf('生命周期', module)
  .add('useUpdate', Demo, {
    notes: require('../src/useUpdate/docs.md').default
  })
