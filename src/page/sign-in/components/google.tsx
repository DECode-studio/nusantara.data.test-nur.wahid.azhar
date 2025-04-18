import { GoogleIcon } from "hugeicons-react"
import SignInPageController from "../../../service/controller/page/sign-in"
import Button from "../../../components/button/button"

type Props = {
    controller: SignInPageController
}

const GoogleSignIn = ({
    controller
}: Props) => {
    return (
        <div className="flex flex-col w-full my-2 text-center">
            <Button
                onClick={() => controller.actionMethod('sign-google')}
                icon={<GoogleIcon />}
                text="Google Sign In"
                className="text-white bg-cyan-700"
            />

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