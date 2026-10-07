import { request, APIRequestContext, APIResponse } from "@playwright/test";
import Logger from "../logUtils/log";
import { USER_ENDPOINTS } from '../endPoints/endpoints';

export default class AuthUtils {
    private token:string|undefined
    constructor(private request: APIRequestContext) {

    }

    async authToken(): Promise<string|undefined> {
       if(this.token) {
     Logger.info("Token already exists, returning existing token.");
        return this.token;

       }else{
        Logger.info("Token does not exist, making API call to retrieve token.");
        const response = await this.request.post(USER_ENDPOINTS.auth, {
            data: {
                "username": "admin",
                "password": "admin123"
            }
        })
        const responseBody = await response.json();
        this.token = responseBody.token;
        Logger.info(`Token retrieved: ${this.token}`);
        Logger.info("Token retrieved and stored.");
        return this.token;
    }
    }


}
