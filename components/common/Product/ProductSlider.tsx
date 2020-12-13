import cx from "clsx"
import { useState } from "react"
import { Chevron } from "../../icons"

const ProductSlider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const handleCurrentSlide = (action?: "INC" | "DEC" | number) => {
    if (typeof action === "number") return setCurrentSlide(action)
    if (action === "INC") {
      if (currentSlide === images.length - 1) {
        return setCurrentSlide(0)
      }
      return setCurrentSlide((p) => p + 1)
    }
    if (action === "DEC") {
      if (currentSlide === 0) {
        return setCurrentSlide(images.length - 1)
      }
      return setCurrentSlide((p) => p - 1)
    }
  }
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute p-2 w-full h-full flex items-center justify-between"
        id="arrows"
      >
        <button
          onClick={() => handleCurrentSlide("DEC")}
          className="active:transform scale-50 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 p-2 rounded-full bg-white"
        >
          <Chevron
            className={cx(
              "text-green-400 w-6 h-6 transform transition-transform duration-300 rotate-90"
            )}
          />
        </button>
        <button
          onClick={() => handleCurrentSlide("INC")}
          className="active:transform scale-50 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 p-2 rounded-full bg-white"
        >
          <Chevron
            className={cx(
              "text-green-400 w-6 h-6 transform transition-transform duration-300 -rotate-90"
            )}
          />
        </button>
      </div>
      <div id="images">
        <div className="bg-gray-400 max-w-100 block">
          <img
            className="sm:h-56 w-100 md:h-96"
            src={`/products/${images[currentSlide]}.jpg`}
            alt={images[currentSlide]}
          />
        </div>
      </div>
      <div
        className="absolute space-x-2 flex w-full bottom-10 items-center justify-center"
        id="dots"
      >
        {images?.length > 1 &&
          images.map((i, idx) => (
            <button
              key={i}
              onClick={() => handleCurrentSlide(idx)}
              className={cx(
                "p-1 bg-gray-400 border-2 border-white rounded-full",
                [currentSlide === idx && "bg-green-400"]
              )}
            />
          ))}
      </div>
    </div>
  )
}

export default ProductSlider
