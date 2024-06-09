import { USER_ROLE } from "@/constant/role";
import { TDrawerItem, UserRole } from "@/types";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
import PagesRoundedIcon from "@mui/icons-material/PagesRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RoomPreferencesRoundedIcon from "@mui/icons-material/RoomPreferencesRounded";
export const GenerateDrawerItems = (role: UserRole): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [];
  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: AccountBoxRoundedIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: LockResetRoundedIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "User Management",
          path: `${role}/manage-users`,
          icon: ManageAccountsRoundedIcon,
        },
        {
          title: "Admin Management",
          path: `${role}/admin-management`,
          icon: AdminPanelSettingsRoundedIcon,
        },
        {
          title: "Flat Management",
          path: `${role}/manage-flats`,
          icon: HomeWorkRoundedIcon,
        },
        {
          title: "Manage All Flat Requests",
          path: `${role}/manage-flat-requests`,
          icon: AddBusinessRoundedIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "User Management",
          path: `${role}/manage-users`,
          icon: ManageAccountsRoundedIcon,
        },

        {
          title: "Flat Management",
          path: `${role}/manage-flats`,
          icon: RoomPreferencesRoundedIcon,
        },

        {
          title: "Post Flat",
          path: `${role}/post-flat`,
          icon: OfflineShareIcon,
        },
        {
          title: "Flat Share Request Management",
          path: `${role}/flat-share-request`,
          icon: OfflineShareIcon,
        },
        {
          title: "My Flat Posts",
          path: `${role}/my-flat`,
          icon: PagesRoundedIcon,
        }

        // {
        //   title: "Manage All Flat Requests",
        //   path: `${role}/manage-flat-requests`,
        //   icon: ManageAccountsIcon,
        // }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "Post Flat",
          path: `${role}/post-flat`,
          icon: PostAddIcon,
        },
        {
          title: "Flat Share Request",
          path: `${role}/flat-share-request`,
          icon: OfflineShareIcon,
        },
        {
          title: "My Flat Posts",
          path: `${role}/my-flat`,
          icon: ApartmentIcon,
        },
        {
          title: "My Requests Flat",
          path: `${role}/my-flat-requests`,
          icon: BusinessIcon,
        }
      );
    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
