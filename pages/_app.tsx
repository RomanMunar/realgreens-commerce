import "tailwindcss/tailwind.css"
import { AppProps } from "next/app"
import { ReactNode } from "react"
import { Head } from "../components/common"
import { UIProvider } from "../lib/useUI"
import { Provider } from "next-auth/client"

const Noop: ReactNode = ({ children }: { children: ReactNode }) => (
  <>{children}</>
)
function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  return (
    <>
      <Head />
      <UIProvider>
        <Provider
          options={{
            // Client Max Age controls how often the useSession in the client should
            // contact the server to sync the session state. Value in seconds.
            // e.g.
            // * 0  - Disabled (always use cache value)
            // * 180 - Sync session state with server if it's older than 180 seconds
            clientMaxAge: 180,
            // Keep Alive tells windows / tabs that are signed in to keep sending
            // a keep alive request (which extends the current session expiry) to
            // prevent sessions in open windows from expiring. Value in seconds.
            //
            // Note: If a session has expired when keep alive is triggered, all open
            // windows / tabs will be updated to reflect the user is signed out.
            // keepAlive: 0,
          }}
          session={pageProps.session}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </UIProvider>
    </>
  )
}

export default MyApp
