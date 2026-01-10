const Offer = ({ offer }: { offer: OfferItem }) => {
    return (
        <div className="flex items-center gap-x-5">
            {/* ---- Left Side Dot ---- */}
            <div className="shrink-0 w-5 h-5 rounded-full bg-[rgb(var(--bg-primary))]"></div>

            {/* ---- Right Side Content ---- */}
            <div className="flex items-center shrink-0 gap-x-5">
                {/* ---- Icon ---- */}
                <div className="w-8 h-8 rounded-lg bg-[rgb(var(--bg-primary))]"></div>

                <div>
                    <h3 className="text-2xl font-bold">{offer.title}</h3>
                    <p className="text-secondary">{offer.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Offer