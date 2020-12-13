import { User } from "next-auth"
import React from "react"
import { useUI } from "../../lib/useUI"
import { Close } from "../icons"
import Button from "./Button"

interface Props {
  user: User
  signOut: () => void
  close: () => void
}

const ProfileModal = ({ user, signOut, close }: Props) => {
  const { closeModal, setModalView } = useUI()

  const noUser = (
    <div className="px-5 w-full">
      <h4 className="text-center text-xl pt-2 font-medium">
        Hey uhh this is embarassing,
      </h4>
      <p className="text-center text-gray-800 text-sm">
        There's an error :( You shouldn't see this, please contact us to help us
        solve this bug
      </p>
    </div>
  )

  return (
    <div>
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
        {user && (
          <div className="mt-2 w-full mx-auto flex flex-col items-center justify-center text-green-800 item-center">
            {user.image && <img className="rounded-full" src={user.image} />}
            {user.email && (
              <h4 className="text-center text-xs text-gray-700 font-medium">
                {user.email}
              </h4>
            )}
          </div>
        )}
      </header>
      {user && user.name ? (
        <div className="px-5 w-full flex flex-col">
          <h4 className="text-center text-xl pt-2 font-medium">
            Hey {user.name.split(" ")[0]},
          </h4>
          <p className="text-center text-gray-800 text-sm">
            happy to see you here !
          </p>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              closeModal()
              signOut()
              setModalView("LOGIN_VIEW")
            }}
          >
            Sign out
          </Button>
        </div>
      ) : (
        noUser
      )}
    </div>
  )
}

export default ProfileModal
