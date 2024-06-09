"use client";

import { useGetMyFlatRequestQuery } from "@/redux/api/bookingApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import { Booking } from "@/types";
import { Box, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Define interfaces

const MyFlatShareRequest = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const { isLoading, data } = useGetMyFlatRequestQuery({});

  // Ensure data is typed correctly
  const bookings: Booking[] = data || [];

  // Flatten the data structure
  const flattenedData = bookings.map((item) => ({
    id: item.id,
    location: item.flat.location,
    totalBedrooms: item.flat.totalBedrooms,
    totalRooms: item.flat.totalRooms,
    rent: item.flat.rent,
    status: item.status,
  }));

  const columns: GridColDef[] = [
    { field: "location", headerName: "Location", flex: 1, hideable: true },
    { field: "totalBedrooms", headerName: "Bedrooms", flex: 1 },
    { field: "totalRooms", headerName: "Rooms", flex: 1 },
    { field: "rent", headerName: "Rent Price", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <section>
      <CommonDashboardHeaderTitle
        mainTitle="My all requests flat"
        secondaryTitle="This is my all of request flat ever"
      />
      <Box data-aos="fade-up" sx={{ marginTop: 4 }}>
        <h1 className="text-lg font-semibold mt-4 mb-4">
          Display all my requests flat
        </h1>
        {!isLoading ? (
          <DataGrid
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
                fontWeight: "800",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                fontFamily: "poppins",
                alignItems: "center",
              },
              "& .MuiDataGrid-cell": {
                textAlign: "center",
                display: "flex",
                fontFamily: "poppins",
                alignItems: "center",
              },
            }}
            rows={flattenedData}
            columns={columns}
          />
        ) : (
          <Box sx={{ width: "100%" }}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Box>
        )}
      </Box>
    </section>
  );
};

export default MyFlatShareRequest;
