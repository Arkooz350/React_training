import IconAcc from "@/Composant/ComposantPageAcceuil/IconAcc";
import { createContext, useContext, useState } from "react";
import PrivateRoute from "@/utils/PrivateRoute";
import { UseDataHooks } from "@/hooks/UseDataHooks";

export const DataStatusLogin = createContext({
  donnes: {},
});
export const DataContextProvider = (children) => {
  return (
    <>
      <DataStatusLogin.Provider value={{ donnes: children.children }}>
        <IconAcc></IconAcc>
      </DataStatusLogin.Provider>
    </>
  );
};
