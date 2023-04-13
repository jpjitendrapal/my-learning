const getGlobalCounter = (intialValue) => {
  let count = intialValue || 0;
  return () => {
    return count++;
  };
};

const debounce = (fn, delay) => {
  let timerId = null;
  return function (...arg) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, arg);
    }, delay);
  };
};
const throttle = (fn, limit) => {
  let timeoutId, lastRun;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRun) {
      fn.apply(context, args);
      lastRun = Date.now();
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        if (limit < Date.now() - lastRun) {
          fn.apply(context, args);
          lastRun = Date.now();
        }
      }, limit);
    }
  };
};

export { getGlobalCounter, debounce, throttle };
