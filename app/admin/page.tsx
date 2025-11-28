import AdminForm from "@/components/AdminForm";
import LockIcon from "@/icons/LockIcon";

const AdminPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            {/* ---- Login Card ---- */}
            <div className="relative w-full max-w-md">
                {/* ---- Card Glow Effect ---- */}
                <div className="absolute -inset-1 bg-linear-to-r from-[rgb(var(--bg-primary))] to-[rgb(var(--text-accent))] rounded-2xl opacity-20 blur-lg"></div>

                {/* ---- Main Card ---- */}
                <div className="relative bg-[rgb(var(--bg-surface))] border border-[rgb(var(--border-default))] rounded-2xl shadow-2xl p-8">
                    {/* ---- Header Section ---- */}
                    <div className="text-center mb-8">
                        {/* ---- Lock Icon with Gradient ---- */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-[rgb(var(--bg-primary))] to-[rgb(var(--text-accent))] mb-4 shadow-lg shadow-[rgba(var(--shadow-primary),var(--alpha-shadow-primary))]">
                            <LockIcon />
                        </div>

                        <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
                            Admin Login
                        </h1>
                        <p className="text-[rgb(var(--text-secondary))] text-sm">
                            Enter your credentials to access the admin panel
                        </p>
                    </div>

                    {/* ---- Login Form ---- */}
                    <AdminForm />

                    {/* ---- Footer ---- */}
                    <div className="mt-6 text-center">
                        <p className="text-xs text-[rgb(var(--text-muted))]">
                            Authorized personnel only
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;