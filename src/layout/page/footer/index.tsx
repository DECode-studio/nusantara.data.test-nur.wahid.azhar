import Credit from "./component/credit"
import LogoApp from "./component/logo"
import Menu from "./component/menu"

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow-lg hover:shadow-3xl m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">

                    <LogoApp />
                    <Menu />

                </div>
                
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                
                <Credit />
            </div>
        </footer>
    )
}

export default Footer