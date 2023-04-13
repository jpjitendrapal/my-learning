function UseState(defaultValue, cb) {
  let val = defaultValue || undefined;
  const updateVal = (newVal) => {
    val = newVal;
  };
  return [val, updateVal];
}

const [a, fn] = UseState(() => {});
