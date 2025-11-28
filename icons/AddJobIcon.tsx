interface props {
    width?: number;
    height?: number;
}

const AddJobIcon = ({width = 20, height = 20}: props) => {
    return (
        <svg width={width} height={height} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
    )
}

export default AddJobIcon