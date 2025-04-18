import axios, { AxiosRequestConfig } from "axios";
import { ApiResponse } from "../../model";
import { SignInRequest } from "../../model/request/sign-in";

class AuthDataController {

    signIn = async (
        req: SignInRequest
    ): Promise<ApiResponse> => {
        let data: ApiResponse = {}

        try {
            let config: AxiosRequestConfig = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `https://cors-anywhere.herokuapp.com/http://103.31.39.176:1000/ndi/login`,
                data: req,
            };

            let response = await axios<ApiResponse>(config)
            data = response?.data ?? {}

            return data
        } catch (error: any) {
            console.log(error);
            data = error?.response?.data ?? {}

            return data;
        }
    }

}

export default AuthDataController