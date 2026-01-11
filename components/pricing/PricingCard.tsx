import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
    const isPopular = plan.tag === "Most Popular";

    return (
        <div className={cn(
            "group relative flex flex-col gap-6 p-8 rounded-2xl border transition-all duration-250 hover:-translate-y-1 shadow-xl bg-card",
            isPopular
                ? "border-[rgb(var(--border-hover))] ring-1 ring-[rgb(var(--border-hover))]/20 shadow-primary/10"
                : "border-[rgb(var(--border-default))] hover:border-[rgb(var(--border-hover))] hover:bg-[rgb(var(--bg-primary))]/10"
        )}>
            {/* ---- Popular Tag ---- */}
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase shadow-lg">
                    {plan.tag}
                </div>
            )}

            {/* ---- Plan Header ---- */}
            <div className="space-y-2">
                <h3 className="font-heading text-[22px] font-bold tracking-tight text-foreground">
                    {plan.plan}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                    {plan.description}
                </p>
            </div>

            {/* ---- Pricing ---- */}
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                <span className="text-muted-foreground font-medium">/month</span>
            </div>

            {/* ---- CTA Button ---- */}
            <Button
                variant={isPopular ? "default" : "outline"}
                className="w-full py-6 text-base font-bold shadow-md hover:shadow-lg transition-all"
            >
                {plan.cta || "Get Started"}
            </Button>

            {/* ---- Divider ---- */}
            <div className="h-px w-full bg-[rgb(var(--border-default))] group-hover:bg-primary/20 transition-colors" />

            {/* ---- Features ---- */}
            <div className="flex-1 space-y-4">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">What's included:</p>
                <ul className="space-y-3 leading-normal">
                    {plan.allowed.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 group/item">
                            <div className="rounded-full p-1 bg-[rgb(var(--text-accent))]/10 text-[rgb(var(--text-accent))]">
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-sans text-foreground/90 leading-tight">
                                {feature}
                            </span>
                        </li>
                    ))}

                    {plan.notAllowed.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 grayscale">
                            <div className="rounded-full p-1 bg-[rgb(var(--text-accent))]/10 text-[rgb(var(--text-accent))]">
                                <X size={14} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-sans text-muted-foreground leading-tight line-through decoration-[rgb(var(--text-accent))]">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingCard