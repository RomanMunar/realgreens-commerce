import { useRouter } from "next/router"
import React from "react"
import { Layout } from "../components"
import ProductsGrid from "../components/common/ProductsGrid"
import { ICatergory } from "../interfaces/Category"
import { Vendor } from "../interfaces/Vendors"
import products from "../lib/hooks/mockDatas/products"

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
