import cx from "clsx"
import { ReactNode, useEffect, useRef, useState } from "react"
import Ticker from "react-ticker"
import { useIntersection } from "../../lib/hooks"

interface Props {
  className?: string
  children?: ReactNode
}

const Marquee = ({ className = "", children }: Props) => {
  const intersectionRef = useRef<HTMLDivElement>(null)
  const rootClassName = cx("min-w-full min-w-56", className)
  const inView = useIntersection(intersectionRef, { root: null })
  const [shown, setShown] = useState(false)
  useEffect(() => {
    setShown(true)
  }, [])

  return (
    <div className={rootClassName} ref={intersectionRef}>
      {shown || (inView && inView.intersectionRatio !== 0) ? (
        <Ticker speed={10} offset={120}>
          {() => (
            <div className="flex flex-row items-center space-x-3">
              {children}
            </div>
          )}
        </Ticker>
      ) : null}
    </div>
  )
}

export default Marquee
