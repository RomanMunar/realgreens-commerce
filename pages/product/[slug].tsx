import {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import { NextSeo } from "next-seo"
import { Layout } from "../../components"
import { ProductSlider } from "../../components/common/Product"
import { Button } from "../../components/core"
import { Cart, Inbox } from "../../components/icons"
import products from "../../lib/hooks/mockDatas/products"

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{
  slug: string
}>) {
  return {
    props: { product_id: params!.slug },
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  return {
    paths: locales
      ? locales.reduce<string[]>((arr, locale) => {
          // Add a product path for every locale
          products.forEach((product) => {
            arr.push(`/${locale}/product/${product._id}`)
          })
          return arr
        }, [])
      : products.map((product) => `/product/${product._id}`),
    fallback: false,
  }
}

const Product = ({
  product_id,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const product = products.find((p) => p._id === Number(product_id))
  if (!product) {
    return (
      <div className="max-w-3xl pt-20">
        <h1 className="text-2xl">There was an Error :(</h1>
        <p>Product not found</p>
        <h4 className="text-green-400 block font-medium">
          please contact us for support.
        </h4>
      </div>
    )
  }

  return (
    <>
      <NextSeo
        title={product.name}
        description={product.description}
        openGraph={{
          type: "website",
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.image,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ],
        }}
      />
      <div className="p-10 lg:p-20 md:flex space-x-4 lg:space-x-10">
        <div className="w-100 overflow-auto relative">
          <ProductSlider images={product.images} />
        </div>
        <div className="my-10 md:my-0 flex-1 relative">
          <div className="mb-5">
            <h3 className="font-bold text-2xl capitalize">{product.name}</h3>
            <h3 className="font-medium text-xl">₱{product.price}/kg</h3>
            <h3 className="font-medium text-gray-600">Add ₱50 for container</h3>
          </div>
          <h3 className="font-medium text-xl">Description</h3>
          <p className="text-gray-700 lg:pr-20">{product.description}</p>
          <div className="absolute sm:-bottom-20 lg:bottom-0 lg:right-20 space-x-2 flex items-center flex-row">
            <Button variant="secondary">
              <Inbox className="w-6 h-6" /> Add to Wishlist
            </Button>
            <Button>
              <Cart className="w-6 h-6" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

Product.Layout = Layout

export default Product
