"use client";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import CommonDashboardHeaderTitle from "@/shared/CommonDashboardHeaderTitle/CommonDashboardHeaderTitle";
import InfoIcon from "@mui/icons-material/Info";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import { Box, IconButton, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import FlatShareModal from "./components/FlatShareModal";

const other = {
  autoHeight: true,
  showCellVerticalBorder: true,
  showColumnVerticalBorder: true,
};

function FlatRequestPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  const { data, isLoading } = useGetAllFlatsQuery({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [flatId, setFlatId] = useState("");
  const handleRequest = (id: string) => {
    setFlatId(id);
    setIsModalOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "squareFeet", headerName: "Square Feet", flex: 1, hideable: true },
    { field: "totalBedrooms", headerName: "Bedrooms", flex: 1 },
    { field: "totalRooms", headerName: "Rooms", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "rent", headerName: "Rent Price", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "advanceAmount", headerName: "Advance Amount", flex: 1 },

    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box sx={{ textAlign: "center" }}>
            <IconButton
              onClick={() => handleRequest(row.id)}
              title="Send Flat Request"
            >
              <SendAndArchiveIcon />
            </IconButton>
            <Link href={`/flatDetails/${row.id}`}>
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
        mainTitle="All Flats"
        secondaryTitle="  Here is a best ever flat for you"
      />
      <Box data-aos="fade-down">
        <h1 className="text-lg font-semibold mt-4 mb-4">Display All Flats</h1>
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
                justifyContent: "center",
                alignItems: "center",
              },
            }}
            rows={data}
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

      <FlatShareModal
        flatId={flatId}
        isModalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
      />
    </section>
  );
}

export default FlatRequestPage;
