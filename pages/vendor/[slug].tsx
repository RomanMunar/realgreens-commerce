import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import { Layout } from "../../components"
import { Vendors } from "../../interfaces/Vendors"

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string
}>) {
  return {
    props: { vendor: params!.slug },
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          Vendors.forEach((vendor) => {
            arr.push(`/${locale}/vendor/${vendor}`)
          })
          return arr
        }, [])
      : Vendors.map((vendor) => `/vendor/${vendor}`),
    fallback: false,
  }
}

const Category = ({
  vendor,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{vendor}</div>
}

Category.Layout = Layout

export default Category
