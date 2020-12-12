module.exports = {
  i18n: {
    locales: ["en-PH", "en-US"],
    defaultLocale: "en-PH",
  },
  rewites() {
    return [
      {
        source: "/:locale/search",
        destination: "/search",
      },
      {
        source: "/:locale/search/:path*",
        destination: "/search",
      },
      {
        source: "/search/vendors/:name",
        destination: "/search",
      },
      {
        source: "/search/vendors/:name/:category",
        destination: "/search",
      },
      {
        // This rewrite will also handle `/search/vendors`
        source: "/search/:category",
        destination: "/search",
      },
    ]
  },
}
