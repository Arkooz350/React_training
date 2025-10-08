import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./button";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import Register from "@/Pages/Register";
import { useCallback, useState } from "react";

function ButtonCustumRegister({ onConnection }) {
  const [load, setload] = useState(false);
  const [trueload, settrueload] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    // console.log(event);
    onConnection(data);
  };
  return (
    <form
      typeof="submit"
      onSubmit={handleSubmit(onSubmit)}
      className="grid m-auto p-auto text-center bg"
    >
      <div className="grid w-full max-w-sm items-center gap-3 rounded-2xl">
        <Label htmlFor="username">Pseudo</Label>
        <Input
          {...register("username", {
            required: "Pseudo is required ! ",
          })}
          type="text"
          id="username"
          placeholder="Pseudo"
        />
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="nom">Nom</Label>
          <Input
            {...register("nom", {
              required: "Nom is required ! ",
            })}
            type="text"
            id="nom"
            placeholder="Nom"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", {
              required: "Email is required ! ",
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: "Email invalid",
              },
            })}
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="pass" required>
            Password
          </Label>
          <Input
            required
            {...register("pass", {
              required: "password required !",
              pattern: {
                value: " 12 ",
                message: " password invalid please use least a 12 character ! ",
              },
              onBlur: () => settrueload(false),
            })}
            type="password"
            id="pass"
            placeholder="Password"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="passChecker">Comfirm password</Label>
          <Input
            type="password"
            id="passChecker"
            placeholder="Comfirm password"
            {...register("passChecker", {
              required: "Confirm a password ! ",
              pattern: {
                value: " 12 ",
                message: " password invalid please use least a 12 character ! ",
              },
            })}
          />

          {load ? (
            <Button size="sm" disabled>
              <Loader2Icon className="animate-spin hover: scale-200 gap-5" />{" "}
              Please Wait
            </Button>
          ) : (
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
              <Button disabled={trueload} className="bg-gray-500">
                {" "}
                Signup
              </Button>
              {}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
export default ButtonCustumRegister;
