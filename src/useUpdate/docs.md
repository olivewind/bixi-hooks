# `useUpdate`

强制重新渲染

## Usage

```jsx
import {useUpdate} from '@bixi/hooks';

const Demo = () => {
  const update = useUpdate();
  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </>
  );
};
```
