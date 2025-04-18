import { BitcoinEyeIcon, ViewOffIcon } from "hugeicons-react"
import { useState } from "react"

type Props = {
    title: string
    value: string
    readonly?: boolean
    onSubmit?: () => void
    onChange?: (value: string) => void
}

export const TitlePasswordField = ({
    title,
    value,
    readonly = false,
    onSubmit,
    onChange,
}: Props) => {
    return (
        <div className="flex flex-col space-y-2 w-full">
            <span className="text-gray-500 *:text-sm font-semibold">
                {title}
            </span>
            <PasswordField
                title={title}
                value={value}
                readonly={readonly}
                onSubmit={onSubmit}
                onChange={onChange}
            />
        </div>
    )
}

export const PasswordField = ({
    title,
    value,
    readonly = false,
    onSubmit,
    onChange,
}: Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className="">
            <div className="group relative rounded-full overflow-hidden">
                <div className="relative flex items-center justify-between">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="flex-1 h-[50px] px-[20px] bg-transparent placeholder-gray-500 placeholder-opacity-30 focus:outline-none focus:text-black rounded-full border"
                        readOnly={readonly}
                        placeholder={title}
                        value={value}
                        onChange={(e) => onChange ? onChange(e.target.value) : {}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && onSubmit) {
                                onSubmit()
                            }
                        }}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 p-2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <ViewOffIcon className='w-5 h-5' /> : <BitcoinEyeIcon className='w-5 h-5' />}
                    </button>
                </div>
            </div>
        </div>
    )
}