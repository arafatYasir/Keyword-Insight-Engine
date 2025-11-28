import HomeIcon from "@/icons/HomeIcon";
import AddJobIcon from "@/icons/AddJobIcon";
import DocumentIcon from "@/icons/DocumentIcon";
import SettingsIcon from "@/icons/SettingsIcon";

export const menuItems = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: HomeIcon
    },
    {
        name: "Add Job Role",
        path: "/admin/dashboard/add-job",
        icon: AddJobIcon
    },
    {
        name: "Job Roles",
        path: "/admin/dashboard/jobs",
        icon: DocumentIcon
    },
    {
        name: "Settings",
        path: "/admin/dashboard/settings",
        icon: SettingsIcon
    },
];