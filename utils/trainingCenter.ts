import axios from "axios";
import {
  TRAINING_CENTER_QUERY,
  GRAPHQL_URI,
  SINGLE_TRAINING_CENTER_QUERY_BY_SLUG,
} from "../lib/constants";

export async function getAllContent() {
  return graphqlRequest(TRAINING_CENTER_QUERY);
}

export async function getSingleContent(slug) {
  return graphqlRequest(SINGLE_TRAINING_CENTER_QUERY_BY_SLUG(slug));
}

const graphqlRequest = async (query) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: GRAPHQL_URI,
      data: {
        query: query,
      },
    });
    return data;
  } catch (err) {
    return err.response.data;
  }
};
