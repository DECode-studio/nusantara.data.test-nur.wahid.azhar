import { makeAutoObservable } from "mobx";
import AuthAppController from "../service/auth";
import { warningToast } from "../../service/message/toast";
import { SignInRequest } from "../../model/request/sign-in";
import Navigate from "../../service/navigation/navigator";
import RouteURL from "../../service/navigation/url";

class SignInPageController {
    authApp = new AuthAppController()

    txtEmail: string = ''
    txtPassword: string = ''

    loadData: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    getData = () => {
        this.loadData = true

        this.txtEmail = ''
        this.txtPassword = ''

        this.loadData = false
    }

    actionMethod = (
        mode: string,
        data?: any
    ) => {
        if (mode == 'sign-google') {
            warningToast('Google sign in is not available')
        }

        if (mode == 'email') {
            this.txtEmail = data
        }

        if (mode == 'password') {
            this.txtPassword = data
        }
    }

    validateData = () => {
        if (this.txtEmail == '' && this.txtPassword == '') {
            warningToast('Email and Password is still empty!')
        } else if (this.txtEmail == '') {
            warningToast('Email is still empty!')
        } else if (this.txtPassword == '') {
            warningToast('Password is still empty!')
        } else {
            this.pushData()
        }
    }

    pushData = async () => {
        this.loadData = true

        const req: SignInRequest = {
            email: this.txtEmail,
            password: this.txtPassword
        }

        const res = await this.authApp.signIn(req)

        if (res) {
            Navigate.Replace(RouteURL.DashboardURL)
        }

        this.loadData = false
    }
}

export default SignInPageController