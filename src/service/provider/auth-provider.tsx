import { ReactNode, useEffect, useState } from "react"
import AuthAppController from "../controller/service/auth"
import Navigate from "../service/navigation/navigator"
import { LoadDialog } from "../../components/load"

type Props = {
    children: ReactNode
}

const controller = new AuthAppController()

const AuthProvider = ({ children }: Props) => {
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        setLoad(true)

        controller.checkAuth()
        routeHandle()

        setLoad(false)
    }, [])

    const routeHandle = () => {

        if (controller.isAuthorized == false) {
            Navigate.Replace("/sign-in")
        }
    }

    return (
        <>
            {children}
            <LoadDialog isOpen={load} />
        </>
    )
}

export default AuthProvider