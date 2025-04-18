import { HTMLInputTypeAttribute } from "react"

type Props = {
    title: string
    value: string
    type?: HTMLInputTypeAttribute
    readonly?: boolean
    inputFormatter?: (value: string) => string
    onSubmit?: () => void
    onChange?: (value: string) => void
}

export const TitleTextField = ({
    title,
    value,
    type = 'text',
    readonly = false,
    inputFormatter,
    onSubmit,
    onChange,
}: Props) => {
    return (
        <div className="flex flex-col space-y-2 w-full">
            <span className="text-gray-500 text-sm font-semibold">
                {title}
            </span>
            <TextField
                title={title}
                value={value}
                type={type}
                readonly={readonly}
                inputFormatter={inputFormatter}
                onSubmit={onSubmit}
                onChange={onChange}
            />
        </div>
    )
}

export const TextField = ({
    title,
    value,
    type = 'text',
    readonly = false,
    inputFormatter,
    onSubmit,
    onChange,
}: Props) => {

    return (
        <div className="">
            <div className="group relative rounded-full overflow-hidden">
                <div className="relative flex items-center justify-between">
                    <input
                        className="flex-1 h-[50px] px-[20px] bg-transparent placeholder-gray-500 placeholder-opacity-30 focus:outline-none focus:text-black rounded-full border"
                        type={type}
                        readOnly={readonly}
                        placeholder={title}
                        value={inputFormatter ? inputFormatter(value) : value}
                        onChange={(e) => onChange ? onChange(e.target.value) : {}}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && onSubmit) {
                                onSubmit()
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}