import "tailwindcss/tailwind.css"
import { AppProps } from "next/app"
import { ReactNode } from "react"
import { Head } from "../components/common"
import { UIProvider } from "../lib/useUI"

const Noop: ReactNode = ({ children }: { children: ReactNode }) => (
  <>{children}</>
)
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  return (
    <>
      <Head />
      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  )
}

export default MyApp
