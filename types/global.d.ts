interface InsightItem {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}

interface OfferItem {
    title: string;
    description: string;
}