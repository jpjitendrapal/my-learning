import { forceUpdate } from "react-dom";

function StateManager() {
  const states = [];
  let counter = -1;
  return function useState(initialValue) {
    let val = initialValue;
    const setValue = (newVal) => {
      val = newVal;
      forceUpdate();
    };
    counter++;
    states[counter] = [val, setValue];
    return states[counter];
  };
}
const useStateCustom = StateManager();
export { useStateCustom };
