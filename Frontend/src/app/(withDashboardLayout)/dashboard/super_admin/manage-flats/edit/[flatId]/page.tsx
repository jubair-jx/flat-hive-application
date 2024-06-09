"use client";
import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import {
  useGetFlatByIdQuery,
  useUpdateFlatByIdMutation,
} from "@/redux/api/flatApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";

import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  params: {
    flatId: string;
  };
};
function UpdateFlatPage({ params }: TProps) {
  const router = useRouter();
  const { flatId: id } = params;

  const { data, isLoading } = useGetFlatByIdQuery(id);

  const [updateFlatById] = useUpdateFlatByIdMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const defaultValues = {
    totalBedrooms: data?.totalBedrooms,
    squareFeet: data?.squareFeet,
    totalRooms: data?.totalRooms,
    utilitiesDescription: data?.utilitiesDescription,
    advanceAmount: data?.advanceAmount,
    rent: data?.rent,
    description: data?.description,
    location: data?.location,
    amenities: data?.amenities,
  };

  const handleOnSubmit = async (values: FieldValues) => {
    values.totalBedrooms = Number(values.totalBedrooms);
    values.squareFeet = Number(values.squareFeet);
    values.totalRooms = Number(values.totalRooms);
    values.rent = Number(values.rent);
    values.advanceAmount = Number(values.advanceAmount);
    values.id = id;
    const modifyObj = { id: values.id, body: values };

    try {
      const res = await updateFlatById(modifyObj).unwrap();

      if (res?.id) {
        toast.success("Flat is updated successfully");
        router.push("/dashboard/admin/manage-flats");
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <section>
      <CommonDashboardHeaderTitle
        mainTitle="Update your flat"
        secondaryTitle="Boss!!! you can update your flat"
      />
      <RUForm defaultValues={defaultValues} onSubmit={handleOnSubmit}>
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

          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="description" label="Description" fullWidth={true} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RUInput name="amenities" label="Amenities" fullWidth={true} />
          </Grid>
        </Grid>

        <button
          className="px-3 py-2 text-white text-sm rounded-md bg-violet-700 font-Kanit"
          type="submit"
        >
          Update
        </button>
      </RUForm>
    </section>
  );
}

export default UpdateFlatPage;
