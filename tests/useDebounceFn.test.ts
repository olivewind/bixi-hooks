// has deps
import { act, renderHook } from '@testing-library/react-hooks';
import useDebounceFn from '../src/useDebounceFn';

describe('useDebounceFn', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(useDebounceFn).toBeDefined();
  });

  it('run and cancel should work', () => {
    let count = 0;
    const debounceFn = (gap: number) => {
      count = count + gap;
    };
    const hook = renderHook(() => useDebounceFn(debounceFn, 500));
    act(() => {
      hook.result.current.run(2);
      hook.result.current.run(2);
      hook.result.current.run(2);
      hook.result.current.run(2);
      jest.runAllTimers();
      expect(count).toBe(2);
      hook.result.current.run(4);
      jest.runAllTimers();
      expect(count).toBe(6);
      hook.result.current.run(4);
      hook.result.current.cancel();
      jest.runAllTimers();
      expect(count).toBe(6);
    });
  });
});



