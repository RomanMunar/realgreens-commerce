import cx from "clsx"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import { Chevron } from "../../icons"
import "keen-slider/keen-slider.min.css"

const ProductSlider = ({ images }: { images: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    loop: true,
  })

  return (
    <div className="relative h-full w-full">
      {slider && (
        <div
          className="absolute p-2 w-full h-full flex items-center justify-between"
          id="arrows"
        >
          <button
            onClick={slider.prev}
            className="z-1 active:transform scale-50 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 p-2 rounded-full bg-white"
          >
            <Chevron className="text-green-400 w-6 h-6 transform transition-transform duration-300 rotate-90" />
          </button>
          <button
            onClick={slider.next}
            className="z-1 active:transform scale-50 transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 p-2 rounded-full bg-white"
          >
            <Chevron className="text-green-400 w-6 h-6 transform transition-transform duration-300 -rotate-90" />
          </button>
        </div>
      )}
      <div id="images">
        <div
          ref={sliderRef}
          className="keen-slider bg-gray-400 max-w-100 block"
        >
          {images.map((img) => (
            <img
              className="keen-slider__slide h-52 sm:h-56 w-100 md:h-96"
              src={`/products/${img}.jpg`}
              alt={img}
            />
          ))}
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
              onClick={() => slider.moveToSlide(idx)}
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
