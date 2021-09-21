import * as hubspot from "@hubspot/api-client";
import { HUBSPOT_API_KEY } from "../lib/constants";

export const hubspotClient = new hubspot.Client({ apiKey: HUBSPOT_API_KEY });
