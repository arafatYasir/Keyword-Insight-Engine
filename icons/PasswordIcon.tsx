interface props {
    dependency?: boolean;
}

const PasswordIcon = ({ dependency }: props) => {
    return (
        <svg className={`w-5 h-5 transition-colors duration-200 ${dependency ? 'text-[rgb(var(--text-accent))]' : 'text-[rgb(var(--text-muted))]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
    )
}

export default PasswordIcon