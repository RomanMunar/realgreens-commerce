import NextLink from "next/link"
import { Layout } from "../components"
import { ProductCard } from "../components/common/Product"
import ProductsGrid from "../components/common/ProductsGrid"
import { Button, Marquee } from "../components/core"
import { Chevron } from "../components/icons"
import products from "../lib/hooks/mockDatas/products"

export default function Home() {
  return (
    <div className="relative">
      <div className="z-1 absolute top-1 sm:top-5 text-center md:text-left md:left-20">
        <h2 className="underline text-5xl lg:text-7xl font-black text-white tracking-wide">
          Our Top Sellers
        </h2>
      </div>
      <div className="min-h-page grid md:grid-cols-3 grid-cols-1 relative lg:px-16 mx-auto bg-blue-200">
        <div className="relative h-80 md:h-full md:col-span-2 md:row-span-2">
          <ProductCard eager idx={0} product={products[0]} />
        </div>
        <div
          className="bg-cover bg-center h-96 lg:h-full relative"
          aria-label="Second top seller"
        >
          <ProductCard eager idx={1} product={products[1]} />
        </div>
        <div
          className="bg-cover bg-center h-96 lg:h-full relative"
          aria-label="Third top seller"
        >
          <ProductCard eager idx={2} product={products[2]} />
        </div>
      </div>
      <div className="w-full space-y-3 bg-green-600 p-10 lg:p-20">
        <h2 className="text-white text-7xl font-bold mb-5">
          <span className="inline-block text-8xl bg-white text-green-600 p-2 rounded-md">
            Fresh
          </span>{" "}
          as how it should be.
        </h2>
        <div className="flex">
          <p className="text-white text-xl font-medium">
            We are a startup dedicated to provide a sustainable and healthy
            market for farmers and consumers, We ship our products from farms to
            our stores from the day it's picked. Simple, No Chemicals, From the
            ground to you.
            <NextLink href="/about">
              <Button size="sm" variant="primary">
                Learn More About Us
                <Chevron className="h-7 w-7 transform -rotate-90" />
              </Button>
            </NextLink>
          </p>
        </div>
      </div>
      <div className="lg:px-20 py-10 w-full bg-blue-200">
        <Marquee>
          {products.map((product, idx) => (
            <ProductCard
              idx={idx}
              skipTab
              key={`${product._id}`}
              product={product}
              variant="fixed"
              width={224}
              height={224}
            />
          ))}
        </Marquee>
      </div>
      <ProductsGrid products={products} />
    </div>
  )
}
Home.Layout = Layout
