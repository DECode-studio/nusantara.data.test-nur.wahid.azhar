import { observer } from "mobx-react-lite";
import FormPage from "./components/form";

import GoogleSignIn from "./components/google";
import SignInPageController from "../../service/controller/page/sign-in";
import { useEffect } from "react";
import { LoadDialog } from "../../layout/components/load";

const controller = new SignInPageController()

const SignInPage = observer(() => {

    useEffect(() => {
        controller.getData()
    }, [])
    

    return (
        <>
            <div className="flex flex-col lg:flex-row h-screen bg-white">
                <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 lg:px-28 bg-white">
                    <h1 className="text-start text-4xl font-bold mb-4 text-black">
                        Sign In
                    </h1>

                    <GoogleSignIn controller={controller} />
                    <FormPage controller={controller} />

                </div>

                <div
                    className="hidden lg:block lg:w-1/2 bg-cover bg-center rounded-l-[50px]"
                    style={{ backgroundImage: `url(${'/images/bg-cover.jpeg'})` }}
                ></div>
            </div>
            <LoadDialog isOpen={controller.loadData} />
        </>
    );
});

export default SignInPage;
