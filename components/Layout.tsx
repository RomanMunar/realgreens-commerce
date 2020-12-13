import { DialogOverlay, DialogContent } from "@reach/dialog"
import { User } from "next-auth"
import { useSession, signIn, signOut } from "next-auth/client"
import { useRouter } from "next/router"
import React, { ReactElement, ReactNode, useEffect, useState } from "react"
import { useUI } from "../lib/useUI"
import { CartSidebar, Navbar } from "./common"
import Footer from "./common/Footer"
import { ProfileModal, LoginModal, SignupModal } from "./core"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props): ReactElement => {
  const {
    displaySidebar,
    closeSidebar,
    displayModal,
    modalView,
    closeModal,
  } = useUI()

  const [session, loading] = useSession()
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    if (session) {
      setUser(session.user)
    } else {
      setUser(null)
    }
  }, [session])
  const {
    query: { category: currentPath },
    locale,
  } = useRouter()

  return (
    <div className="border-t-4 border-green-500">
      <Navbar locale={locale} currentPath={currentPath} user={user} />
      <DialogOverlay
        className="z-1 fixed top-0 bottom-0 right-0 left-0 overflow-auto bg-opacity-30 bg-black"
        isOpen={displaySidebar}
        onDismiss={closeSidebar}
      >
        <CartSidebar />
      </DialogOverlay>
      <DialogOverlay
        className="z-1 fixed top-0 bottom-0 right-0 left-0 overflow-auto bg-opacity-30 bg-black"
        isOpen={displayModal}
        onDismiss={closeModal}
      >
        <DialogContent
          aria-label="Log In Form"
          className="absolute space-y-4 top-1/4 left-1/2 -mt-28 -ml-44 w-96 flex py-10 px-10 flex-col bg-white justify-center items-center"
        >
          {modalView === "LOGIN_VIEW" && (
            <LoginModal loading={loading} signIn={signIn} close={closeModal} />
          )}
          {modalView === "SIGNUP_VIEW" && (
            <SignupModal signIn={signIn} close={closeModal} />
          )}
          {modalView === "PROFILE_VIEW" && user && (
            <ProfileModal signOut={signOut} close={closeModal} user={user} />
          )}
        </DialogContent>
      </DialogOverlay>
      <main className="min-h-page bg-green-50">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}

export default Layout
