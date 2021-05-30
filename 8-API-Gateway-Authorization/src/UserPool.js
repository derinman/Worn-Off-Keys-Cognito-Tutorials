import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_OkftE0LZQ',
  ClientId: '3gvjfu283dugo2iq4b6p7ac65q'
};

/*
const poolData = {
  UserPoolId: 'us-east-1_8WMsl8AMg',
  ClientId: '41qemsprq6sqqjraln2kqr04k7'
};
*/
export default new CognitoUserPool(poolData);