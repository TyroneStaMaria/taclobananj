require("dotenv").config();
const withTM = require("next-transpile-modules")(["react-markdown"]);
module.exports = withTM({
  env: {
    CONSUMER_KEY: process.env.CONSUMER_KEY,
    CONSUMER_SECRET: process.env.CONSUMER_SECRET,
    HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY,
    URL: process.env.URL,
  },
  images: {
    domains: ["wp.taclobananjph.com"],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? {
            source: "/((?!coming-soon).*)",
            destination: "/coming-soon.html",
            permanent: false,
          }
        : null,
    ].filter(Boolean);
  },
});
