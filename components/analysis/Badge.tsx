interface props {
    name: string;
    count: number;
    variant: "blue" | "indigo" | "emerald" | "rose" | "teal"
}

const Badge = ({ name, count, variant }: props) => {
    const theme = localStorage.getItem("theme") || "light";
    // Enhanced styles for better visibility in light mode
    const styles = {
        blue: `${theme === "dark" ? "bg-blue-500/10 text-blue-200 border-blue-500/20 hover:bg-blue-500/20" : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"}`,
        indigo: `${theme === "dark" ? "bg-indigo-500/10 text-indigo-200 border-indigo-500/20 hover:bg-indigo-500/20" : "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100"}`,
        emerald: `${theme === "dark" ? "bg-emerald-500/10 text-emerald-200 border-emerald-500/20 hover:bg-emerald-500/20" : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"}`,
        rose: `${theme === "dark" ? "bg-rose-500/10 text-rose-200 border-rose-500/20 hover:bg-rose-500/20" : "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100"}`,
        teal: `${theme === "dark" ? "bg-teal-500/10 text-teal-200 border-teal-500/20 hover:bg-teal-500/20" : "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100"}`,
    };

    return (
        <div className={`
            group flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-lg border transition-all duration-200
            ${styles[variant]} cursor-default
        `}>
            <span className="font-semibold text-sm tracking-wide">{name}</span>
            {count > 0 && (
                <span className={`
                    flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[12px] font-bold rounded-md text-current shadow-sm bg-black/20 ${theme === "dark" ? "bg-black/20" : "bg-white"}
                `}>
                    {count}
                </span>
            )}
        </div>
    );
};

export default Badge;