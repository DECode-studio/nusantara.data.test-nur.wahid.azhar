import { makeAutoObservable } from "mobx";
import AuthAppController from "../service/auth";

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
}

export default SignInPageController