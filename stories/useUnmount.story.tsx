import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import * as React from 'react';
import { useUnmount, useBoolean } from '../src';

function Child() {
  useUnmount(() => {
    action('unmont')('unmount');
  });
  return (<div style={{ border: '1px solid #000', width: '200px', margin: '20px 0px' }}><h2>I Will Unmount</h2></div>)
}

const Demo = () => {
  const [visible, toggle] = useBoolean(true);
  return (
    <div style={{ padding: '20px' }}>
      <Button type="primary" onClick={() => toggle()}>切换</Button>
      <br />
      {visible ? <Child /> : null}
    </div>
  );
};

storiesOf('生命周期', module)
  .add('useUnmount', Demo, {
    notes: require('../src/useUnmount/docs.md').default
  })
