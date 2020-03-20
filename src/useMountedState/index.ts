import { useCallback, useEffect, useRef } from 'react';

export default function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const getStatus = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  return getStatus;
}
