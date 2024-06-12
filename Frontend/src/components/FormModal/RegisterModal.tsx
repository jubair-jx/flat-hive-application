import { useCreateUserMutation } from "@/redux/api/usersApi";
import { userLogin } from "@/services/action/loginUser";
import { storeUserInfo } from "@/services/auth-services";
import { Grid } from "@mui/material";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import RUForm from "../RUForm/RUForm";
import RUInput from "../RUForm/RUInput";
import RUModal from "../shared/Modal/RUModal";
type TProps = {
  registerModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function RegisterModal({
  registerModalOpen,
  setModalOpen,
  setRegisterModalOpen,
}: TProps) {
  const router = useRouter();

  const [createUser] = useCreateUserMutation();

  const handleOpenLoginModal = () => {
    setRegisterModalOpen(false);
    setModalOpen(true);
  };
  const handleFormSubmit = async (values: FieldValues) => {
    // const data = modifyPayload(values);
    // console.log(values);
    const res = await createUser(values).unwrap();
    try {
      if (res?.id) {
        toast.success("Your account is created successfully...");
        const result = await userLogin({
          password: values.password,
          email: values.user.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          setRegisterModalOpen(false);
          // router.push("/");
          redirect("/");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      // console.log(err);
    }
  };
  return (
    <RUModal
      open={registerModalOpen}
      setOpen={setRegisterModalOpen}
      title="Register in your account"
      subtitle="Enter your fullname, email or username and password to Sign up."
    >
      <RUForm
        defaultValues={{
          password: "",
          user: {
            name: "",
            email: "",
            username: "",
            bio: "",
            profession: "",
            contactNumber: "",
            address: "",
          },
        }}
        onSubmit={handleFormSubmit}
      >
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} sm={12} md={12}>
            <RUInput
              type="name"
              name="user.name"
              sx={{ fontFamily: "Kanit", marginTop: 1 }}
              label="Full Name"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <RUInput
              type="name"
              name="user.username"
              sx={{ fontFamily: "Kanit", marginTop: 1 }}
              label="Username"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <RUInput
              type="email"
              name="user.email"
              sx={{ fontFamily: "Kanit", marginTop: 1 }}
              label="Email"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <RUInput
              type="password"
              name="password"
              label="Password"
              sx={{ fontFamily: "Kanit", marginTop: 1 }}
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
          Sign up
        </button>
        <p className=" text-center text-xs font-poppins">
          {"Already"} have an account?{"  "}
          <span
            onClick={handleOpenLoginModal}
            className=" text-orange-500 text-sm font-medium cursor-pointer"
          >
            Sign in
          </span>
        </p>
      </RUForm>
    </RUModal>
  );
}

export default RegisterModal;
