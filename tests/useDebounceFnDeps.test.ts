import { act, renderHook } from '@testing-library/react-hooks';
import useDebounceFn from '../src/useDebounceFn';

describe('useDebounceFn', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('deps should work', () => {
    let c = 0;
    let mountedState = 1;
    const hook = renderHook(() =>
      useDebounceFn(
        () => {
          c += 1;
        },
        [mountedState],
        500,
      ),
    );
    act(() => {
      expect(c).toEqual(0);
      mountedState = 2;
      hook.rerender();
      mountedState = 3;
      hook.rerender();
      jest.runAllTimers();
      expect(c).toEqual(1);
      mountedState = 4;
      hook.rerender();
      expect(c).toEqual(1);
      jest.runAllTimers();
      expect(c).toEqual(2);
    });
  });
});



