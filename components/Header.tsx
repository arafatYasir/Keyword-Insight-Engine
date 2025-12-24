import GitHubIcon from "@/icons/GithubIcon";
import Image from "next/image";
import Link from "next/link";
import AuthenticationMenus from "./AuthenticationMenus";
import { Button } from "./ui/button";
import { navOptions } from "@/lib/navOptions";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = async () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-[rgba(var(--bg-surface-alpha),var(--alpha-backdrop))] backdrop-blur-sm border-b border-[rgb(var(--border-default))]">
            <div className="container mx-auto px-6 py-3">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-8">
                        {/* ---- Logo ---- */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/images/logo.svg" alt="Logo" width={24} height={24} />
                            <span className="text-[22px] font-bold text-[rgb(var(--text-primary))] font-logo">KIE</span>
                        </Link>

                        {/* ---- Nav Menu Options ---- */}
                        <ul className="flex items-center gap-x-8">
                            {
                                navOptions.map(option => (
                                    <li 
                                        key={option.id}
                                        className="font-medium cursor-pointer hover:text-[rgb(var(--bg-primary))] transition-all"
                                    >
                                        {option.type !== "Submenu" ? (
                                            <Link href={option.url}>{option.name}</Link>
                                        ) : (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className="cursor-pointer">
                                                    {option.name}
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    {
                                                        option.childrens.map(child => (
                                                            <DropdownMenuItem key={child.id}>
                                                                <Link href={child.url}>{child.name}</Link>
                                                            </DropdownMenuItem>
                                                        ))
                                                    }
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* ---- Buttons ---- */}
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
