import cx from "clsx"
import { ReactNode, useState } from "react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure"
import { Chevron } from "../icons"

interface Props {
  text?: string
  children: ReactNode
  invert?: boolean
  className?: string
}

const LocalePopover = ({
  className,
  invert,
  text,
  children,
  ...rest
}: Props) => {
  const [isLocalePopover, setIsLocalePopover] = useState(false)
  return (
    <div {...rest} className="relative">
      <Disclosure>
        <DisclosureButton
          className={cx(
            "w-full justify-center items-center text-lg",
            className
          )}
          onClick={() => setIsLocalePopover((p) => !p)}
        >
          <div className="flex flex-row items-center py-2 mx-2">
            <span
              className={cx("flex text-xs", [
                invert ? "text-white" : "text-gray-800",
              ])}
            >
              {text}
            </span>
            <Chevron
              className={cx(
                "ml-1 w-4 h-4 transform transition-transform duration-300",
                [isLocalePopover && "rotate-180"]
              )}
            />
          </div>
        </DisclosureButton>
        <DisclosurePanel className="z-1 top-10 px-2 py-1 absolute bg-gray-50 border border-gray-200 rounded-md shadow-md">
          <div className="flex justify-center items-center text-lg text-gray-700">
            {children}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  )
}

export default LocalePopover
