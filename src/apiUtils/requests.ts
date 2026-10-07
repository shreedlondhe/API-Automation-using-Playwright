import { request, APIRequestContext, APIResponse } from "@playwright/test";
import Logger from "../logUtils/log";
export default class APIUtils {

    request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

   async getRequest(url: string, token: string|undefined): Promise<APIResponse> {
        Logger.info(`Making GET request to ${url} with token: ${token}`);
        let res: APIResponse = await this.request.get(url, {headers:{Authorization:`Bearer ${token}`}});
        Logger.info(`GET request to ${url} completed with status: ${res.status()}`);
        Logger.info(`Response body: ${await res.text()}`);
        return res;
    }
    async postRequest(url: string, data: any, token: string|undefined): Promise<APIResponse> {
        Logger.info(`Making POST request to ${url} with data: ${JSON.stringify(data)}`);
        let res: APIResponse=await this.request.post(url, {headers:{Authorization:`Bearer ${token}`}, data});
        Logger.info(`POST request to ${url} completed with status: ${res.status()}`);
        Logger.info(`Response body: ${await res.text()}`);
        return res
    }
    async putRequest(url: string, data: any, token: string|undefined): Promise<APIResponse> {
        Logger.info(`Making PUT request to ${url} with data: ${JSON.stringify(data)}`);
        let res:APIResponse=await this.request.put(url, {headers:{Authorization:`Bearer ${token}`}, data });
        Logger.info(`PUT request to ${url} completed with status: ${res.status()}`);
        Logger.info(`Response body: ${await res.text()}`);
        return res
    }
    async deleteRequest(url: string, token: string|undefined): Promise<APIResponse> {
        Logger.info(`Making DELETE request to ${url} with token: ${token}`);
        let res:APIResponse=await this.request.delete(url, {headers:{Authorization:`Bearer ${token}`}});
        Logger.info(`DELETE request to ${url} completed with status: ${res.status()}`);
        Logger.info(`Response body: ${await res.text()}`);
        return res
    }

}