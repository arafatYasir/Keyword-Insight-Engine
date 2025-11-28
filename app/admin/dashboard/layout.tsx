import type { Metadata } from "next";
import DashboardSidebar from "@/components/DashboardSidebar";

export const metadata: Metadata = {
    title: "Admin Dashboard - Keyword Insight Engine",
    description: "Admin dashboard for managing job roles and settings",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen bg-[rgb(var(--bg-body))] mt-[60px]">
            <DashboardSidebar />
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    );
}