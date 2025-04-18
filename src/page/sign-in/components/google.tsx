import SignInPageController from "@/app-controller/page/signin-page-controller"
import Button from "@/app-layout/components/button/button"
import { GoogleIcon } from "hugeicons-react"

type Props = {
    controller: SignInPageController
}

const GoogleSignIn = ({
    controller
}: Props) => {
    return (
        <div className="flex flex-col w-full my-2 text-center">
            <Button
                onClick={() => controller.googleSignIn()}
                type='button'
                className={`w-full ttnc-ButtonPrimary disabled:bg-opacity-70 bg-cyan-700 hover:bg-cyan-800 text-neutral-50`}
                icon={<GoogleIcon />}
            >
                Google Sign In
            </Button>

            <div className="flex flex-row items-center justify-center">
                <hr className="flex-grow" />

                <p className="text-gray-500 mt-2 mx-5 h-8">
                    atau
                </p>

                <hr className="flex-grow" />
            </div>

        </div>
    )
}

export default GoogleSignIn