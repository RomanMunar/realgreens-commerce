import React from "react"
import { Layout } from "../components"
import ProductsGrid from "../components/common/ProductsGrid"
import products from "../lib/hooks/mockDatas/products"
import { useRouter } from "next/router"
import { Categories, ICatergory } from "../interfaces/Category"
import { Vendor, Vendors } from "../interfaces/Vendors"

const Search = () => {
  const router = useRouter()
  const { category, vendor } = router.query as {
    category: ICatergory
    vendor: Vendor
  }

  return (
    <ProductsGrid category={category} vendor={vendor} products={products} />
  )
}

Search.Layout = Layout

export default Search
