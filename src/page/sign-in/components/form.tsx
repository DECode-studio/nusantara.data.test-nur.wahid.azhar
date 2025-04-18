'use client'

import { observer } from 'mobx-react-lite';
import { Login03Icon } from "hugeicons-react"

import SignInPageController from '../../../service/controller/page/sign-in';
import Button from '../../../components/button/button';
import { TitleTextField } from '../../../components/text-field/text-field';
import { TitlePasswordField } from '../../../components/text-field/password-field';

type ComponentsProps = {
    controller: SignInPageController
}

const FormPage = observer(({ controller }: ComponentsProps) => {

    return (
        <div className="flex flex-col space-y-6 w-full">

            <TitleTextField
                title='Email'
                value={controller.txtEmail}
                onChange={(e) => controller.actionMethod('email', e)}
                onSubmit={() => controller.validateData()}
            />

            <TitlePasswordField
                title='Password'
                value={controller.txtPassword}
                onChange={(e) => controller.actionMethod('password', e)}
                onSubmit={() => controller.validateData()}
            />

            <Button
                onClick={() => controller.validateData()}
                icon={<Login03Icon />}
                text={'Sign In'}
                className="text-white bg-cyan-700"
            />

        </div>
    )
})

export default FormPage