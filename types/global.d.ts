interface InsightItem {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}

interface OfferItem {
    id:  number;
    title: string;
    description: string;
}

interface TestimonialItem {
    id:  number;
    rating: number;
    quote: string;
    name: string;
    title: string;
    image: string;
}