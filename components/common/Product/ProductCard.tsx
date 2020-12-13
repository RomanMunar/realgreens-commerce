import Image from "next/image"
import { IProduct } from "../../../interfaces/Product"
import { Heart } from "../../icons"
import NextLink from "next/link"
import cx from "clsx"

interface Props {
  product: IProduct
  variant?: "fixed" | "fill"
  width?: number
  height?: number
  skipTab?: boolean
  idx: number
}

const ProductCard = ({
  skipTab = false,
  product,
  variant = "fill",
  width,
  height,
  idx,
  ...rest
}: Props) => {
  const colorIdx = idx % 3

  return (
    <NextLink {...rest} href={`/product/${product._id}`}>
      <a
        tabIndex={skipTab ? -1 : 1}
        className="group block relative h-full w-full"
      >
        <div
          style={{
            height: variant === "fixed" ? height : "",
            width: variant === "fixed" ? width : "",
          }}
          className={cx(
            "h-80",
            colorIdx === 0 && "bg-red-200",
            colorIdx === 1 && "bg-blue-200",
            colorIdx === 2 && "bg-yellow-300"
          )}
        >
          {variant === "fill" ? (
            <Image
              layout="fill"
              className="w-full min-h-80"
              quality={85}
              src={`/products/${product.image}.jpg`}
              alt={`${product.image}`}
            />
          ) : (
            <Image
              layout="fixed"
              width={width!}
              height={height!}
              src={`/products/${product.image}.jpg`}
              className="min-w-56 h-56"
              alt={`${product.image}`}
            />
          )}
          <div className="absolute bottom-0  left-0 p-2  bg-white text-green-800 group-hover:bg-green-500 group-hover:text-white  transform transition-colors duration-200 tracking-wide">
            <h3 className="font-bold text-2xl capitalize">{product.name}</h3>
            <h3 className="font-medium text-md">₱{product.price}/kg</h3>
          </div>
        </div>
        <button
          tabIndex={skipTab ? -1 : 1}
          className="absolute bottom-0 right-0 p-2 bg-white text-green-800 group-hover:bg-green-500 group-hover:text-white  transform transition-colors duration-200 "
        >
          <Heart className="h-6 w-6" />
        </button>
      </a>
    </NextLink>
  )
}

export default ProductCard
