import { test, expect, request, APIRequestContext } from '@playwright/test';
import { generateUser } from '../src/dataGenerator/dataGenerator';
import AuthUtils from '../src/apiUtils/auth';
import Logger from '../src/logUtils/log';
import APIUtils from '../src/apiUtils/requests';
import { USER_ENDPOINTS } from '../src/endPoints/endpoints';
import { CreateUserResponseSchema, DeleteUserResponseSchema } from '../src/schemas/user.schema';

test.describe.serial('API Tests', () => {

  let APIrequest: APIRequestContext;
  let authToken: string | undefined;
  let userData = generateUser();
  let makeRequest: APIUtils;
  let lastuserId: number;

  test.beforeAll('Setup', async () => {
    APIrequest = await request.newContext()
    authToken = await new AuthUtils(APIrequest).authToken();
    makeRequest = new APIUtils(APIrequest)
  })
  test.afterAll('Teardown', async () => {
    await APIrequest.dispose();
    Logger.info('API request context disposed.');
    Logger.info('Execution completed. All resources have been cleaned up.');
  })
  test(`"Get API" : to get all users`, async () => {
    Logger.info(`Running test: ${test.info().title}`);
    let res=await makeRequest.getRequest(USER_ENDPOINTS.getUsers, authToken)
    
  
  })

  test(`"Post API" : to create a new user`, async () => {
    Logger.info(`Running test: ${test.info().title}`);
    let res=await makeRequest.postRequest(USER_ENDPOINTS.createUser, userData, authToken)
    let responseBody = await res.json();
    CreateUserResponseSchema.parse(responseBody);
     lastuserId=responseBody.user.id
    
  })

  test(`"Put API" : to update a user`, async () => {
    Logger.info(`Running test: ${test.info().title}`);
    let res =await makeRequest.putRequest(USER_ENDPOINTS.updateUser(1), userData, authToken)
    let responseBody = await res.json();
    CreateUserResponseSchema.parse(responseBody);
  })

  test(`"Delete API" : to delete a user`, async () => {
    Logger.info(`Running test: ${test.info().title}`);
    let res = await makeRequest.deleteRequest(USER_ENDPOINTS.deleteUser(lastuserId), authToken)
    // use below line if only run delete test case
    //await makeRequest.deleteRequest(USER_ENDPOINTS.deleteUser(15), authToken)
    let responseBody = await res.json();
    DeleteUserResponseSchema.parse(responseBody);
    Logger.info(`User with ID ${lastuserId} deleted successfully.`);
  })


})