import { makeAutoObservable } from "mobx";
import { decryptData, encryptData } from "../../service/encryption";
import { SignInRequest } from "../../model/request/sign-in";
import AuthDataController from "../data/auth";
import { dangerToast, successToast } from "../../service/message/toast";
import { Session } from "../../model/response/session";

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

    getSession = (): Session => {
        let session: Session = {}

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

        if (res?.status == true) {
            this.isAuthorized = true;

            const session: Session = {
                access_token: res.access_token,
                refresh_token: res.refresh_token,
                issued_at: res.issued_at,
                expired_at: res.expired_at
            }

            localStorage.setItem("session",
                encryptData(JSON.stringify(session ?? {})));

            successToast(res?.message ?? '')

            return true
        } else {
            dangerToast(res?.message ?? '')

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