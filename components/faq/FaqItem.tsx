"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const FaqItem = ({ item }: { item: { question: string; answer: string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={cn(
                "group rounded-2xl border transition-all duration-300 bg-card overflow-hidden",
                isOpen
                    ? "border-primary/40 shadow-xl shadow-primary/5 bg-primary/2"
                    : "border-[rgb(var(--border-default))] hover:border-primary/30 hover:shadow-md"
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className={cn(
                    "text-lg md:text-xl font-heading font-bold tracking-tight transition-colors duration-300",
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary/90"
                )}>
                    {item.question}
                </h3>
                <div className={cn(
                    "p-2 rounded-full bg-secondary/50 transition-all duration-300",
                    isOpen ? "rotate-180 bg-primary/10 text-primary" : "text-muted-foreground group-hover:text-primary group-hover:bg-primary/5"
                )}>
                    <ChevronDown size={20} className="transition-transform duration-300" />
                </div>
            </button>

            <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-[90%]">
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqItem