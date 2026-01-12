import { faqItems } from "@/lib/faqItems"
import Container from "../Container"
import Section from "../Section"
import FaqItem from "./FaqItem"

const FaqSection = () => {
    return (
        <Container>
            <Section>
                <h2 className="text-center max-w-5xl mx-auto text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2] font-heading">Everything You're Wondering About</h2>

                {/* ---- Faq Items ---- */}
                <div className="flex gap-x-5">
                    <div className="space-y-5">
                        {faqItems.slice(0, faqItems.length / 2).map(item => (
                            <FaqItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="space-y-5">
                        {faqItems.slice(faqItems.length / 2).map(item => (
                            <FaqItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </Section>
        </Container>
    )
}

export default FaqSection