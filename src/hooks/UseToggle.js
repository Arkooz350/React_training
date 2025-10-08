import { useState } from "react";

function UseToggle(initial = false) {
  const [state, setstate] = useState(initial);
  const toggle = () => setstate((e) => !e);
  return {
    state,
    toggle,
  };
}
export default UseToggle;
