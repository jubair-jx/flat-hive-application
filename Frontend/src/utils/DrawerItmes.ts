import { TDrawerItem, UserRole } from "@/types";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import PagesRoundedIcon from "@mui/icons-material/PagesRounded";
import RoomPreferencesRoundedIcon from "@mui/icons-material/RoomPreferencesRounded";
export const GenerateDrawerItems = (role: UserRole): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [];

  switch ((role = "admin")) {
    case "admin":
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "Skills Management",
          path: `${role}/manage-skills`,
          icon: OfflineShareIcon,
        },

        {
          title: "Project Management",
          path: `${role}/manage-project`,
          icon: RoomPreferencesRoundedIcon,
        },

        {
          title: "Blog Management",
          path: `${role}/manage-blog`,
          icon: PagesRoundedIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
