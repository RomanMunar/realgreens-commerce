import NextLink from "next/link"
import { Popover } from "../core"
import { Logo } from "../icons"
interface Props {
  locale?: string
}

const Footer = ({ locale }: Props) => {
  return (
    <div className="bg-yellow-100 w-full divide-y-4  px-20 py-10">
      <div className="space-y-2 divide-y-2 sm:divide-y-0 mb-5 sm:grid sm:grid-cols-4 lg:grid-cols-5">
        <div>
          <NextLink href="/">
            <button className="flex text-green-800 item-center">
              <Logo className="mr-1 mt-1 h-6 w-6" />
              <h1 className="text-2xl font-medium">RealGreen</h1>
            </button>
          </NextLink>
        </div>
        <div>
          <ul className="space-y-1 text-green-900 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">About</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1 text-green-900 font-medium">
            <li className="cursor-pointer">Terms of Use</li>
            <li className="cursor-pointer">Shipping & Returns</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div className="col-span-2 justify-self-end">
          <div className="rounded-md mt-4 sm:mt-0 w-24 bg-gray-50">
            <Popover text={locale === "en-PH" ? "🇵🇭 en-PH" : "🇬🇧 en-US"}>
              <span className="whitespace-nowrap mx-2 text-xs text-gray-800">
                {locale === "en-PH" ? "🇬🇧 en-US" : "🇵🇭 en-PH"}
              </span>
            </Popover>
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-between items-center">
        <p>© 2020 REALGREEN, Inc. All rights reserved.</p>
        <p>Crafted By, ROMAN MUNAR</p>
      </div>
    </div>
  )
}

export default Footer