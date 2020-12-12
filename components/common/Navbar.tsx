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
            <a className="pt-2 flex text-green-800 item-center">
              <Logo className="mr-1 mt-1 h-6 w-6" />
              <h1 className="text-2xl font-medium">RealGreen</h1>
            </a>
          </NextLink>
          <div className="hidden md:block">
            <ul className="h-full flex items-center ml-4 divide-x">
              {Categories.map((c) => (
                <li key={`${c}_nav-item`}>
                  <NextLink href={`/search?category=${c}`}>
                    <a className="flex flex-col items-center">
                      <Button size="sm" variant="link">
                        {c}
                      </Button>
                      <div
                        className={cx(
                          "border w-2/3",
                          category === c
                            ? "border-green-500"
                            : "border-transparent"
                        )}
                      />
                    </a>
                  </NextLink>
                </li>
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