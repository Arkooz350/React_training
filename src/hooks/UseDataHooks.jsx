import { useContext, useState } from "react";
import { DataStatusLogin } from "@/utils/ContextLogin";

export const UseDataHooks = (intial = {}) => {
  const [car, setcar] = useState(intial);
  const [city, setcity] = useState(intial);
  const changer = () => setfirt((value) => value);
  return { car, city, changer };
};
