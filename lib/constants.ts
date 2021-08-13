export const API_URL: string = "https://wp.taclobananjph.com";

export const CONTACT_FORM_API_URL: string =
  API_URL + "/wp-json/contact-form-7/v1/contact-forms/7/feedback";

export const GRAPHQL_URI: string = API_URL + "/graphql/";

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

// export const BRANDS_API_URL: string = API_URL + "/wp/v2/brands?_embed";

// export const Constants = [API_URL, CONTACT_FORM_API_URL, BRANDS_API_URL];
