import cx from "clsx"
import { User } from "next-auth"
import NextLink from "next/link"
import { useUI } from "../../lib/useUI"
import { AvatarButton, Popover } from "../core"
import { Cart, ShoppingBag } from "../icons"

interface Props {
  invert?: boolean
  locale?: string
  user?: User | null
}

const RightNav = ({ locale, invert = false, user }: Props) => {
  const { toggleSidebar, setModalView, openModal } = useUI()
  return (
    <div className="flex items-start justify-between space-x-3">
      <div className="flex items-center space-x-4">
        <Popover
          aria-label="Locale picker"
          invert={invert}
          text={locale === "en-PH" ? "🇵🇭 en-PH" : "🇬🇧 en-US"}
          className="hidden lg:flex"
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
          img={user?.image}
          onClick={() => {
            user ? setModalView("PROFILE_VIEW") : setModalView("LOGIN_VIEW")
            openModal()
          }}
        />
      </div>
    </div>
  )
}

export default RightNav
