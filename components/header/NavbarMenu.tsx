"use client";

import { Menu } from "lucide-react"
import { Button } from "../ui/button";

const NavbarMenu = () => {
    return (
        <div>
            <Button variant="ghost" className="has-[>svg]:px-2">
                <Menu size={24} />
            </Button>
        </div>
    )
}

export default NavbarMenu