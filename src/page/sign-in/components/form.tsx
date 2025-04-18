'use client'

import { observer } from 'mobx-react-lite';

import Input from "@/shared/Input"
import Button from "@/app-layout/components/button/button"

import { BitcoinEyeIcon, Login03Icon, ViewOffIcon } from "hugeicons-react"
import SignInPageController from '@/app-controller/page/signin-page-controller';
import { useState } from 'react';
import Navigate from '@/app-service/route/navigator';

type ComponentsProps = {
    controller: SignInPageController
}

const FormPage = observer(({ controller }: ComponentsProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleNavigate = async (route: any) => {
        Navigate.Replace(route)
    };

    return (
        <form className="grid w-full gap-6" action="#" method="post">

            <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                    Email address
                </span>
                <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    onInput={
                        (e: React.ChangeEvent<HTMLInputElement>) => controller.setData(
                            'email',
                            e.target.value,
                        )
                    }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            controller.validateData(handleNavigate);
                        }
                    }}
                />
            </label>

            <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                    Password
                </span>
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        className="mt-1 pr-10"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                            controller.setData("password", e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                controller.validateData(handleNavigate);
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
            </label>

            <div className="flex items-end justify-end">
                <button
                    type="button"
                    className="text-sm underline font-medium text-right"
                    onClick={() => controller.setData('forgot-password')}
                >
                    Forgot password?
                </button>
            </div>

            <Button
                onClick={() => controller.validateData(handleNavigate)}
                type='button'
                className={`w-full ttnc-ButtonPrimary disabled:bg-opacity-70 bg-cyan-700 hover:bg-cyan-800 text-neutral-50`}
                icon={<Login03Icon />}
            >
                Sign In
            </Button>

        </form>
    )
})

export default FormPage