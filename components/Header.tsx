import GitHubIcon from "@/icons/GithubIcon";
import Image from "next/image";
import Link from "next/link";
import AuthenticationMenus from "./AuthenticationMenus";
import { Button } from "./ui/button";

const Header = async () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-[rgba(var(--bg-surface-alpha),var(--alpha-backdrop))] backdrop-blur-sm border-b border-[rgb(var(--border-default))]">
            <div className="container mx-auto px-6 py-3">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
                        <span className="text-[22px] font-bold text-[rgb(var(--text-primary))] font-logo">KIE</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/arafatYasir/Keyword-Insight-Engine" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <GitHubIcon width={16} height={16} />
                                GitHub
                            </Button>
                        </Link>

                        {/* Authentication Menus */}
                        <AuthenticationMenus />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
