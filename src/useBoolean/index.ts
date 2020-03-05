import { useCallback, useState } from 'react';

const useBoolean = (initialValue: boolean): [boolean, (val?: boolean) => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(
    (val?: boolean) => {
      if (typeof val === 'boolean') {
        setValue(val);
      } else {
        setValue(currentValue => !currentValue);
      }
    },
    [setValue]
  );

  return [value, toggle];
};

export default useBoolean;
