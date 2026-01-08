const TextBadge = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-2 py-1 text-sm font-medium text-primary backdrop-blur-md shadow-sm">
            {children}
        </div>
    )
}

export default TextBadge