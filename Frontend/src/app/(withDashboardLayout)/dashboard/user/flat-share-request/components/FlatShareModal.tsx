import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import RUModal from "@/components/shared/Modal/RUModal";
import { useCreateFlatRequestMutation } from "@/redux/api/bookingApi";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import { Grid } from "@mui/material";
import { toast } from "sonner";
type TProps = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  flatId: string;
};
const FlatShareModal = ({ isModalOpen, setModalOpen, flatId }: TProps) => {
  const { data, isLoading } = useGetMyProfileQuery({});
  const [createFlatRequest] = useCreateFlatRequestMutation();
  if (isLoading) {
    <div>Loading...</div>;
  }
  const defaultValues = {
    name: data?.name,
    email: data?.user?.email,
    username: data?.username,
    contactNumber: data?.contactNumber,
    address: data?.address,
  };
  const payload = {
    flatId,
    userId: data?.user?.id,
  };

  const handleOnRequest = async () => {
    try {
      const res = await createFlatRequest(payload).unwrap();
      if (res?.id) {
        toast.success("Your flat request is successfully sent!!!");
        setModalOpen(false);
      } else {
        toast.error("This flat is not available right now!!!");
        setModalOpen(false);
      }
    } catch (e) {
      toast.error("Failed to create flat request");
    }
  };
  return (
    <RUModal
      open={isModalOpen}
      setOpen={setModalOpen}
      title="Request your favorite flat"
    >
      {!isLoading ? (
        <RUForm defaultValues={defaultValues} onSubmit={handleOnRequest}>
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12} sm={12} md={6}>
              <RUInput
                type="text"
                name="name"
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                label="Full Name"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <RUInput
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                type="email"
                name="email"
                label="E-mail"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <RUInput
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                type="text"
                name="username"
                label="User Name"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <RUInput
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                type="text"
                name="contactNumber"
                label="Contact Number"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <RUInput
                sx={{ fontFamily: "Kanit", marginTop: 1 }}
                type="text"
                name="address"
                label="Address"
                fullWidth={true}
              />
            </Grid>
          </Grid>{" "}
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="remember"
              required
              className="h-4 w-4 rounded-full border-gray-300 text-yellow-600 focus:ring-yellow-500 focus:outline-none"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700 font-poppins"
            >
              Agree with terms and conditions
            </label>
          </div>
          <button
            className="px-8 font-Kanit font-medium mt-3 py-2 text-white text-sm rounded-md bg-orange-600"
            type="submit"
          >
            Submit
          </button>
        </RUForm>
      ) : (
        <div>Loading...</div>
      )}
    </RUModal>
  );
};

export default FlatShareModal;
