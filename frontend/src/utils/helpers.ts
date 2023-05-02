export const debounce = (func: (...args: any[]) => any, wait: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;

  return (...args: any[]): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, wait);
  };
};
