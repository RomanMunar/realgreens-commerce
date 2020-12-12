import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"
import { useState } from "react"
import { IProduct } from "../../interfaces/Product"
import products from "../../lib/hooks/mockDatas/products"
import { useDebounce } from "../../lib/hooks"
import { useRouter } from "next/router"
import "@reach/combobox/styles.css"
import NextLink from "next/link"

const Searchbar = () => {
  const [searchResults, setSearchResults] = useState<IProduct[]>([])
  const timeoutFn = (results: IProduct[]) => setSearchResults(results)
  const [isReady, cancel] = useDebounce(timeoutFn, 5000)
  const { push } = useRouter()
  const onSearch = (value: string) => {
    if (value) {
      const product = products.find((product) => product.name == value)
      return push(`/product/${product?._id}`)
    }
  }

  return (
    <div className="flex w-full relative group focus-within:text-green-900">
      <Combobox onSelect={onSearch} className="w-full" aria-labelledby="Search">
        <ComboboxInput
          className="bg-gray-200 w-full p-2 rounded-sm focus:outline-none focus:ring-2 ring-green-700 ring-opacity-40"
          placeholder="Search for products..."
          onChange={async (e) => {
            const { value } = e.currentTarget
            // Dynamically load fuse.js
            if (isReady() === false) {
              cancel()
              return
            }
            const Fuse = (await import("fuse.js")).default
            const fuse = new Fuse(products, { keys: ["name", "description"] })
            timeoutFn(fuse.search(value).map((i) => i.item))
          }}
        />
        <ComboboxPopover className="z-10 mt-1 py-1 bg-gray-50 border border-gray-200 rounded-md shadow-md">
          <ComboboxList className="divide-y space-y-1">
            {searchResults?.length === 0 ? (
              <ComboboxOption
                key={`No Result Found`}
                value={"No Result Found..."}
              />
            ) : (
              searchResults?.map((p) => (
                <NextLink href={`product/${p?._id}`}>
                  <a>
                    <ComboboxOption
                      key={`${p.name}__prod__option`}
                      value={p.name}
                    />
                  </a>
                </NextLink>
              ))
            )}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <svg
        className="absolute opacity-75 group w-4 h-4 top-3 right-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default Searchbar
