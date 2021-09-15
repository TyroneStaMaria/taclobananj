import * as hubspot from "@hubspot/api-client";
import { HUBSPOT_API_KEY } from "./constants";

export const hubspotClient = new hubspot.Client({ apiKey: HUBSPOT_API_KEY });

// export const createContact = async (userDetails) => {
//   try {
//     const response: any = await hubspotClient.crm.contacts.basicApi.create({
//       properties: { ...userDetails },
//     });

//     return response.body;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const getContacts = async () => {
//   const limit = 10;
//   const after = undefined;
//   const properties = undefined;
//   const associations = undefined;
//   const archived = false;
//   try {
//     const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(
//       limit,
//       after,
//       properties,
//       associations,
//       archived
//     );
//     console.log(JSON.stringify(apiResponse.body, null, 2));
//     return apiResponse.body;
//   } catch (e) {
//     e.message === "HTTP request failed"
//       ? console.error(JSON.stringify(e.response, null, 2))
//       : console.error(e);
//   }
// };
