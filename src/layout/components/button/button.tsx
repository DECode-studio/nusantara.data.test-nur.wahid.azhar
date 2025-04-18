import { ReactNode } from "react"

type Props = {
    icon?: ReactNode
    text: string
    rtl?: boolean
    disabled?: boolean
    primary?: boolean
    className?: string
    onClick: () => void
}

const Button = ({
    icon,
    text,
    rtl = true,
    disabled = false,
    primary = true,
    className,
    onClick
}: Props) => {
    return (
        <button
            disabled={disabled}
            className={`group relative flex items-center justify-center h-[50px] rounded-full overflow-hidden ${className} ${disabled ? 'bg-gray-400' : ''} ${primary == false ? 'bg-[#3F5EFB]' : ''}`}
            onClick={onClick}
        >
            <div className="px-[30px]">
                <div className="relative">
                    <div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-x-0 group-[:not(:hover)]:delay-0 delay-[.2s] transition-all duration-[.3s]">
                        <div className={`flex ${rtl ? 'flex-row' : 'flex-row-reverse'} space-x-4`}>
                            {icon}

                            <span>
                                {text}
                            </span>
                        </div>
                    </div>
                    <div className="origin-right group-hover:scale-x-0 group-hover:delay-0 delay-0 transition-all duration-[.3s]">
                        <div className={`flex ${rtl ? 'flex-row' : 'flex-row-reverse space-x-reverse'} space-x-4`}>
                            {icon}

                            <span>
                                {text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Button