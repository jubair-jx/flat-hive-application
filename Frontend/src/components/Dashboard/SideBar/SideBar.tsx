import { UserRole } from "@/types";

import { GenerateDrawerItems } from "@/utils/DrawerItmes";
import { Box, Divider, Stack } from "@mui/material";
import List from "@mui/material/List";
import Link from "next/link";
import { useState } from "react";
import SideBarItems from "./SideBarItems";

function SideBar() {
  const [userRole, setUserRole] = useState("");

  return (
    <Box>
      <Stack
        sx={{
          py: 1,

          background: "#FCFFE0",
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        {/* <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
         */}
        <h1 className=" text-center mx-auto font-bold text-2xl font-poppins">
          Portfolio
          <span className=" text-[#F47C21]">
            {" "}
            <br /> Management
          </span>
        </h1>
      </Stack>
      <Divider />
      <List>
        {GenerateDrawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItems key={index} item={item} />
        ))}
      </List>
      <Divider />
    </Box>
  );
}

export default SideBar;
