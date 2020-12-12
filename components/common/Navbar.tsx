import cx from "clsx"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { Searchbar } from "."
import { Categories } from "../../interfaces/Category"
import { Button } from "../core"
import { Logo } from "../icons"
import RightNav from "./RightNav"

const Navbar = () => {
  const { query, locale } = useRouter()
  const { category } = query

  return (
    <nav className="bg-gray-100 px-4 py-3">
      <div className="flex item-center justify-between">
        <div className="flex item-center">
          <NextLink href="/">
            <a className="pt-1 flex text-green-800 item-center">
              <Logo className="mr-1 mt-1 h-6 w-6" />
              <h1 className="text-2xl font-medium">RealGreen</h1>
            </a>
          </NextLink>
          <div className="hidden md:block">
            <ul className="h-full flex items-center ml-4 space-x-1 divide-x">
              {Categories.map((c) => (
                <NextLink href={`/search?category=${c}`}>
                  <a className="flex flex-col items-center">
                    <li key={`${c}_nav-item`}>
                      <Button
                        className="block"
                        as="h3"
                        size="sm"
                        variant="link"
                      >
                        {c}
                      </Button>
                      <div
                        className={cx(
                          "border mx-auto w-2/3",
                          category === c
                            ? "border-green-500"
                            : "border-transparent"
                        )}
                      />
                    </li>
                  </a>
                </NextLink>
              ))}
            </ul>
          </div>
        </div>
        <div className="-ml-20 hidden sm:block">
          <Searchbar />
        </div>
        <RightNav locale={locale} />
      </div>
      <div className="sm:hidden mt-4 w-full flex-1">
        <Searchbar />
      </div>
    </nav>
  )
}

export default Navbar
