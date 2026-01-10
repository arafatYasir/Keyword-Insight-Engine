import Container from "../Container"
import Offer from "./Offer";

const offers = [
    {
        title: "Job Description Analysis",
        description: "Understand exactly what a role is asking for in seconds. NextStep breaks down job descriptions into required skills, hidden ATS keywords, experience signals, and role expectations — with personalized AI suggestions on how to reflect them correctly in your resume."
    },
    {
        title: "Job-Specific Resume Builder",
        description: "Turn one base resume into job-specific versions, or build a completely new resume from scratch — each aligned precisely with the job description, without rewriting everything or starting over every time."
    },
    {
        title: "ATS Feedback Before You Apply",
        description: "See how your resume performs for a specific job before submission. Get an ATS match score, clear visibility into strong points, missing keywords, formatting issues, section problems, and smart suggestions to improve alignment and impact."
    },
    {
        title: "Apply Faster With Better Precision",
        description: "Cut resume-tailoring time by 30-40% while applying to more roles with confidence. Every application becomes targeted, intentional, and aligned — not rushed or generic."
    }
];

const OffersSection = () => {
    return (
        <Container>
            <section className="py-20 space-y-20">
                <h2 className="text-center max-w-5xl mx-auto text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.2]">
                    What You Get With NextStep
                </h2>

                {/* ---- Offers Steps ---- */}
                <div className="flex flex-col gap-y-5">
                    {offers.map((offer, index) => (
                        <Offer key={index} offer={offer} />
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default OffersSection