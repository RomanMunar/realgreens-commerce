import NextHead from "next/head"
import { DefaultSeo } from "next-seo"
import config from "../../config/seo.json"
import GoogleFonts from "next-google-fonts"

const Head = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  )
}

export default Head
