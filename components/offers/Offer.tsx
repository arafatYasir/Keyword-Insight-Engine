import { cn } from "@/lib/utils";

const Offer = ({ offer }: { offer: OfferItem }) => {
    const { id, title, description } = offer;
    return (
        <div className="flex items-baseline gap-x-5">
            {/* ---- Left Side Dot ---- */}
            <div id={`offer-dot-${id}`} className={cn("shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[rgb(var(--bg-primary-hover))] font-sans text-white border border-[rgb(var(--border-default))]", {
                "relative before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:w-[4px] before:h-[140px] before:bg-[rgb(var(--bg-primary))] before:z-[-1]": id > 1
            })}>
                {id}
            </div>

            {/* ---- Right Side Content ---- */}
            <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">{title}</h3>
                <p className="text-muted-foreground font-sans leading-normal mt-1 ">{description}</p>
            </div>
        </div>
    )
}

export default Offer