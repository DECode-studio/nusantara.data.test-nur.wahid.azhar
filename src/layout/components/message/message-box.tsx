import { Alert02Icon, CheckmarkCircle03Icon } from "hugeicons-react"
import { MessageType } from "../../../service/service/enum/meesage"
import ModalLayout from "../modal/modal"

type Props = {
    type: MessageType
    message: string
    onClose: () => void
}

export const MessageBox = ({
    type,
    message,
    onClose
}: Props) => {
    const color = type == MessageType.Success
        ? 'bg-green-600 text-green-600'
        : type == MessageType.Danger
            ? 'bg-red-600 text-red-600'
            : type == MessageType.Warning
                ? 'bg-yellow-500 text-yellow-500'
                : 'bg-gray-500 text-gray-500'

    return (
        <ModalLayout
            onClose={onClose}
        >
            <div className="flex flex-col justify-center items-center space-y-4">

                <div className={`p-5 aspect-square rounded-full ${color}`}>
                    {
                        type == MessageType.Success ? (
                            <CheckmarkCircle03Icon className="text-white" />
                        ) : (
                            <Alert02Icon className="text-white" />
                        )
                    }
                </div>

                <span className={`${color} font-semibold text-lg`}>
                    {message}
                </span>

            </div>
        </ModalLayout>
    )
}