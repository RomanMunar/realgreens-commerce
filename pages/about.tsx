import { Layout } from "../components"
interface Props {}

const About = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <p className="Text_body__V9VBQ">
        <strong id="about">About</strong>
        <p>
          <section id="about">
            <h1 className="text-2xl font-medium">About this website</h1>
            <h4 className="ml-10 text-lg font-medium">Tech stack used</h4>
            <ul className="ml-20">
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.nextjs.org"
                >
                  Next.Js
                </a>
              </li>
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.tailwindcss.com"
                >
                  TailwindCSS
                </a>
              </li>
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.typescriptlang.org"
                >
                  Typescript
                </a>
              </li>
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.nextjs.org"
                >
                  Context and Reducer
                </a>
              </li>
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.reach.tech"
                >
                  Reach UI for accessibility
                </a>
              </li>
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.reach.tech"
                >
                  MongoDB
                </a>
              </li>
              <li>
                <div className="p-1 mr-3 inline-block rounded-full bg-gray-500" />
                and{" "}
                <a
                  className="inline-flex items-center text-blue-600"
                  href="https://www.reach.tech"
                >
                  Storybook for documenting components
                </a>
              </li>
            </ul>
          </section>
          <span>
            <br />
            <br />
          </span>
          <span>
            <strong id="returns-policy">Returns Policy</strong>
          </span>
          <span>
            <span>
              <br />
              <br />
            </span>
            You may return most new, unopened items within 30 days of delivery
            for a full refund. We'll also pay the return shipping costs if the
            return is a result of our error (you received an incorrect or
            defective item, etc.).
            <br />
            <br />
            You should expect to receive your refund within four weeks of giving
            your package to the return shipper, however, in many cases you will
            receive a refund more quickly. This time period includes the transit
            time for us to receive your return from the shipper (5 to 10
            business days), the time it takes us to process your return once we
            receive it (3 to 5 business days), and the time it takes your bank
            to process our refund request (5 to 10 business days).
            <br />
            <br />
            If you need to return an item, please &nbsp;
            <a href="%%GLOBAL_ShopPathSSL%%/contact-us/">Contact Us</a>
            &nbsp;with your order number and details about the product you would
            like to return. We will respond quickly with instructions for how to
            return items from your order.
            <br />
            <br />
          </span>
          <strong id="shipping">Shipping</strong>
          <span>
            <span>
              <br />
              <br />
            </span>
            We can ship to virtually any address in the world. Note that there
            are restrictions on some products, and some products cannot be
            shipped to international destinations.
            <br />
            <br />
            When you place an order, we will estimate shipping and delivery
            dates for you based on the availability of your items and the
            shipping options you choose. Depending on the shipping provider you
            choose, shipping date estimates may appear on the shipping quotes
            page.
            <br />
            <br />
            Please also note that the shipping rates for many items we sell are
            weight-based. The weight of any such item can be found on its detail
            page. To reflect the policies of the shipping companies we use, all
            weights will be rounded up to the next full pound.
          </span>
        </p>
      </p>
    </div>
  )
}
About.Layout = Layout

export default About
