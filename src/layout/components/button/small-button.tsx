import { ReactNode } from "react"

type Props = {
    icon?: ReactNode
    text: string
    rtl?: boolean
    className?: string
    onClick: () => void
}

const SmallButton = ({
    icon,
    text,
    rtl = true,
    className,
    onClick
}: Props) => {
    return (
        <button
            className={`group/b relative flex items-center justify-center h-[32px] rounded-full overflow-hidden ${className}`}
            onClick={onClick}
        >
            <div className="px-[15px]">
                <div className="relative">
                    <div className="origin-left absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]/b:scale-x-0 group-[:not(:hover)]/b:delay-0 delay-[.2s] transition-all duration-[.3s]">
                        <div className={`flex ${rtl ? 'flex-row' : 'flex-row-reverse'} space-x-4`}>
                            {icon}

                            <span>
                                {text}
                            </span>
                        </div>
                    </div>
                    <div className="origin-right group-hover/b:scale-x-0 group-hover/b:delay-0 delay-0 transition-all duration-[.3s]">
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

export default SmallButton