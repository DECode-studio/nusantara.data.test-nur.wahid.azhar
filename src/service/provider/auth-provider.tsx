import { ReactNode, useEffect, useState } from "react"
import AuthAppController from "../controller/service/auth"
import Navigate from "../service/navigation/navigator"
import RouteURL from "../service/navigation/url"
import { LoadDialog } from "../../layout/components/load"

type Props = {
    children: ReactNode
}

const controller = new AuthAppController()

const AuthProvider = ({ children }: Props) => {
    const [load, setLoad] = useState<boolean>(false)
    const route = Navigate.Path()

    useEffect(() => {
        setLoad(true)

        controller.checkAuth()
        routeHandle()

        setLoad(false)
    }, [])

    const routeHandle = () => {
        if (route != RouteURL.SignInURL && controller.isAuthorized == false) {
            Navigate.Replace(RouteURL.SignInURL)
        }

        if (route == RouteURL.SignInURL && controller.isAuthorized == true) {
            Navigate.Replace(RouteURL.DashboardURL)
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