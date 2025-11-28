import BoltIcon from "@/icons/BoltIcon";
import DashboardMenus from "./DashboardMenus";

const DashboardSidebar = () => {
    return (
        <aside
            className={`w-64 bg-[rgb(var(--bg-surface))] border-r border-[rgb(var(--border-default))] flex flex-col`}
        >
            {/* ---- Sidebar Header ---- */}
            <div className="border-b border-[rgb(var(--border-default))] flex items-center px-4">
                <div className="flex items-center h-[88px]">
                    <div className="flex items-center gap-x-3">
                        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[rgb(var(--bg-primary))] to-[rgb(var(--text-accent))] flex items-center justify-center shadow-lg shadow-[rgba(var(--shadow-primary),var(--alpha-shadow-primary))]">
                            <BoltIcon />
                        </div>
                        <div>
                            <h2 className="text-lg text-[rgb(var(--text-primary))] font-bold">
                                Admin Panel
                            </h2>
                            <p className="text-xs text-[rgb(var(--text-muted))]">Keyword Insight Engine</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---- Menu Items ---- */}
            <DashboardMenus />
        </aside>
    );
};

export default DashboardSidebar;
