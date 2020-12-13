import { Categories } from "../../interfaces/Category"
import { IProduct } from "../../interfaces/Product"
import { Vendor, Vendors } from "../../interfaces/Vendors"
import { ICatergory } from "../../interfaces/Category"
import { Popover } from "../core"
import { Filter } from "../icons"
import { ProductCard } from "./Product"
import NextLink from "next/link"
import cx from "clsx"

interface Props {
  products: IProduct[]
  category?: ICatergory
  vendor?: Vendor
}

const ProductsGrid = ({ products, category, vendor }: Props) => {
  return (
    <div className="pt-10">
      {(vendor || category) && (
        <div className="px-2 sm:px-10 lg:px-20 w-full">
          <h1 className="text-xl font-medium">
            Search Results for{" "}
            <span className="text-gray-800 capitalize text-2xl">
              "{category ? category : vendor ? vendor : ""}"
            </span>
          </h1>
        </div>
      )}
      {/* Sidebar becomes a filter menu in sm screens */}
      <div className="flex items-center mt-2 justify-between px-2 sm:px-10 md:hidden">
        <h1 className="text-2xl font-medium text-gray-600 inline">Filters</h1>
        <div className="inline-flex items-center">
          <Popover text="Categories">
            <div className="flex flex-col space-y-1">
              {Categories.map((category) => (
                <NextLink href={`/category/${category}`}>
                  <a
                    key={`${category}`}
                    className="capitalize whitespace-nowrap mx-2 text-xs text-gray-800"
                  >
                    {category}
                  </a>
                </NextLink>
              ))}
            </div>
          </Popover>
          <Popover text="Vendors">
            <div className="flex flex-col space-y-1">
              {Vendors.map((vendor) => (
                <NextLink href={`/vendor/${vendor}`}>
                  <a
                    key={`${vendor}`}
                    className="capitalize whitespace-nowrap mx-2 text-xs text-gray-800"
                  >
                    {vendor}
                  </a>
                </NextLink>
              ))}
            </div>
          </Popover>
          <Filter className="w-6 h-6 ml-5 text-green-700 transform -rotate-90" />
        </div>
      </div>
      <div className="sm:px-10 lg:px-20 h-full py-10 flex grid-cols-6">
        <div className="space-y-5 hidden md:block sticky w-48">
          <div>
            <h4 className="font-semibold text-lg">All Categories</h4>
            <ul className="space-y-1">
              {Categories.map((c) => (
                <li
                  className={cx("text-gray-700 capitalize", [
                    category === c && "underline",
                  ])}
                >
                  <NextLink key={`${c}`} href={`/search?category=${c}`}>
                    <a>{c}</a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">All Vendors</h4>
            <ul className="space-y-1">
              {Vendors.map((v) => (
                <li
                  key={`${v}`}
                  className={cx("text-gray-700 capitalize", [
                    vendor === v && "underline",
                  ])}
                >
                  <NextLink href={`/search?vendor=${v}`}>
                    <a>{v}</a>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 w-full md:grid-cols-2 lg:grid-cols-3 flex-1">
          {products.map((product, idx) => (
            <ProductCard
              idx={idx}
              key={`${product._id}-card`}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsGrid
