import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useMountedState } from '../src';


const Demo = () => {
  const isMounted = useMountedState();
  const [, updateState] = React.useState();

  requestAnimationFrame(updateState);

  return <div>This component is {isMounted() ? 'MOUNTED' : 'NOT MOUNTED'}</div>;
};


storiesOf('生命周期', module)
  .add('useMountedState', Demo, {
    notes: require('../src/useMountedState/docs.md').default
  })
