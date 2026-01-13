const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="max-w-[1360px] mx-auto px-6">
            {children}
        </div>
    )
}

export default Container