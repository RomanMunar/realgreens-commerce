import { Layout } from "../components"
import { Heart } from "../components/icons"

const Wishlist = () => {
  return (
    <div className="bg-green-50 pt-10 px-16">
      <h1 className="text-3xl font-semibold">My Wishlist</h1>
      <div className="flex-1 px-12 py-24 flex flex-col justify-center items-center ">
        <span className="border-2 border-dashed border-green-600 flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary">
          <Heart className="h-7 w-7 absolute text-green-900" />
        </span>
        <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
          Your wishlist is empty
        </h2>
        <p className="text-accents-6 px-10 text-center pt-2">
          By clicking the Heart Icon on a product, that product will be listed
          in here.
        </p>
      </div>
    </div>
  )
}
Wishlist.Layout = Layout

export default Wishlist
