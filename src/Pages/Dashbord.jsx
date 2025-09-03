import { useMemo } from "react";
import LoginComposant from "./Login";
import DisconnectBtn from "@/Composant/ComposantDashbord/DisconnectBtn";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

function Dashbord() {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Button</Button>
      </div>
      <DisconnectBtn></DisconnectBtn>
    </>
  );
}

export default Dashbord;
