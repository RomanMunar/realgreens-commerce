import { useUI } from "../../lib/useUI"
import { AvatarButton, Popover } from "../core"
import NextLink from "next/link"
import { Close, Cart, ShoppingBag } from "../icons"
import cx from "clsx"
interface Props {
  invert?: boolean
  locale?: string
}

const RightNav = ({ locale, invert = false }: Props) => {
  const { toggleSidebar, setModalView, openModal } = useUI()

  return (
    <div className="flex items-start justify-between space-x-3">
      <div className="flex items-center space-x-4">
        <Popover
          aria-label="Locale picker"
          invert={invert}
          text={locale === "en-PH" ? "🇵🇭 en-PH" : "🇬🇧 en-US"}
        >
          <span className="whitespace-nowrap mx-2 text-xs text-gray-800">
            {locale === "en-PH" ? "🇬🇧 en-US" : "🇵🇭 en-PH"}
          </span>
        </Popover>
        <button
          aria-label="Open Cart"
          className={cx(
            "transition ease-in-out duration-150",
            invert
              ? "hover:text-green-300 text-white"
              : "hover:text-green-600 text-green-900"
          )}
          onClick={toggleSidebar}
        >
          <Cart
            onClick={toggleSidebar}
            className="cursor-pointer inline-flex w-6 h-6"
          />
        </button>
        <NextLink href="/wishlist">
          <button
            aria-label="To wishlist page"
            className={cx(
              "transition ease-in-out duration-150",
              invert
                ? "hover:text-green-300 text-white"
                : "hover:text-green-600 text-green-900"
            )}
          >
            <ShoppingBag className="cursor-pointer inline-flex w-6 h-6" />
          </button>
        </NextLink>
        <AvatarButton
          onClick={() => {
            setModalView("LOGIN_VIEW")
            openModal()
          }}
        />
      </div>
    </div>
  )
}

export default RightNav
