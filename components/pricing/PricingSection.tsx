import { pricingPlans } from "@/lib/pricing"
import Container from "../Container"
import PricingCard from "./PricingCard"
import Section from "../Section"

const PricingSection = () => {
    return (
        <Container>
            <Section>
                <h2 className="text-center max-w-5xl mx-auto text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground leading-[1.2]">
                    Simple, Fair Pricing for Your Job Search
                </h2>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
                    {pricingPlans.map(plan => (
                        <PricingCard key={plan.plan} plan={plan} />
                    ))}
                </div>
            </Section>
        </Container>
    )
}

export default PricingSection