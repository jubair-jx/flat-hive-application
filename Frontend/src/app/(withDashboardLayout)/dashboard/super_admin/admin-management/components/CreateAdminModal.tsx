import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import RUModal from "@/components/shared/Modal/RUModal";
import { useCreateAdminMutation } from "@/redux/api/usersApi";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  ModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateAdminModal({ ModalOpen, setModalOpen }: TProps) {
  const router = useRouter();

  const [createAdmin] = useCreateAdminMutation();
  const handleFormSubmit = async (values: FieldValues) => {
    const res = await createAdmin(values).unwrap();

    try {
      if (res?.id) {
        toast.success("Boss!!! Admin is created Successfully..");
        setModalOpen(false);
      } else {
        toast.error("Opss Boss!!! Admin is not created");
      }
    } catch (err: any) {
      console.log(err);
      toast.error("User not created");
    }
  };
  return (
    <RUModal
      open={ModalOpen}
      setOpen={setModalOpen}
      title="Boss!!! Create a Admin"
      subtitle="Enter a fullname, email or username and password to create."
    >
      <RUForm
        defaultValues={{
          password: "",
          admin: {
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
              name="admin.name"
              sx={{ fontFamily: "Kanit", marginTop: 1 }}
              label="Full Name"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <RUInput
              type="name"
              name="admin.username"
              sx={{ fontFamily: "Kanit", marginTop: 1 }}
              label="Username"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <RUInput
              type="email"
              name="admin.email"
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
        <button
          className="px-8 font-Kanit font-medium mt-3 py-2 text-white text-sm rounded-md bg-orange-600"
          type="submit"
        >
          Create Admin
        </button>
      </RUForm>
    </RUModal>
  );
}

export default CreateAdminModal;
