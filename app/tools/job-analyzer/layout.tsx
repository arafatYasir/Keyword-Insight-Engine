import { Metadata } from "next"

export const metadata: Metadata = {
    title: "KIE — AI Job Description Analyzer",
    description: "Keyword Insight Engine helps job seekers analyze job descriptions using AI. Extract skills, keywords, requirements, and insights to tailor resumes 25% faster."
};

const JobAnalyzerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default JobAnalyzerLayout