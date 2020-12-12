import React, {
  ButtonHTMLAttributes,
  forwardRef,
  JSXElementConstructor,
  ReactNode,
} from "react"
import cx from "clsx"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: "link" | "secondary" | "primary"
  type?: "submit" | "reset" | "button"
  as?: string | JSXElementConstructor<any>
  loading?: boolean
  disabled?: boolean
  block?: boolean
  children?: ReactNode
  onClick?: () => void
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef((props: Props, buttonRef) => {
  const {
    onClick,
    className,
    variant = "primary",
    type,
    disabled,
    as: As = "button",
    loading = false,
    children,
    block = false,
    size = "md",
    ...rest
  } = props
  const link = "text-green-800 hover:text-green-500"
  const primary =
    "text-white bg-green-600 hover:bg-green-700 ring-green-700 focus:outline-none focus:ring-2 "
  const secondary =
    "text-green-600 bg-white hover:bg-green-50 ring-green-700 focus:outline-none focus:ring-2 "

  return (
    <As
      disabled={disabled}
      className={cx(
        "whitespace-nowrap capitalize hover:shadow-sm inline-flex items-center justify-center border border-transparent text-base font-medium rounded-md ring-offset-2",
        [variant === "link" && link],
        [variant === "primary" && primary],
        [variant === "secondary" && secondary],
        [block && "w-full block"],
        [size === "sm" && "py-1 px-3 block"],
        [size === "md" && "py-3 px-5 block"],
        [size === "lg" && "py-5 px-7 block"],
        className
      )}
      onClick={onClick}
      ref={buttonRef}
      {...rest}
    >
      {children}
    </As>
  )
})

export default Button
