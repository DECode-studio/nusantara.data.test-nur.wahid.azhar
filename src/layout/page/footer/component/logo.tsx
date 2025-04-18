const LogoApp = () => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
                src="/logo/app-icon.png"
                className="h-8"
                alt="App Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-700">
                Go Data
            </span>
        </a>
    )
}

export default LogoApp