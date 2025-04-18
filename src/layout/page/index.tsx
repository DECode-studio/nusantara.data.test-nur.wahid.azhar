import { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

type Props = {
    children: ReactNode
}

const PageLayout = ({
    children
}: Props) => {
    return (
        <div className="bg-white">
            <Header />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout