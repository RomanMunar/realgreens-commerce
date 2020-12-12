import { useUI } from "../../lib/useUI"
import { Close, Facebook, Google, Logo, Twitter } from "../icons"
import { Button } from "."

interface Props {
  close: () => void
}

const LoginModal = ({ close }: Props) => {
  const { setModalView } = useUI()

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
      <div className="flex flex-col w-full px-5 items-center space-y-2">
        <div>
          <label className="sr-only" htmlFor="username">
            Username
          </label>
          <input
            placeholder="Username"
            className="border focus:ring-green-500 focus:ring-offset-2 border-gray-400 w-full pl-3 py-2 rounded-sm focus:outline-none focus:ring-2 ring-green-700 ring-opacity-40"
            id="username"
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Password"
            className="border border-gray-400 focus:ring-green-500 focus:ring-offset-2 w-full pl-3 py-2 rounded-sm focus:outline-none focus:ring-2 ring-green-700 ring-opacity-40"
            id="password"
            type="password"
          />
        </div>
        <Button block>Login</Button>
      </div>
      <div className="w-full flex px-5  flex-row items-center justify-between">
        <div className="border w-2/5 border-gray-400"></div>
        <span className="text-gray-600">or</span>
        <div className="border w-2/5 border-gray-400"></div>
      </div>
      <div className="w-full px-5 space-y-1 flex flex-col justify-around items-center">
        <Button block size="sm" variant="secondary">
          <Twitter className="w-5 h-5 mr-3  rounded-md" /> Twitter
        </Button>
        <Button block size="sm" variant="secondary">
          <Google className="w-5 h-5 mr-3 rounded-md" /> Google
        </Button>
        <Button block size="sm" variant="secondary">
          <Facebook className="w-5 h-5 mr-3 rounded-md" />
          <span className="-mr-5">Facebook</span>
        </Button>
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
