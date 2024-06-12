import { userLogin } from "@/services/action/loginUser";
import { getUserInfo, storeUserInfo } from "@/services/auth-services";
import { Grid } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import RUForm from "../RUForm/RUForm";
import RUInput from "../RUForm/RUInput";
import RUModal from "../shared/Modal/RUModal";
import RegisterModal from "./RegisterModal";
type TProps = {
  open: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function LoginModal({ open, setModalOpen }: TProps) {
  const userInfo = getUserInfo();
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const router = useRouter();

  const handleRegisterModalOpen = () => {
    setRegisterModalOpen(true);
    setModalOpen(false);
  };
  const handleLogin = async (values: FieldValues) => {
    const identifier = values.indentifier;
    const isEmail = identifier.includes("@");

    const loginPayload = {
      password: values?.password,
      ...(isEmail ? { email: identifier } : { username: identifier }),
    };
    const res = await userLogin(loginPayload);
    try {
      if (res?.data?.accessToken) {
        setModalOpen(false);
        await userLogin(values);
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        // router.push("/");
        redirect("/");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      // toast.error(res?.message);
    }
  };

  return (
    <>
      <RUModal
        open={open}
        setOpen={setModalOpen}
        title="Login in your account"
        subtitle="Enter your email or username and password to Sign In."
      >
        <RUForm onSubmit={handleLogin}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sm={12} md={12}>
              <RUInput
                type="text"
                name="indentifier"
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                label="Email or Username"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <RUInput
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                type="password"
                name="password"
                label="Password"
                fullWidth={true}
              />
            </Grid>
          </Grid>{" "}
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500 focus:outline-none"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700 font-poppins"
            >
              Remember me
            </label>
          </div>
          <button
            className="px-8 font-Kanit font-medium mt-3 py-2 text-white text-sm rounded-md bg-orange-600"
            type="submit"
          >
            Sign in
          </button>
          <p className=" text-center text-xs font-poppins">
            {"Don't"} have an account?{"  "}
            <span
              onClick={handleRegisterModalOpen}
              className=" text-orange-500 text-sm font-medium cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </RUForm>
      </RUModal>
      <RegisterModal
        registerModalOpen={registerModalOpen}
        setModalOpen={setModalOpen}
        setRegisterModalOpen={setRegisterModalOpen}
      />
    </>
  );
}

export default LoginModal;
