import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../../model";
import { SignInRequest } from "../../model/request/sign-in";
import { UserModel } from "../../model/response/user";

class AuthDataController {

    signIn = async (
        req: SignInRequest
    ): Promise<ApiResponse<UserModel>> => {
        let data: ApiResponse<UserModel> = {}

        try {
            let config: AxiosRequestConfig = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `http://103.56.148.33:9011/login`,
                data: req,
            };

            let response = await axios<ApiResponse<UserModel>>(config)
            data = response?.data ?? {}

            return data
        } catch (error: any) {
            console.log(error);
            return data;
        }
    }

}

export default AuthDataController