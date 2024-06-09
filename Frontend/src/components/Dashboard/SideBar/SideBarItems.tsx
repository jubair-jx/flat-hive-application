import { TDrawerItem } from "@/types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
type TProps = {
  item: TDrawerItem;
};

const SideBarItems = ({ item }: TProps) => {
  const linkPathName = `/dashboard/${item.path}`;
  const pathName = usePathname();

  return (
    <>
      <Link href={linkPathName}>
        <ListItem
          sx={{
            ...(pathName === linkPathName
              ? {
                  borderRight: "4px solid #F47C21",
                  "& svg": {
                    color: "#e7a140df",
                  },
                }
              : {}),
          }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
            <h2 className=" font-Kanit text-base ">{item.title}</h2>
          </ListItemButton>
        </ListItem>
      </Link>
    </>
  );
};

export default SideBarItems;
