# `useBoolean`

用于切换 Boolean 值.

## 使用

```jsx
import { useBoolean } from '@bixi/hooks';

const Demo = () => {
  const [on, toggle] = useBoolean(true);
  return (
    <>
      <div>{on ? 'True' : 'False'}</div>
      <Button type="primary" onClick={() => toggle()}>切换</Button>
      <Button type="primary" onClick={() => toggle(true)}>设置为 True</Button>
      <Button type="primary" onClick={() => toggle(false)}>设置为 False</Button>
    </>
  );
};
```
