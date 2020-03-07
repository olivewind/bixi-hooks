# `useBoolean`

用于切换 Boolean 值.

## 使用

```tsx
import { useBoolean } from '@bixi/hooks';

const Demo = () => {
  const [state, onToggle] = useBoolean(true);
  return (
    <>
      <div>{state ? 'True' : 'False'}</div>
      <Button type="primary" onClick={() => onToggle()}>切换</Button>
      <Button type="primary" onClick={() => onToggle(true)}>设置为 True</Button>
      <Button type="primary" onClick={() => onToggle(false)}>设置为 False</Button>
    </>
  );
};
```
