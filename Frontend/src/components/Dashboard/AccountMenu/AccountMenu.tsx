import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

const menuStyles = {
  paper: {
    elevation: 0,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  return (
    <React.Fragment>
      <Link
        href="/dashboard/login"
        className=" px-4 py-2 mx-auto font-Raleway text-sm rounded-md bg-orange-500 text-white"
      >
        Login
      </Link>
    </React.Fragment>
  );
}
