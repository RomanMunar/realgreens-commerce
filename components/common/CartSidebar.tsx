import { DialogContent } from "@reach/dialog"
import { useUI } from "../../lib/useUI"
import { Close, Inbox } from "../icons"
import RightNav from "./RightNav"

const CartSidebar = () => {
  const { closeSidebar } = useUI()

  return (
    <DialogContent
      aria-label="Cart Items"
      className="right-0 max-w-full absolute top-0 flex sm:pl-16 outline-none text-white h-screen md:w-screen md:max-w-md"
    >
      <div className="h-full flex flex-col text-base bg-green-900 shadow-xl overflow-y-auto">
        <div className="h-full flex flex-col">
          <header className="flex items-center justify-between p-4 pb-4 sm:px-6">
            <div className="h-7 flex items-center">
              <button
                aria-label="Close panel"
                className="hover:text-gray-500 transition ease-in-out duration-150"
                onClick={closeSidebar}
              >
                <Close className="h-6 w-6" />
              </button>
            </div>
            <RightNav invert />
          </header>
          <div className="flex-1 px-4 flex flex-col justify-center items-center">
            <span className="border-2 border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
              <Inbox
                fill="none"
                stroke="currentColor"
                className="w-12 h-12 absolute"
              />
            </span>
            <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
              Your cart is empty
            </h2>
            <p className="text-accents-3 px-10 text-center pt-2">
              Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}

export default CartSidebar
