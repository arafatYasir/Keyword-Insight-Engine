interface Props {
    width: number;
    height: number;
}

const LongDownArrowIcon = ({ width, height }: Props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3137 81.4142C14.0947 82.1953 15.3611 82.1953 16.1421 81.4142L28.87 68.6863C29.6511 67.9052 29.6511 66.6389 28.87 65.8579C28.089 65.0768 26.8227 65.0768 26.0416 65.8579L14.7279 77.1716L3.41419 65.8579C2.63315 65.0768 1.36682 65.0768 0.585767 65.8579C-0.195282 66.6389 -0.195282 67.9052 0.585767 68.6863L13.3137 81.4142ZM14.7279 0L12.7279 -8.74228e-08L12.7279 80L14.7279 80L16.7279 80L16.7279 8.74228e-08L14.7279 0Z" fill="currentColor" />
        </svg>
    )
}

export default LongDownArrowIcon