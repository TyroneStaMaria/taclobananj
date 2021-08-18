import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { API_URL, CONSUMER_KEY, CONSUMER_SECRET } from "./constants";

export const api = new WooCommerceRestApi({
  url: API_URL,
  consumerKey: CONSUMER_KEY,
  consumerSecret: CONSUMER_SECRET,
  version: "wc/v3",
  axiosConfig: { headers: {} },
  queryStringAuth: true,
});
