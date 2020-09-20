import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/../../.env.test`;
    break;
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}

dotenv.config({ path: path });

export const RPC_URL = process.env.RPC_URL;
export const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
export const ETH_ADDRESS = process.env.ETH_ADDRESS;