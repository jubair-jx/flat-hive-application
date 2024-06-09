"use client";
import { useGetMyFlatQuery } from "@/redux/api/flatApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import InfoIcon from "@mui/icons-material/Info";
import { Box, IconButton, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
const other = { showCellVerticalBorder: true, showColumnVerticalBorder: true };
function MyFlatPost() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const { isLoading, data } = useGetMyFlatQuery({});

  const columns: GridColDef[] = [
    { field: "squareFeet", headerName: "Square Feet", flex: 1, hideable: true },
    { field: "totalBedrooms", headerName: "Bedrooms", flex: 1 },
    { field: "totalRooms", headerName: "Rooms", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "rent", headerName: "Rent Price", flex: 1 },

    { field: "advanceAmount", headerName: "Advance Amount", flex: 1 },

    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ textAlign: "center" }}>
            <Link href={`/flatDetails/${row?.id}`}>
              <IconButton title="See Flat Details">
                <InfoIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];
  return (
    <section>
      <CommonDashboardHeaderTitle
        mainTitle="My Flat Posts"
        secondaryTitle="This is your all of flat posts ever"
      />
      <Box data-aos="fade-down" sx={{ marginTop: 4 }}>
        <h1 className="text-lg font-semibold mt-4 mb-4">
          Display all my posts
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
            rows={data?.flats}
            {...other}
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
}

export default MyFlatPost;
