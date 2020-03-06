import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
import * as React from 'react';
import { useBoolean } from '../src';
import Docs from './util/docs';

const Demo = () => {
  const [on, toggle] = useBoolean(true);

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

storiesOf('状态|useBoolean', module)
  .add('Docs', () => <Docs md={require('../src/useBoolean/docs.md')} />)
  .add('Demo', () => <Demo />);
