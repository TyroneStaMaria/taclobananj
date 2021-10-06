export const API_URL: string = "https://wp.taclobananjph.com";

export const CONTACT_FORM_API_URL: string =
  API_URL + "/wp-json/contact-form-7/v1/contact-forms/7/feedback";

export const REGISTER_API_URL: string =
  API_URL + "/wp-json/wp/v2/users/register";

export const GRAPHQL_URI: string = API_URL + "/graphql/";

export const WP_TOKEN_URL: string = API_URL + "/wp-json/jwt-auth/v1/token";
export const WP_TOKEN_VALIDATION: string =
  API_URL + "/wp-json/jwt-auth/v1/token/validate";

export const WP_RESET_PASSWORD_CODE_URL: string =
  API_URL + "/wp-json/bdpwr/v1/reset-password";

export const WP_VALIDATE_RESET_PASSWORD_CODE_URL: string =
  API_URL + "/wp-json/bdpwr/v1/validate-code";

export const WP_SET_NEW_PASSWORD_URL: string =
  API_URL + "/wp-json/bdpwr/v1/set-password";

export const BRANDS_QUERY: string = `query brandsQuery {
  brands {
    nodes {
      brandId
      featuredImage {
        node {
          sourceUrl
        }
      }
      title(format: RENDERED)
    }
  }
}
`;

export const TRAINING_CENTER_QUERY: string = `query trainingCenterQuery {
  trainingCenters(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      trainingCenterContent {
        description
        video {
          mediaItemUrl
        }
      }
      title
      uri
      slug
    }
  }
}
`;

export function SINGLE_TRAINING_CENTER_QUERY_BY_SLUG(slug) {
  return `query trainingCenterQueryBy { 
    trainingCenterBy(slug: "${slug}") {
      title(format: RENDERED)
      trainingCenterContent {
        description
        video {
          mediaItemUrl
        }
      }
    }
  }`;
}

export const CONSUMER_KEY = process.env.CONSUMER_KEY;
export const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
export const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

export const BASE_URL = process.env.URL;
