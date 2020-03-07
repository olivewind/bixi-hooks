import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import * as React from 'react';
import { useBoolean } from '../src';

const Demo = () => {
  const [on, toggle] = useBoolean(true);
  action('组件重新渲染')();
  return (
    <div style={{ padding: '20px' }}>
      <div>{on ? 'True' : 'False'}</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>切换</Button>
      <br />
      <br />
      <Button type="primary" onClick={() => toggle(true)}>设置为 True</Button>
      <br />
      <br />
      <Button type="primary" onClick={() => toggle(false)}>设置为 False</Button>
    </div>
  );
};

storiesOf('状态', module)
  .add('useBoolean', Demo, {
    notes: require('../src/useBoolean/docs.md').default
  })
