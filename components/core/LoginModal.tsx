import { useState, useEffect } from "react"
import { getCsrfToken } from "next-auth/client"
import { Button } from "."
import { useUI } from "../../lib/useUI"
import { Close, Facebook, Google, Logo } from "../icons"

interface Props {
  close: () => void
  signIn: (provider_id: string) => void
  loading?: boolean
}

const LoginModal = ({ loading, close, signIn }: Props) => {
  const { setModalView } = useUI()
  const [csrfToken, setCsrfToken] = useState<string | null>(null)

  useEffect(() => {
    newToken()

    async function newToken() {
      if (csrfToken) return
      const newCsrfToken = await getCsrfToken()
      return setCsrfToken(newCsrfToken)
    }
  }, [csrfToken])

  return (
    <>
      <header className="relative flex w-full px-5 items-center justify-between">
        <div className="absolute right-0 -top-4 h-7 flex items-center">
          <button
            aria-label="Close panel"
            className="hover:text-gray-500 transition ease-in-out duration-150"
            onClick={close}
          >
            <Close className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-2 w-full mx-auto flex items-center justify-center text-green-800 item-center">
          <Logo className="mr-1 h-14 w-14" />
          <h1 className="text-4xl pt-2 font-medium">RealGreen</h1>
        </div>
      </header>
      {loading && (
        <div className="px-5 text-center">
          Please wait while we are logging you in :)
        </div>
      )}
      <form method="post" action="/api/auth/signin/email">
        {csrfToken && (
          <input name="csrfToken" type="hidden" value={csrfToken} />
        )}
        <label>
          Email address
          <input type="text" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form>
      <div className="w-full flex px-5  flex-row items-center justify-between">
        <div className="border w-2/5 border-gray-400"></div>
        <span className="text-gray-600">or</span>
        <div className="border w-2/5 border-gray-400"></div>
      </div>
      <div className="w-full px-5">
        <h5 className="text-center text-gray-700">Sign in with</h5>
        <div className="flex justify-center items-center">
          <Button
            onClick={() => signIn("google")}
            block
            size="sm"
            variant="link"
          >
            <div className="inline-block -ml-3 mr-3 bg-green-200 rounded-md p-1">
              <Google className="w-4 h-4" />
            </div>
            Google
          </Button>
          <Button
            onClick={() => signIn("facebook")}
            block
            size="sm"
            variant="link"
          >
            <div className="inline-block -ml-3 mr-3 bg-green-200 rounded-md p-1">
              <Facebook className="w-4 h-4" />
            </div>
            Facebook
          </Button>
        </div>
      </div>

      <div className="w-full text-xs px-5 mx-auto">
        <span className="text-gray-600">Don't have an account?</span>{" "}
        <button
          className="font-medium"
          onClick={() => setModalView("SIGNUP_VIEW")}
        >
          Sign Up
        </button>
      </div>
    </>
  )
}

export default LoginModal
