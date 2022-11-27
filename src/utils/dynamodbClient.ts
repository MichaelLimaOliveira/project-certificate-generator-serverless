import { DynamoDB } from "aws-sdk"

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  // para usar localmente passar abaixo as seguintes Keys
  accessKeyId: "X",
  secretAccessKey: "X",
}

const isOffline = () => {
  return process.env.IS_OFFLINE;
}

export const document = isOffline() 
  ? new DynamoDB.DocumentClient(options) 
  : new DynamoDB.DocumentClient();