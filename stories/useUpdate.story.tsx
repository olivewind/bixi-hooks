import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
import * as React from 'react';
import { useUpdate } from '../src';


const Demo = () => {
  const update = useUpdate();
  return (
    <div style={{ padding: '20px' }}>
      <div>Time: {Date.now()}</div>
      <Button type="primary" onClick={() => update()}>刷新</Button>
      <br />
    </div>
  );
};

storiesOf('生命周期', module)
  .add('useUpdate', Demo, {
    notes: require('../src/useUpdate/docs.md').default
  })
