"use client";
import ImageUploader from "@/components/RUForm/ImageUploader";
import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import { useCreateFlatMutation } from "@/redux/api/flatApi";
import { useGetMyProfileQuery } from "@/redux/api/profileApi";
import { flatValidations } from "@/validation/Flat/falt.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
function PostFlatPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [createFlat, { isError, isSuccess }] = useCreateFlatMutation();
  const { data, isLoading } = useGetMyProfileQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const defaultValues = {
    totalBedrooms: 0,
    squareFeet: 0,
    totalRooms: 0,
    utilitiesDescription: "",
    advanceAmount: 0,
    rent: 0,
    description: "",
    amenities: "",
  };
  const handleOnSubmit = async (values: FieldValues) => {
    values.totalBedrooms = Number(values.totalBedrooms);
    values.squareFeet = Number(values.squareFeet);
    values.totalRooms = Number(values.totalRooms);
    values.rent = Number(values.rent);
    values.advanceAmount = Number(values.advanceAmount);
    values.userId = data?.user?.id;

    const payload = {
      ...values,
      flatPhoto: imageUrls,
    };
    const res = await createFlat(payload).unwrap();

    try {
      if (res?.id) {
        toast.success("Your flat is created successfully");
      }
    } catch (error: any) {
      console.error("Error submitting data:", error.message);
    }
  };
  return (
    <section>
      <div>
        <h1 className=" text-3xl font-semibold font-poppins mt-3">
          Post your flat
        </h1>
      </div>
      <RUForm
        data-aos="fade-down"
        resolver={zodResolver(flatValidations.createFlatValidation)}
        defaultValues={defaultValues}
        onSubmit={handleOnSubmit}
      >
        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput
              name="totalBedrooms"
              label="Total Bedrooms"
              type="number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput
              name="squareFeet"
              type="number"
              label="Square Feet"
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <RUInput
              name="totalRooms"
              type="number"
              label="Total Rooms"
              fullWidth={true}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <RUInput
              name="rent"
              label="Rent Price"
              type="number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput
              name="utilitiesDescription"
              label="Utilities Description"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput
              name="advanceAmount"
              label="Advance Amount"
              type="number"
              fullWidth={true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="location" label="Location" fullWidth={true} />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
            <RUSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
             
            />
          </Grid> */}
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="description" label="Description" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="amenities" label="Amenities" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ImageUploader setImageUrls={setImageUrls} />
          </Grid>
        </Grid>

        <button
          className="px-3 py-2 text-white text-sm rounded-md bg-orange-600 font-Kanit"
          type="submit"
        >
          Submit
        </button>
      </RUForm>
    </section>
  );
}

export default PostFlatPage;
