import { cn } from "@/lib/utils";
import Image from "next/image";
import TextBadge from "../TextBadge";

interface Props {
    id: number;
    title: string;
    description: React.ReactNode;
    image: string;
}

const HowItWorksStep = ({ step }: { step: Props }) => {
    const { id, title, description, image } = step;

    // Determine layout direction based on ID
    const isEven = id % 2 === 0;

    return (
        <div className={cn(
            "flex flex-col gap-10 lg:items-center justify-center border border-[rgb(var(--border-default))] hover:border-[rgb(var(--bg-primary-hover))] transition-all py-4 rounded-xl relative group",
            isEven ? "lg:flex-row-reverse" : "lg:flex-row",
            
        )}>
            {/* ---- Section Connector ---- */}
            <div className="absolute bottom-[calc(100%+1px)] w-[2px] h-[120px] bg-linear-to-br from-[rgb(var(--bg-primary))]/20 to-[rgb(var(--bg-primary-hover))] z-10"></div>

            {/* ---- Description Part ---- */}
            <div className={cn(
                "w-1/2 space-y-6",
                isEven ? "text-right" : "text-left"
            )}>
                {/* ---- Step Indicator ---- */}
                <TextBadge>
                    • Step {id}
                </TextBadge>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-[rgb(var(--bg-primary-hover))] transition-all">
                    {title}
                </h3>

                {/* ---- Main Description ---- */}
                <div className="text-lg text-muted-foreground leading-relaxed [&_a]:text-[rgb(var(--bg-primary))] [&_a]:font-medium [&_a]:hover:underline [&_a]:hover:text-[rgb(var(--bg-primary-hover))] group-hover:text-foreground transition-all">
                    {description}
                </div>
            </div>

            {/* ---- Image Part ---- */}
            <div className="w-[35%] hover:scale-105 transition-all duration-400 aspect-square relative overflow-hidden rounded-xl bg-white/5 shadow-xl">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={`How It works step ${id}`}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}

export default HowItWorksStep