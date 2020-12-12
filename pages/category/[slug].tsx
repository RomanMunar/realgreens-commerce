import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from "next"
import { Layout } from "../../components"
import { Categories } from "../../interfaces/Category"

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string
}>) {
  return {
    props: { category: params!.slug },
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          Categories.forEach((category) => {
            arr.push(`/${locale}/category/${category}`)
          })
          return arr
        }, [])
      : Categories.map((category) => `/category/${category}`),
    fallback: false,
  }
}

const Category = ({
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{category}</div>
}

Category.Layout = Layout

export default Category
