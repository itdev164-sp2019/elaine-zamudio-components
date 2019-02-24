import React from "react"
import { Link } from "gatsby"
import Image2 from "../gatsby-components/image2"
import Layout from "../layouts/layout"
import SEO from "../gatsby-components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="A Star" />
    <h1>V838 Monocerotis (V838 Mon)</h1>
    <p>Credit:
NASA, ESA, and The Hubble Heritage Team (AURA/STScI)</p>
    <Image2 />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
