import { makeAutoObservable } from "mobx";
import { decryptData, encryptData } from "../../service/encryption";
import { UserModel } from "../../model/response/user";
import { SignInRequest } from "../../model/request/sign-in";
import AuthDataController from "../data/auth";
import { dialogueMessage } from "../../service/message/dialogue";
import { MessageType } from "../../service/enum/meesage";

class AuthAppController {
    authData = new AuthDataController()

    isAuthorized: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    checkAuth = () => {
        try {
            const session = decryptData(localStorage.getItem("session") ?? '');

            if (!session) {
                this.isAuthorized = false;
            } else {
                this.isAuthorized = true;
            }
        } catch (error) {
            console.log(error);
            this.isAuthorized = false;
        }
    };

    getSession = (): UserModel => {
        let session: UserModel = {}

        try {
            const data: string = decryptData(localStorage.getItem("session") ?? '');
            session = JSON.parse(data)

            return session
        } catch (error) {
            console.log(error);
            return session
        }
    }

    signIn = async (
        req: SignInRequest
    ): Promise<boolean> => {
        const res = await this.authData.signIn(req)

        if (res?.code == 200) {
            this.isAuthorized = true;
            localStorage.setItem("session",
                encryptData(JSON.stringify(res?.dataProfile ?? {})));

            dialogueMessage(
                res?.message ?? '',
                MessageType.Success
            )

            return true
        } else {
            dialogueMessage(
                res?.message ?? '',
                MessageType.Danger
            )

            return false
        }
    };

    signOut = async (): Promise<boolean> => {
        localStorage.removeItem("session");
        this.isAuthorized = false;

        return true
    };
}

export default AuthAppController