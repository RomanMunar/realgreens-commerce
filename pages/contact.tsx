import NextLink from "next/link"
import React from "react"
import { Layout } from "../components"

const Contact = () => (
  <div className="max-w-2xl space-y-5 mx-auto py-10">
    <section id="introduction">
      <h3 className="text-xl font-medium"> 👋👋 Oh Hey There</h3>
      <p className="w-full ml-10">
        Glad you have visited this site, hope this impressed you, the design is
        heavily inspired from this website called{" "}
        <a className="text-blue-600" href="https://demo.vercel.store/">
          Vercel's Store
        </a>{" "}
        which has a neutral and monotone feel, I tried to go for a more fresh
        and calm design so I opted for colors that are soft and lime-ish green
        shades{" "}
        <NextLink href="/about">
          <a className="text-blue-600">more info here</a>
        </NextLink>
        , anyways enough rambling :). If you wanna know more feel free to
        contact me,{" "}
        <button
          onClick={() => {
            navigator.clipboard.writeText("roman.munar1@gmail.com")
            alert("Successfully copied my email, hope to get your mail soon :)")
          }}
          id="email"
          className="text-blue-600"
        >
          roman.munar1@gmail.com{" "}
          <span className="text-xs text-gray-600">Click to copy</span>
        </button>
      </p>
    </section>
    <section id="me">
      <h4 className="text-lg font-medium">Me</h4>
      <p className="ml-10">
        I'm a versatile developer, on the frontend I use react with typescript
        to build complex products/features, but could also use either angular or
        vue. On the backend, I have built apps using Ruby On Rails, Firebase and
        NodeJS &lt;3. I also am a big fan of UX design, really like making
        well-designed and purpose-driven websites.
      </p>
      Like to know more? head over to my website
      <span className="text-sm text-green-500">
        <a href="https://www.romanmunar.me">romanmunar.me</a>
      </span>
    </section>
  </div>
)

Contact.Layout = Layout

export default Contact
