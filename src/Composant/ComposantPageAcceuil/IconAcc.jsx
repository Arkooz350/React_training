import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { useContext, useEffect, useState } from "react";
import { DataStatusLogin } from "@/utils/ContextLogin";

function IconAcc() {
  const { donnes } = useContext(DataStatusLogin);

  return (
    <>
      {donnes.status === 200 && (
        <div>
          <h1 className=" text-3xl">Bonjour </h1>
        </div>
      )}
    </>
  );
}

export default IconAcc;
