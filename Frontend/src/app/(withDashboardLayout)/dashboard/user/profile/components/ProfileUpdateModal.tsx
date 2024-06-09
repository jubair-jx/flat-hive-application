import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import RUFullScreenModal from "@/components/shared/Modal/RUFullScreenModal";
import { useUpdateProfileMutation } from "@/redux/api/profileApi";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  data: any;
  refetch: any;
};
function ProfileUpdateModal({ open, setOpen, id, data, refetch }: TProps) {
  const userData = {
    name: data?.name,
    username: data?.username,
    contactNumber: data?.contactNumber,
    address: data?.address,
    profession: data?.profession,
    bio: data?.bio,
  };

  const [updateProfile] = useUpdateProfileMutation();

  const submitHandler = async (values: FieldValues) => {
    try {
      const res = await updateProfile(values).unwrap();
      console.log(res);
      await refetch();
      if (res?.id) {
        toast.success("Profile has been updated successfully!!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <RUFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Update Your Personal info..."
    >
      <RUForm
        onSubmit={submitHandler}
        defaultValues={userData}
        // resolver={zodResolver(validationSchema)}
      >
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="username" type="text" label="User Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="contactNumber" label="Contract Number" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="address" label="Address" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="profession" label="Profession" fullWidth />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <RUInput name="bio" label="Bio or About" fullWidth />
          </Grid>
        </Grid>

        <Button variant="contained" type="submit">
          Update
        </Button>
      </RUForm>
    </RUFullScreenModal>
  );
}

export default ProfileUpdateModal;
