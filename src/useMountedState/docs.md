# `useMountedState`

检查组件是否挂载，这在处理异步场景时将很有用

## Usage

```jsx
import * as React from 'react';
import {useMountedState} from 'react-use';

const Demo = () => {
  const isMounted = useMountedState();

  React.useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        // ...
      } else {
        // ...
      }
    }, 1000);
  });
};
```
