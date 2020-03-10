# `useUnmount`

在组件被销毁时执行.

## 使用

```tsx
import { useUnmount } from '@bixi/hooks';

function Test() {
  useUnmount(() => {
   console.log('unmount');
  });
  return (<div><h2>I Will Unmount</h2></div>)
}

const Demo = () => {
  const [visible, toggle] = useBoolean(true);
  return (
    <div>
      <Button type="primary" onClick={() => toggle()}>切换</Button>
      <br />
      {visible ? <Test /> : null}
    </div>
  );
};
```
