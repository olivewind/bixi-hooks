import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useBoolean } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [on, toggle] = useBoolean(true);

  return (
    <div>
      <div>{on ? 'True' : 'False'}</div>
      <button onClick={() => toggle()}>切换</button>
      <button onClick={() => toggle(true)}>True</button>
      <button onClick={() => toggle(false)}>False</button>
    </div>
  );
};

storiesOf('状态|useBoolean', module)
  .add('Docs', () => <ShowDocs md={require('../src/useBoolean/docs.md')} />)
  .add('Demo', () => <Demo />);
