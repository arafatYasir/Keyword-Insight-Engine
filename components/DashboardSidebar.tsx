"use client";

import AddJobIcon from "@/icons/AddJobIcon";
import BoltIcon from "@/icons/BoltIcon";
import DocumentIcon from "@/icons/DocumentIcon";
import DoubleAngleArrowIcon from "@/icons/DoubleAngleArrowIcon";
import HomeIcon from "@/icons/HomeIcon";
import LogoutIcon from "@/icons/LogoutIcon";
import SettingsIcon from "@/icons/SettingsIcon";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const DashboardSidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("admin");
        router.push("/admin");
    };

    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <HomeIcon />
        },
        {
            name: "Add Job Role",
            path: "/admin/dashboard/add-job",
            icon: <AddJobIcon />
        },
        {
            name: "Job Roles",
            path: "/admin/dashboard/jobs",
            icon: <DocumentIcon />
        },
        {
            name: "Settings",
            path: "/admin/dashboard/settings",
            icon: <SettingsIcon />
        },
    ];

    return (
        <aside
            className={`w-64 bg-[rgb(var(--bg-surface))] border-r border-[rgb(var(--border-default))] flex flex-col`}
        >
            {/* Sidebar Header */}
            <div className="border-b border-[rgb(var(--border-default))] flex items-center justify-center">
                <div className="flex items-center justify-between h-[88px]">
                    <div className="flex items-center gap-x-3">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[rgb(var(--bg-primary))] to-[rgb(var(--text-accent))] flex items-center justify-center shadow-lg shadow-[rgba(var(--shadow-primary),var(--alpha-shadow-primary))]">
                            <BoltIcon />
                        </div>
                        <div>
                            <h2 className="text-lg text-[rgb(var(--text-primary))] font-bold">
                                Admin Panel
                            </h2>
                            <p className="text-xs text-[rgb(var(--text-muted))]">Keyword Insight</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <button
                            key={item.name}
                            onClick={() => router.push(item.path)}
                            className={`w-full flex items-center ${sidebarCollapsed ? "justify-center" : "justify-start"
                                } space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                    ? "bg-gradient-to-r from-[rgb(var(--bg-primary))] to-[rgb(var(--text-accent))] text-white shadow-lg shadow-[rgba(var(--shadow-primary),var(--alpha-shadow-primary))]"
                                    : "text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-hover))] hover:text-[rgb(var(--text-accent))]"
                                }`}
                        >
                            <span className={isActive ? "" : "group-hover:scale-110 transition-transform"}>
                                {item.icon}
                            </span>
                            <span className="font-medium text-sm">{item.name}</span>
                        </button>
                    );
                })}

                {/* Logout Button */}
                <div className="py-3 border-t border-[rgb(var(--border-default))]">
                    <button
                        onClick={handleLogout}
                        className={`w-full flex items-center ${sidebarCollapsed ? "justify-center" : "justify-start"
                            } space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-[rgb(var(--bg-hover))] transition-all duration-200 group`}
                    >
                        <LogoutIcon />

                        <span className="font-medium text-sm">Logout</span>
                    </button>
                </div>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;
