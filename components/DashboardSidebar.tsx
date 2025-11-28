"use client";

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
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            name: "Add Job Role",
            path: "/admin/dashboard/add-job",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            ),
        },
        {
            name: "Job Roles",
            path: "/admin/dashboard/jobs",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            name: "Settings",
            path: "/admin/dashboard/settings",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
    ];

    return (
        <aside
            className={`${sidebarCollapsed ? "w-20" : "w-64"
                } bg-[rgb(var(--bg-surface))] border-r border-[rgb(var(--border-default))] transition-all duration-300 flex flex-col`}
        >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-[rgb(var(--border-default))]">
                <div className="flex items-center justify-between">
                    {!sidebarCollapsed && (
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgb(var(--bg-primary))] to-[rgb(var(--text-accent))] flex items-center justify-center shadow-lg shadow-[rgba(var(--shadow-primary),var(--alpha-shadow-primary))]">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-[rgb(var(--text-primary))] font-[var(--font-heading)]">
                                    Admin Panel
                                </h2>
                                <p className="text-xs text-[rgb(var(--text-muted))]">Keyword Insight</p>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="p-2 rounded-lg hover:bg-[rgb(var(--bg-hover))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-accent))] transition-colors"
                    >
                        <svg
                            className={`w-5 h-5 transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    </button>
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
                            {!sidebarCollapsed && (
                                <span className="font-medium text-sm">{item.name}</span>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-[rgb(var(--border-default))]">
                <button
                    onClick={handleLogout}
                    className={`w-full flex items-center ${sidebarCollapsed ? "justify-center" : "justify-start"
                        } space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all duration-200 group`}
                >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {!sidebarCollapsed && (
                        <span className="font-medium text-sm">Logout</span>
                    )}
                </button>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
