export const API_URL: string = "https://wp.taclobananjph.com";

export const CONTACT_FORM_API_URL: string =
  API_URL + "/wp-json/contact-form-7/v1/contact-forms/7/feedback";

export const REGISTER_API_URL: string =
  API_URL + "/wp-json/wp/v2/users/register";

export const GRAPHQL_URI: string = API_URL + "/graphql/";

export const WP_TOKEN_URL: string = API_URL + "/wp-json/jwt-auth/v1/token";

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

export const CONSUMER_KEY = process.env.CONSUMER_KEY;
export const CONSUMER_SECRET = process.env.CONSUMER_SECRET;
export const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
