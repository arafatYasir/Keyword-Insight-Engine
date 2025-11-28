interface props {
    width?: number;
    height?: number;
}

const BoltIcon = ({width = 24, height = 24}: props) => {
    return (
        <svg width={width} height={height} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
}

export default BoltIcon